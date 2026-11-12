// Add the public webhook endpoint after the receiving service is configured.
// Do not place private API keys or other secrets in this browser-side file.
const LEAD_WEBHOOK_URL = "";
const builderSlug = document.body.dataset.builder?.trim().toLowerCase();
if (!builderSlug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(builderSlug)) {
  throw new Error(
    'Set body data-builder to a valid builder slug, such as "birla".',
  );
}

let builderModule;
try {
  builderModule = await import(`../data/${builderSlug}.js`);
} catch (error) {
  throw new Error(
    `Could not load data/${builderSlug}.js. Add a builder data module for this page.`,
    { cause: error },
  );
}

const modulePrefix = builderSlug.replace(/-([a-z])/g, (_, letter) =>
  letter.toUpperCase(),
);
const configuredBuilder =
  builderModule.builderConfig || builderModule.default || {};
const propertiesData =
  configuredBuilder.properties ||
  (Array.isArray(configuredBuilder) ? configuredBuilder : null) ||
  builderModule[`${modulePrefix}Data`] ||
  builderModule[`${modulePrefix}Projects`] ||
  builderModule.properties;
const faqsData =
  configuredBuilder.faqs ||
  builderModule[`${modulePrefix}Faqs`] ||
  builderModule[`${modulePrefix}FAQs`] ||
  builderModule.faqs ||
  [];
const generatedName = builderSlug
  .split("-")
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(" ");
const activeBuilderData = {
  ...configuredBuilder,
  slug: configuredBuilder.slug || builderSlug,
  name: configuredBuilder.name || builderModule.builderName || generatedName,
  properties: propertiesData,
  faqs: faqsData,
};
if (!Array.isArray(activeBuilderData.properties)) {
  throw new Error(
    `data/${builderSlug}.js must export builderConfig.properties or ${modulePrefix}Data as an array.`,
  );
}
if (!Array.isArray(activeBuilderData.faqs)) {
  throw new Error(`data/${builderSlug}.js must export FAQs as an array.`);
}
if (activeBuilderData.slug !== builderSlug) {
  throw new Error(
    `builderConfig.slug in data/${builderSlug}.js must match the page data-builder value.`,
  );
}

if (!faqsData.length)
  console.warn(`No FAQ entries were found for builder "${builderSlug}".`);
const initialDocumentTitle = document.title;

const builderTheme = activeBuilderData.theme || {};
const themeVariables = {
  "--builder-primary": builderTheme.primary || "#0F382C",
  "--builder-primary-hover": builderTheme.primaryHover || "#09241C",
  "--builder-accent": builderTheme.accent || "#D4AF37",
  "--builder-surface": builderTheme.surface || "#F9FAF9",
  "--builder-soft": builderTheme.soft || "#E8F0EC",
  "--builder-border": builderTheme.border || "#E8F0EC",
};
Object.entries(themeVariables).forEach(([variable, value]) => {
  document.documentElement.style.setProperty(variable, value);
});
// CURRENT STATE
let activeProperty = propertiesData[0];
let projectGalleryImages = [];
let currentGalleryCategory = "photo";
let currentGalleryIndex = 0;
let projectGalleryTrigger = null;
let currentActiveChip = "all";
let carouselResizeObserver;

function updatePropertyCarousel() {
  const track = document.getElementById("property-grid");
  const carousel = track.closest("[data-property-carousel]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const hasOverflow = track.scrollWidth > track.clientWidth + 1;
  const firstCard = track.querySelector(".property-card");
  const lastCard = track.querySelector(".property-card:last-of-type");
  const trackBounds = track.getBoundingClientRect();
  const atStart =
    !firstCard ||
    firstCard.getBoundingClientRect().left >= trackBounds.left - 1;
  const atEnd =
    !lastCard ||
    lastCard.getBoundingClientRect().right <= trackBounds.right + 1;

  carousel.classList.toggle("has-overflow", hasOverflow);
  carousel.classList.toggle("at-start", atStart);
  carousel.classList.toggle("at-end", atEnd);
  prev.hidden = !hasOverflow;
  next.hidden = !hasOverflow;
  prev.disabled = !hasOverflow || atStart;
  next.disabled = !hasOverflow || atEnd;
}

function movePropertyCarousel(direction) {
  const track = document.getElementById("property-grid");
  const card = track.querySelector(".property-card");
  if (!card) return;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  track.scrollBy({
    left: direction * (card.getBoundingClientRect().width + gap),
    behavior: "smooth",
  });
}

function populateCustomSelectMenu(wrapper) {
  const select = wrapper.querySelector("select");
  const trigger = wrapper.querySelector(".custom-select-trigger");
  const menu = wrapper.querySelector(".custom-select-menu");
  const label = trigger.querySelector("span");
  menu.replaceChildren();

  Array.from(select.options).forEach((option) => {
    const item = document.createElement("button");
    item.type = "button";
    item.setAttribute("role", "option");
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    item.setAttribute("aria-selected", String(option.selected));
    item.addEventListener("click", () => {
      select.value = option.value;
      label.textContent = option.textContent;
      menu.querySelectorAll('[role="option"]').forEach((optionButton) => {
        optionButton.setAttribute(
          "aria-selected",
          String(optionButton === item),
        );
      });
      select.dispatchEvent(new Event("change", { bubbles: true }));
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    });
    menu.appendChild(item);
  });

  const selectedOption = select.options[select.selectedIndex];
  if (selectedOption) label.textContent = selectedOption.textContent;
}

function initializeBuilderProjectSelect() {
  const select = document.getElementById("main-project-select");
  select.replaceChildren();
  propertiesData.forEach((property) => {
    const option = document.createElement("option");
    option.value = String(property.id);
    option.textContent = property.title || property.name;
    select.appendChild(option);
  });
  if (propertiesData.length) select.value = String(propertiesData[0].id);
  select
    .closest("[data-custom-select]")
    .querySelector(".custom-select-trigger").disabled = !propertiesData.length;
}

function selectEnquiryProject(projectId) {
  const select = document.getElementById("main-project-select");
  if (!select) return false;
  const project = propertiesData.find(
    (candidate) => String(candidate.id) === String(projectId),
  );
  if (!project) return false;

  const targetOption = Array.from(select.options).find(
    (opt) => String(opt.value) === String(projectId),
  );
  if (!targetOption) return false;

  select.value = targetOption.value;
  const wrapper = select.closest("[data-custom-select]");
  if (wrapper) {
    const trigger = wrapper.querySelector(".custom-select-trigger");
    const label = trigger?.querySelector("span");
    if (label) label.textContent = targetOption.textContent;
    const menu = wrapper.querySelector(".custom-select-menu");
    if (menu) {
      menu.querySelectorAll('[role="option"]').forEach((btn) => {
        btn.setAttribute(
          "aria-selected",
          String(btn.dataset.value === targetOption.value),
        );
      });
    }
  }
  select.dispatchEvent(new Event("change", { bubbles: true }));
  return true;
}

function restoreEnquiryProjectFromUrl() {
  const projectId = new URL(window.location.href).searchParams.get("project");
  if (projectId) selectEnquiryProject(projectId);
}

function goToProjectEnquiry(projectId) {
  if (!selectEnquiryProject(projectId)) return;
  navigateToBuilderSection("contact", "consultation-section");
  const url = new URL(window.location.href);
  url.searchParams.set("project", projectId);
  window.history.replaceState(
    { ...window.history.state, enquiryProjectId: projectId },
    "",
    `${url.pathname}${url.search}${url.hash}`,
  );
  requestAnimationFrame(() => {
    const section = document.getElementById("consultation-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const form = document.getElementById("main-consultation-form");
    const nameInput = form?.querySelector('input[name="fullName"]');
    if (nameInput) nameInput.focus();
  });
}

function initializeCustomSelects() {
  document.querySelectorAll("[data-custom-select]").forEach((wrapper) => {
    const trigger = wrapper.querySelector(".custom-select-trigger");
    const menu = wrapper.querySelector(".custom-select-menu");
    populateCustomSelectMenu(wrapper);

    trigger.addEventListener("click", () => {
      const shouldOpen = menu.hidden;
      document
        .querySelectorAll("[data-custom-select] .custom-select-menu")
        .forEach((otherMenu) => {
          otherMenu.hidden = true;
          otherMenu.style.width = "";
          otherMenu.style.left = "";
          otherMenu.style.top = "";
          otherMenu.parentElement
            .querySelector(".custom-select-trigger")
            .setAttribute("aria-expanded", "false");
        });
      menu.hidden = !shouldOpen;
      trigger.setAttribute("aria-expanded", String(shouldOpen));
      if (shouldOpen) {
        const triggerBounds = trigger.getBoundingClientRect();
        const menuHeight = menu.getBoundingClientRect().height;
        const edgePadding = 12;
        const menuWidth = Math.min(
          triggerBounds.width,
          window.innerWidth - edgePadding * 2,
        );
        const menuLeft = Math.max(
          edgePadding,
          Math.min(
            triggerBounds.left,
            window.innerWidth - menuWidth - edgePadding,
          ),
        );
        const spaceBelow =
          window.innerHeight - triggerBounds.bottom - edgePadding;
        const spaceAbove = triggerBounds.top - edgePadding;
        const openAbove =
          spaceBelow < menuHeight + 8 && spaceAbove > spaceBelow;
        const desiredTop = openAbove
          ? triggerBounds.top - menuHeight - 6
          : triggerBounds.bottom + 6;
        const menuTop = Math.max(
          edgePadding,
          Math.min(desiredTop, window.innerHeight - menuHeight - edgePadding),
        );
        menu.style.width = `${menuWidth}px`;
        menu.style.left = `${menuLeft}px`;
        menu.style.top = `${menuTop}px`;
        menu.querySelector('[aria-selected="true"]')?.focus();
      }
    });

    wrapper.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
        trigger.focus();
      }
    });
  });
}

// RENDER CATALOG CARDS
function renderPropertyGrid(items) {
  const grid = document.getElementById("property-grid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<div class="property-empty-state text-center py-12 text-slate-500 font-medium">No residences found matching your criteria.</div>`;
    updatePropertyCarousel();
    return;
  }

  items.forEach((prop) => {
    const coverImage = prop.thumbnail || prop.image || prop.images?.[0] || "";
    const card = document.createElement("div");
    card.className =
      "property-card cursor-pointer bg-white rounded-2xl overflow-hidden border border-builder-border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group";
    card.tabIndex = 0;
    card.setAttribute("role", "group");
    card.setAttribute(
      "aria-label",
      `${prop.title} property card. Activate to view details.`,
    );
    card.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) return;
      openDetailPage(prop.id);
    });
    card.addEventListener("keydown", (event) => {
      if (event.target !== card || !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      openDetailPage(prop.id);
    });
    card.innerHTML = `
                    <div class="relative h-64 overflow-hidden bg-builder-soft">
                        ${
                          coverImage
                            ? `<img src="${coverImage}" alt="${prop.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">`
                            : '<div class="w-full h-full flex items-center justify-center text-builder-primary/50"><i class="fa-regular fa-image text-4xl" aria-hidden="true"></i></div>'
                        }
                        <div class="absolute top-4 left-4 flex flex-col gap-1">
                            <span class="bg-builder-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                ${prop.category === "new-launch" ? "New Launch" : prop.category === "ongoing" ? "Ongoing Project" : prop.category === "ready" ? "Ready to Move" : "Project"}
                            </span>
                        </div>
                        ${
                          prop.reraId?.trim()
                            ? `
                            <div class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-builder-primary flex items-center gap-1">
                                <i class="fa-solid fa-circle-check text-emerald-600" aria-hidden="true"></i> RERA Verified
                            </div>
                        `
                            : ""
                        }
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="text-xs font-bold text-builder-accent uppercase tracking-wider mb-1">${prop.price}</div>
                            <h3 class="property-card-title font-serif text-xl font-bold text-builder-primary mb-2 transition-colors">${prop.title}</h3>
                            <p class="text-xs text-slate-500 mb-4 flex items-center"><i class="fa-solid fa-location-dot mr-1.5 text-builder-accent"></i> ${prop.location}</p>
                            <p class="text-sm text-slate-600 leading-6 mb-6">${prop.summary}</p>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <button onclick="openDetailPage(${prop.id})" class="builder-primary-button w-full text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1">
                                <span>Full Details</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                `;
    grid.appendChild(card);
  });
  requestAnimationFrame(updatePropertyCarousel);
}

// FILTER FUNCTIONS
function applyFilters(scrollToResults = false) {
  const searchVal = document.getElementById("search-input").value.toLowerCase();
  const typeVal = document.getElementById("type-select").value;
  const priceVal = document.getElementById("price-select").value;

  const filtered = propertiesData.filter((prop) => {
    const matchesSearch =
      prop.title.toLowerCase().includes(searchVal) ||
      prop.location.toLowerCase().includes(searchVal);
    const matchesType = typeVal === "all" || prop.type === typeVal;

    let matchesPrice = true;
    if (priceVal === "1.5-2.5")
      matchesPrice = prop.priceValue >= 1.5 && prop.priceValue <= 2.5;
    else if (priceVal === "2.5-4.0")
      matchesPrice = prop.priceValue >= 2.5 && prop.priceValue <= 4.0;
    else if (priceVal === "4.0+") matchesPrice = prop.priceValue >= 4.0;

    let matchesChip =
      currentActiveChip === "all" || prop.category === currentActiveChip;

    return matchesSearch && matchesType && matchesPrice && matchesChip;
  });

  renderPropertyGrid(filtered);

  if (scrollToResults) {
    requestAnimationFrame(() => {
      document
        .getElementById("properties-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function filterByChip(chipType) {
  currentActiveChip = chipType;
  document.querySelectorAll(".chip-btn").forEach((btn) => {
    const isActive = btn.dataset.chip === chipType;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  applyFilters(true);
}


function getHighlightIcon(text, defaultIcon = "fa-solid fa-circle-check") {
  if (!text || typeof text !== "string") return defaultIcon;
  const lower = text.toLowerCase();
  if (lower.includes("rera") || lower.includes("approv") || lower.includes("certif") || lower.includes("legal") || lower.includes("bda") || lower.includes("bmrda")) return "fa-solid fa-certificate";
  if (lower.includes("wall") || lower.includes("privacy")) return "fa-solid fa-shield-halved";
  if (lower.includes("road") || lower.includes("location") || lower.includes("connect") || lower.includes("metro") || lower.includes("highway") || lower.includes("expressway") || lower.includes("station") || lower.includes("airport") || lower.includes("tech park")) return "fa-solid fa-location-dot";
  if (lower.includes("acre") || lower.includes("land") || lower.includes("garden") || lower.includes("open space") || lower.includes("landscape") || /\bpark\b/.test(lower) || lower.includes("green") || lower.includes("tree")) return "fa-solid fa-tree";
  if (lower.includes("pool") || lower.includes("swim")) return "fa-solid fa-person-swimming";
  if (lower.includes("gym") || lower.includes("fit") || lower.includes("sport") || lower.includes("court") || lower.includes("jog")) return "fa-solid fa-dumbbell";
  if (lower.includes("club") || lower.includes("amenit") || lower.includes("lifestyle") || lower.includes("resort") || lower.includes("luxury")) return "fa-solid fa-hotel";
  if (lower.includes("tower") || lower.includes("floor") || lower.includes("high-rise") || lower.includes("architecture") || /\bunits?\b/.test(lower) || lower.includes("structure") || lower.includes("bhk") || lower.includes("layout")) return "fa-solid fa-building";
  if (lower.includes("ready") || lower.includes("possession") || lower.includes("move-in") || lower.includes("keys") || lower.includes("oc ") || lower.includes("timeline")) return "fa-solid fa-key";
  if (lower.includes("vastu") || lower.includes("vaastu") || lower.includes("facing")) return "fa-solid fa-compass";
  if (lower.includes("lake") || lower.includes("water") || lower.includes("view") || lower.includes("scenic")) return "fa-solid fa-water";
  if (lower.includes("price") || lower.includes("offer") || lower.includes("crore") || lower.includes("lakh") || lower.includes("payment") || lower.includes("emi")) return "fa-solid fa-indian-rupee-sign";
  return defaultIcon;
}

function renderProjectHighlights(highlights = []) {
  const section = document.getElementById("dt-project-highlights");
  const container = document.getElementById("dt-highlights");
  if (!section || !container) return;

  if (!Array.isArray(highlights) || highlights.length === 0) {
    section.hidden = true;
    container.replaceChildren();
    return;
  }

  section.hidden = false;
  const fragment = document.createDocumentFragment();

  highlights.forEach((highlight) => {
    const card = document.createElement("div");
    card.className = "highlight-card";

    let iconClass = "fa-solid fa-circle-check";
    let titleText = "";
    let bodyText = "";

    if (typeof highlight === "string") {
      bodyText = highlight;
      iconClass = getHighlightIcon(highlight);
    } else if (typeof highlight === "object" && highlight !== null) {
      bodyText = highlight.text || highlight.description || highlight.value || "";
      titleText = highlight.title || highlight.heading || highlight.label || "";
      iconClass = highlight.icon || getHighlightIcon(`${titleText} ${bodyText}`);
    }

    const iconWrap = document.createElement("div");
    iconWrap.className = "highlight-icon-wrap";
    const iconEl = document.createElement("i");
    iconEl.className = iconClass;
    iconEl.setAttribute("aria-hidden", "true");
    iconWrap.appendChild(iconEl);

    const textWrap = document.createElement("div");
    textWrap.className = "highlight-text-wrap";

    if (titleText) {
      const titleEl = document.createElement("strong");
      titleEl.className = "highlight-title";
      titleEl.textContent = titleText;
      textWrap.appendChild(titleEl);
    }

    if (bodyText) {
      const bodyEl = document.createElement("span");
      bodyEl.className = "highlight-text";
      bodyEl.textContent = bodyText;
      textWrap.appendChild(bodyEl);
    }

    card.append(iconWrap, textWrap);
    fragment.appendChild(card);
  });

  container.replaceChildren(fragment);
}


function getProjectGalleryImages(item) {
  const galleryImages = (item.images || [])
    .filter((image) => typeof image === "string" && image.trim())
    .map((src, index) => ({
      src,
      alt: `${item.title || item.name} project image ${index + 1}`,
      type: "photo",
    }));
  const thumbnail =
    item.thumbnail && !galleryImages.some((image) => image.src === item.thumbnail)
      ? [{ src: item.thumbnail, alt: `${item.title || item.name} project thumbnail`, type: "photo" }]
      : [];
  const floorPlanImages = (item.floorPlans || [])
    .filter((plan) => typeof plan.image === "string" && plan.image.trim())
    .map((plan) => ({
      src: plan.image,
      alt: `${item.title || item.name} ${plan.bhk} floor plan`,
      type: "floor-plan",
    }));
  return [...thumbnail, ...galleryImages, ...floorPlanImages];
}

function renderProjectGallery(item) {
  const section = document.getElementById("dt-project-gallery");
  if (!section) return;
  projectGalleryImages = getProjectGalleryImages(item);
  const preview =
    projectGalleryImages.find((image) => image.type === "photo") ||
    projectGalleryImages[0];
  const previewImage = document.getElementById("projectGalleryPreviewImage");
  if (previewImage) {
    previewImage.src = preview?.src || "";
    previewImage.alt = preview?.alt || "";
  }
  const countElement = document.getElementById("projectGalleryImageCount");
  if (countElement) {
    countElement.textContent = `${projectGalleryImages.length} ${projectGalleryImages.length === 1 ? "image" : "images"} · Project photos and floor plans`;
  }
  section.hidden = projectGalleryImages.length === 0;
}

function getGalleryCategoryImages(category = currentGalleryCategory) {
  return projectGalleryImages.filter((image) => image.type === category);
}

function openProjectGallery(trigger) {
  const dialog = document.getElementById("projectGalleryDialog");
  if (!dialog || dialog.open || !projectGalleryImages.length) return;
  projectGalleryTrigger = trigger;
  const titleEl = document.getElementById("projectGalleryTitle");
  if (titleEl) {
    titleEl.textContent = activeProperty?.title || activeProperty?.name || "Project Gallery";
  }
  dialog.showModal();
  const initialCategory = projectGalleryImages.some((image) => image.type === "photo")
    ? "photo"
    : "floor-plan";
  setProjectGalleryCategory(initialCategory);
  document.getElementById("projectGalleryClose")?.focus();
}

function setProjectGalleryCategory(category) {
  const selectedCategory = category === "floor-plan" ? "floor-plan" : "photo";
  const images = getGalleryCategoryImages(selectedCategory);
  if (!images.length) return;
  currentGalleryCategory = selectedCategory;
  currentGalleryIndex = 0;
  document
    .getElementById("projectGalleryDialog")
    ?.classList.toggle("is-floor-plan", selectedCategory === "floor-plan");

  const projectTab = document.getElementById("projectGalleryProjectTab");
  const floorPlanTab = document.getElementById("projectGalleryFloorPlanTab");
  if (projectTab) projectTab.hidden = !getGalleryCategoryImages("photo").length;
  if (floorPlanTab) floorPlanTab.hidden = !getGalleryCategoryImages("floor-plan").length;

  [projectTab, floorPlanTab].forEach((tab) => {
    if (!tab) return;
    const selected = tab.dataset.galleryCategory === selectedCategory;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  const viewer = document.getElementById("projectGalleryViewer");
  if (viewer && projectTab && floorPlanTab) {
    viewer.setAttribute(
      "aria-labelledby",
      selectedCategory === "photo" ? projectTab.id : floorPlanTab.id,
    );
  }

  const thumbnails = document.getElementById("projectGalleryThumbnails");
  if (thumbnails) {
    thumbnails.replaceChildren();
    images.forEach((image, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `project-gallery-thumbnail${selectedCategory === "floor-plan" ? " is-floor-plan" : ""}`;
      button.dataset.galleryIndex = String(index);
      button.setAttribute("aria-label", `Show ${image.alt}`);
      button.setAttribute("aria-pressed", String(index === 0));
      const thumbnailImage = document.createElement("img");
      thumbnailImage.src = image.src;
      thumbnailImage.alt = "";
      thumbnailImage.loading = "lazy";
      thumbnailImage.decoding = "async";
      thumbnailImage.draggable = false;
      button.appendChild(thumbnailImage);
      thumbnails.appendChild(button);
    });
  }
  updateProjectGalleryImage();
}

function selectProjectGalleryImage(index) {
  const images = getGalleryCategoryImages();
  if (!images[index]) return;
  currentGalleryIndex = index;
  updateProjectGalleryImage();
}

function updateProjectGalleryImage() {
  const images = getGalleryCategoryImages();
  const image = images[currentGalleryIndex];
  if (!image) return;
  const currentImage = document.getElementById("projectGalleryCurrentImage");
  if (currentImage) {
    currentImage.src = image.src;
    currentImage.alt = image.alt;
    currentImage.loading = "eager";
    currentImage.decoding = "async";
    currentImage.classList.toggle("is-floor-plan", currentGalleryCategory === "floor-plan");
  }
  const counter = document.getElementById("projectGalleryCounter");
  if (counter) {
    counter.textContent = `${currentGalleryIndex + 1} / ${images.length}`;
  }
  document.querySelectorAll(".project-gallery-thumbnail").forEach((thumbnail, index) => {
    thumbnail.setAttribute("aria-pressed", String(index === currentGalleryIndex));
    if (index === currentGalleryIndex) {
      thumbnail.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  });
}

function changeProjectGalleryImage(direction) {
  const images = getGalleryCategoryImages();
  if (!images.length) return;
  currentGalleryIndex = (currentGalleryIndex + direction + images.length) % images.length;
  updateProjectGalleryImage();
}

function closeProjectGallery() {
  const dialog = document.getElementById("projectGalleryDialog");
  if (dialog?.open) dialog.close();
}

function getProjectDistance(first, second) {
  if (!first?.coordinates || !second?.coordinates) return Number.POSITIVE_INFINITY;
  const { lat: lat1, lon: lon1 } = first.coordinates;
  const { lat: lat2, lon: lon2 } = second.coordinates;
  if (![lat1, lon1, lat2, lon2].every((val) => typeof val === "number" && !Number.isNaN(val))) {
    return Number.POSITIVE_INFINITY;
  }
  const toRadians = (deg) => (deg * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getProjectConfigurations(item) {
  const configs = new Set();
  (item.floorPlans || []).forEach((plan) => {
    if (plan?.bhk) configs.add(plan.bhk);
  });
  if (item.bhk) {
    item.bhk.split(",").map((s) => s.trim()).filter(Boolean).forEach((s) => configs.add(s));
  }
  return configs;
}

function getConfigurationTokens(item) {
  return new Set(
    [...getProjectConfigurations(item)].map((cfg) =>
      cfg.replace(/\s+/g, " ").trim().toLowerCase()
    )
  );
}

function getSimilarProjects(item) {
  if (!Array.isArray(propertiesData) || propertiesData.length < 2) return [];
  const configurations = getConfigurationTokens(item);
  return propertiesData
    .filter((candidate) => candidate.id !== item.id)
    .map((candidate) => ({
      property: candidate,
      sharedConfigurations: [...getConfigurationTokens(candidate)].filter((value) =>
        configurations.has(value)
      ).length,
      distance: getProjectDistance(item, candidate),
    }))
    .sort(
      (first, second) =>
        second.sharedConfigurations - first.sharedConfigurations ||
        first.distance - second.distance ||
        (first.property.title || first.property.name || "").localeCompare(
          second.property.title || second.property.name || ""
        )
    )
    .slice(0, 2)
    .map(({ property }) => property);
}

function renderProjectComparison(item) {
  const section = document.getElementById("dt-project-comparison");
  const grid = document.getElementById("dt-project-comparison-grid");
  if (!section || !grid) return;

  const similar = getSimilarProjects(item);
  const projects = [item, ...similar];
  grid.replaceChildren();

  projects.forEach((project, index) => {
    const projectCard = document.createElement("article");
    projectCard.className = `project-comparison-card${index === 0 ? " is-current" : ""}`;

    const card = document.createElement("div");
    card.className = "comparison-project-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "comparison-project-image-wrap";

    const image = document.createElement("img");
    image.className = "comparison-project-image";
    image.src = project.thumbnail || (project.images && project.images[0]) || "";
    const projName = project.title || project.name || `${activeBuilderData.name || "Birla Estates"} Project`;
    image.alt = `${projName} project`;
    image.loading = "lazy";
    image.decoding = "async";
    imageWrap.appendChild(image);

    if (index === 0) {
      const currentLabel = document.createElement("span");
      currentLabel.className = "comparison-current-label";
      currentLabel.textContent = "Current Project";
      imageWrap.appendChild(currentLabel);
    }
    card.appendChild(imageWrap);

    const nameContainer = document.createElement("div");
    nameContainer.className = "comparison-project-name";

    const projectName = document.createElement("span");
    projectName.textContent = projName;

    const location = document.createElement("span");
    location.className = "comparison-project-location";
    const shortLoc =
      project.shortAddress ||
      (project.location
        ? project.location.split(",").slice(0, 2).join(", ").trim()
        : "Bengaluru");
    location.textContent = shortLoc;
    location.title = project.location || shortLoc;

    nameContainer.append(projectName, location);
    card.appendChild(nameContainer);

    const projectAction = document.createElement("button");
    projectAction.type = "button";
    projectAction.className = "comparison-project-link";
    if (index === 0) {
      projectAction.dataset.enquiryProject = project.id;
      projectAction.innerHTML =
        '<i class="fa-solid fa-phone" aria-hidden="true"></i> Enquire Now';
      projectAction.setAttribute("aria-label", `Enquire about ${projName}`);
    } else {
      projectAction.dataset.detailsProject = project.id;
      projectAction.innerHTML =
        '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i> View Details';
      projectAction.setAttribute("aria-label", `View ${projName} details`);
    }
    card.appendChild(projectAction);

    const specs = document.createElement("div");
    specs.className = "comparison-project-specs";

    const allBhks = [
      ...new Set((project.floorPlans || []).map((f) => f.bhk)),
    ].join(", ");
    const bhkText = project.bhk || allBhks || "Residences";
    const statusText =
      project.statusText ||
      (project.category === "new-launch"
        ? "New Launch"
        : project.category === "ready"
          ? "Ready to Move"
          : "Under Construction");

    const rows = [
      ["Price", project.price || "Price on Request"],
      ["Configuration", bhkText],
      ["Project Area", project.area || "On Request"],
      ["Status", statusText],
      ["Possession", project.possession || "On Request"],
    ];

    rows.forEach(([label, value]) => {
      const row = document.createElement("div");
      row.className = "comparison-project-spec";
      const specLabel = document.createElement("span");
      specLabel.className = "comparison-project-spec-label";
      specLabel.textContent = label;
      const specValue = document.createElement("span");
      specValue.className = "comparison-project-spec-value";
      specValue.textContent = value || "Not listed";
      specValue.title = value || "Not listed";
      row.append(specLabel, specValue);
      specs.appendChild(row);
    });

    card.appendChild(specs);
    projectCard.appendChild(card);
    grid.appendChild(projectCard);
  });

  section.hidden = projects.length < 2;
  requestAnimationFrame(syncComparisonRowHeights);
}

function syncComparisonRowHeights() {
  const grids = document.querySelectorAll(".project-comparison-grid");
  if (!grids.length) return;

  const isDesktop = window.innerWidth > 900;

  grids.forEach((grid) => {
    if (grid.offsetParent === null && grid.closest(".hidden")) return;

    const cards = Array.from(grid.querySelectorAll(".project-comparison-card"));
    if (cards.length === 0) return;

    cards.forEach((card) => {
      const nameEl = card.querySelector(".comparison-project-name");
      if (nameEl) nameEl.style.minHeight = "";
      const specs = card.querySelectorAll(".comparison-project-spec");
      specs.forEach((spec) => {
        spec.style.minHeight = "";
      });
    });

    if (!isDesktop) return;

    let maxNameHeight = 0;
    cards.forEach((card) => {
      const nameEl = card.querySelector(".comparison-project-name");
      if (nameEl) {
        const h = nameEl.offsetHeight;
        if (h > maxNameHeight) maxNameHeight = h;
      }
    });
    if (maxNameHeight > 0) {
      cards.forEach((card) => {
        const nameEl = card.querySelector(".comparison-project-name");
        if (nameEl) nameEl.style.minHeight = `${maxNameHeight}px`;
      });
    }

    const maxSpecCount = Math.max(
      ...cards.map((c) => c.querySelectorAll(".comparison-project-spec").length),
      0,
    );

    for (let specIndex = 0; specIndex < maxSpecCount; specIndex++) {
      let maxSpecHeight = specIndex === maxSpecCount - 1 ? 64 : 56;
      cards.forEach((card) => {
        const specs = card.querySelectorAll(".comparison-project-spec");
        if (specs[specIndex]) {
          const h = specs[specIndex].offsetHeight;
          if (h > maxSpecHeight) maxSpecHeight = h;
        }
      });
      cards.forEach((card) => {
        const specs = card.querySelectorAll(".comparison-project-spec");
        if (specs[specIndex]) {
          specs[specIndex].style.minHeight = `${maxSpecHeight}px`;
        }
      });
    }
  });
}

function renderPropertyFeatures(property) {
  const amenitiesContainer = document.getElementById("detail-amenities");
  const connectivityContainer =
    document.getElementById("dt-connectivity") ||
    document.getElementById("detail-connectivity");
  if (amenitiesContainer) {
    amenitiesContainer.replaceChildren();
    (property.amenities || []).forEach((amenity) => {
      const card = document.createElement("div");
      card.className =
        "p-4 bg-builder-surface border border-builder-border rounded-2xl flex items-center gap-3";

      const iconBox = document.createElement("div");
      iconBox.className =
        "w-10 h-10 rounded-xl bg-builder-soft flex items-center justify-center text-builder-primary text-lg shrink-0";
      const icon = document.createElement("i");
      icon.className = `fa-solid ${amenity.icon || "fa-star"}`;
      icon.setAttribute("aria-hidden", "true");
      iconBox.appendChild(icon);

      const name = document.createElement("h4");
      name.className = "text-xs font-bold text-slate-800";
      name.textContent = amenity.name;
      card.append(iconBox, name);
      amenitiesContainer.appendChild(card);
    });
    addFeatureExpansion(amenitiesContainer, 6, "amenities");
  }

  if (connectivityContainer) {
    connectivityContainer.replaceChildren();
    const oldConnLink = connectivityContainer.nextElementSibling;
    if (oldConnLink?.classList.contains("feature-expansion-link"))
      oldConnLink.remove();

    const nearbyPlaces = (property.connectivity || []).slice(0, 4);
    nearbyPlaces.forEach((place) => {
      const row = document.createElement("div");
      row.className = "loc-item";

      const iconName =
        place.icon?.startsWith("fa-") && !place.icon.includes(" ")
          ? `fa-solid ${place.icon}`
          : place.icon || "fa-solid fa-location-dot";
      const icon = document.createElement("i");
      icon.className = iconName;
      icon.setAttribute("aria-hidden", "true");
      row.appendChild(icon);

      const text = document.createElement("div");
      const label = document.createElement("strong");
      label.textContent = `${place.label || place.name}:`;
      text.append(label, document.createTextNode(` ${place.distance || ""}`));
      row.appendChild(text);

      connectivityContainer.appendChild(row);
    });
  }

  const connectivitySection = document.getElementById(
    "dt-connectivity-section",
  );
  if (connectivitySection) {
    connectivitySection.hidden = (property.connectivity || []).length === 0;
  }
}

function addFeatureExpansion(list, limit, label) {
  list.classList.toggle("feature-list-collapsed", list.children.length > limit);
  const oldLink = list.nextElementSibling;
  if (oldLink?.classList.contains("feature-expansion-link")) oldLink.remove();
  if (list.children.length <= limit) return;
  const link = document.createElement("button");
  link.type = "button";
  link.className = "feature-expansion-link font-serif";
  link.setAttribute("aria-expanded", "false");
  const expandedLabel =
    label === "amenities"
      ? "View all amenities \u2192"
      : "Explore connectivity details \u2192";
  const collapsedLabel =
    label === "amenities"
      ? "Show fewer amenities \u2192"
      : "Show fewer connectivity details \u2192";
  link.textContent = expandedLabel;
  link.addEventListener("click", () => {
    const expanded = link.getAttribute("aria-expanded") === "true";
    link.setAttribute("aria-expanded", String(!expanded));
    list.classList.toggle("feature-list-collapsed", expanded);
    link.textContent = expanded ? expandedLabel : collapsedLabel;
  });
  list.insertAdjacentElement("afterend", link);
}
// NAVIGATION SPA SPA SWITCHING
function openDetailPage(id, { updateUrl = true } = {}) {
  const prop = propertiesData.find((item) => String(item.id) === String(id));
  if (!prop) return;
  if (updateUrl) setBuilderRoute(String(prop.id));
  activeProperty = prop;
  document.title = `${prop.title} | ${activeBuilderData.name}`;

  document.getElementById("detail-title").innerText = prop.title;
  document.getElementById("detail-location").innerHTML =
    `<i class="fa-solid fa-location-dot text-builder-accent"></i> ${prop.location}`;
  document.getElementById("detail-price").innerText = prop.price;
  document.getElementById("detail-possession").innerText = prop.possession;
  document.getElementById("detail-units").innerText = prop.units;
  const projectStatus =
    prop.category === "new-launch"
      ? "New Launch"
      : prop.category === "ongoing"
        ? "Ongoing"
        : prop.category === "ready"
          ? "Ready to Move"
          : "Project";
  document.getElementById("detail-status").innerText = projectStatus;
  document.getElementById("detail-tag").innerText = projectStatus;
  const overview = document.getElementById("detail-description");
  const overviewParagraphs = Array.isArray(prop.overview)
    ? prop.overview
    : typeof prop.overview === "string"
      ? [prop.overview]
      : [prop.description];

  overview.replaceChildren(
    ...overviewParagraphs.map((paragraph) => {
      const element = document.createElement("p");
      element.className = "overview-text";
      const registration = paragraph.match(
        /^(.*) RERA registration number: (.+)\.$/i,
      );
      if (!registration) {
        element.textContent = paragraph;
        return element;
      }

      element.append(document.createTextNode(`${registration[1]} `));
      const badge = document.createElement("span");
      badge.className = "overview-rera";
      const label = document.createElement("strong");
      label.textContent = "RERA Registration No.";
      const number = document.createElement("span");
      number.textContent = registration[2];
      badge.append(label, number);
      element.append(badge);
      return element;
    }),
  );
  const reraBadge = document.getElementById("detail-rera-badge");
  const hasReraId = Boolean(prop.reraId?.trim());
  if (reraBadge) reraBadge.hidden = !hasReraId;
  renderProjectHighlights(prop.highlights || []);
  renderProjectGallery(prop);
  renderPropertyFeatures(prop);
  renderPropertyFloorPlans(prop);
  syncEmiCalculatorWithProperty(prop);
  renderProjectComparison(prop);

  const propertyImages = Array.isArray(prop.images)
    ? prop.images
    : prop.image
      ? [prop.image]
      : [];
  [0, 1, 2].forEach((index) => {
    const image = document.getElementById(`detail-img-${index}`);
    if (propertyImages[index]) {
      image.loading = "lazy";
      image.src = propertyImages[index];
    } else image.removeAttribute("src");
  });

  document.getElementById("catalog-page").classList.add("hidden");
  document.getElementById("details-page").classList.remove("hidden");
  document.getElementById("site-footer").classList.add("hidden");
  document.body.removeAttribute("data-property-route-loading");
  syncDetailSubnavTabs();
  requestAnimationFrame(syncComparisonRowHeights);
  if (connectivityPreviewMap) initializeConnectivityPreview(prop);
  else if (!connectivityPreviewObserver) initializeConnectivityPreview(prop);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCatalogPage({ updateUrl = true } = {}) {
  if (updateUrl && getBuilderRoute()) setBuilderRoute("", { replace: true });
  document.getElementById("details-page").classList.add("hidden");
  document.getElementById("detailSubnavBar")?.classList.remove("is-visible");
  document.getElementById("catalog-page").classList.remove("hidden");
  document.getElementById("site-footer").classList.remove("hidden");
  document.body.removeAttribute("data-property-route-loading");
  document.title = initialDocumentTitle;
  setActiveNavigation("");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// URL ROUTING: sections and property detail pages use clean paths.
function getBuilderBasePath() {
  const baseUrl =
    document.querySelector("base")?.href || `${window.location.origin}/`;
  const pathname = new URL(baseUrl, window.location.href).pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function getBuilderRoute() {
  const basePath = getBuilderBasePath();
  const pathname = window.location.pathname;
  if (!pathname.startsWith(basePath)) return "";
  return decodeURIComponent(pathname.slice(basePath.length).replace(/\/$/, ""));
}

function setBuilderRoute(route = "", { replace = false } = {}) {
  const basePath = getBuilderBasePath();
  const targetPath = route
    ? `${basePath}${encodeURIComponent(route)}`
    : basePath;
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({ route }, "", targetPath);
}

function setActiveNavigation(route = "") {
  const routeByHref = {
    "/": "",
    "/residences": "residences",
    "/about": "about",
    "/faq": "faq",
  };
  document
    .querySelectorAll(".site-nav a, .mobile-menu-link")
    .forEach((link) => {
      const isActive = routeByHref[link.getAttribute("href")] === route;
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
}

function navigateToBuilderSection(route, sectionId) {
  document.getElementById("details-page").classList.add("hidden");
  document.getElementById("catalog-page").classList.remove("hidden");
  document.getElementById("site-footer").classList.remove("hidden");
  document.body.removeAttribute("data-property-route-loading");
  document.title = initialDocumentTitle;
  setBuilderRoute(route);
  setActiveNavigation(route);
  requestAnimationFrame(() => {
    if (sectionId)
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function handleBuilderNavigation(event) {
  const link = event.target.closest(
    ".site-logo, .site-nav a, .mobile-menu-link",
  );
  if (!link) return;
  const href = link.getAttribute("href");
  if (
    !Object.prototype.hasOwnProperty.call(
      {
        "/": true,
        "/residences": true,
        "/about": true,
        "/faq": true,
      },
      href,
    )
  )
    return;

  event.preventDefault();
  event.stopImmediatePropagation();
  const routes = {
    "/": ["", ""],
    "/residences": ["residences", "properties-section"],
    "/about": ["about", "legacy-section"],
    "/faq": ["faq", "faq-section"],
  };
  const [route, sectionId] = routes[href];
  navigateToBuilderSection(route, sectionId);
  if (link.matches(".mobile-menu-link")) closeMobileMenu();
}

function restoreBuilderRoute() {
  if (!propertiesData.length) return;
  const route = getBuilderRoute();
  const property = propertiesData.find((item) => String(item.id) === route);
  if (property) {
    openDetailPage(property.id, { updateUrl: false });
    setActiveNavigation(route);
    const requestedMap = new URL(window.location.href).searchParams.get("map");
    if (requestedMap === "location") {
      openConnectivityMap({ updateUrl: false });
    }
    return;
  }

  const sectionTargets = {
    residences: "properties-section",
    about: "legacy-section",
    faq: "faq-section",
    contact: "consultation-section",
  };
  if (sectionTargets[route]) {
    document.getElementById("details-page").classList.add("hidden");
    document.getElementById("catalog-page").classList.remove("hidden");
    document.getElementById("site-footer").classList.remove("hidden");
    document.body.removeAttribute("data-property-route-loading");
    document.title = initialDocumentTitle;
    setActiveNavigation(route);
    if (route === "contact") restoreEnquiryProjectFromUrl();
    requestAnimationFrame(() =>
      document
        .getElementById(sectionTargets[route])
        ?.scrollIntoView({ block: "start" }),
    );
    return;
  }

  if (route) setBuilderRoute("", { replace: true });
  document.getElementById("details-page").classList.add("hidden");
  document.getElementById("catalog-page").classList.remove("hidden");
  document.getElementById("site-footer").classList.remove("hidden");
  document.body.removeAttribute("data-property-route-loading");
  document.title = initialDocumentTitle;
  setActiveNavigation("");
}

document.addEventListener("click", handleBuilderNavigation, true);
window.addEventListener("popstate", restoreBuilderRoute);
function renderSidebarConfigurations(property) {
  const select = document.getElementById("sidebar-bhk-select");
  const plans = Array.isArray(property.floorPlans) ? property.floorPlans : [];
  select.replaceChildren();
  plans.forEach((plan) => {
    const option = document.createElement("option");
    option.value = plan.id;
    option.textContent = `${plan.bhk} — ${plan.area}`;
    select.appendChild(option);
  });
  if (!plans.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Contact us for available configurations";
    select.appendChild(option);
  }
  select.disabled = !plans.length;
  const wrapper = select.closest("[data-custom-select]");
  wrapper.querySelector(".custom-select-trigger").disabled = !plans.length;
  populateCustomSelectMenu(wrapper);
}

function renderPropertyFloorPlans(property) {
  const tabs = document.getElementById("floor-plan-tabs");
  const plans = Array.isArray(property.floorPlans) ? property.floorPlans : [];
  tabs.replaceChildren();
  tabs.hidden = plans.length === 0;
  tabs.dataset.layout = "scroll";

  renderSidebarConfigurations(property);

  if (!plans.length) {
    document.getElementById("plan-area").innerText =
      "Contact us for available configurations";
    document.getElementById("plan-price").innerText =
      property.price || "Contact us for pricing";
    document.getElementById("floor-plan-img").removeAttribute("src");
    document.getElementById("floor-plan-image-panel").hidden = true;
    return;
  }

  plans.forEach((plan, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.id = `plan-btn-${plan.id}`;
    button.className =
      "plan-tab-btn shrink-0 px-3 sm:px-4 py-2 rounded-lg transition-all";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === 0));
    button.textContent = plan.bhk;
    button.addEventListener("click", () => selectFloorPlan(plan.id));
    tabs.appendChild(button);
  });

  selectFloorPlan(plans[0].id);
}

function selectFloorPlan(planId) {
  const plan = activeProperty?.floorPlans?.find((item) => item.id === planId);
  if (!plan) return;

  document
    .querySelectorAll("#floor-plan-tabs .plan-tab-btn")
    .forEach((button) => {
      const isActive = button.id === `plan-btn-${planId}`;
      button.classList.toggle("bg-builder-accent", isActive);
      button.classList.toggle("text-builder-primary", isActive);
      button.classList.toggle("text-slate-600", !isActive);
      button.setAttribute("aria-selected", String(isActive));
      if (
        isActive &&
        document.getElementById("floor-plan-tabs").dataset.layout === "scroll"
      ) {
        button.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    });

  document.getElementById("plan-area").innerText = plan.area;
  document.getElementById("plan-price").innerText = plan.price;
  document.getElementById("floor-plan-area-card").hidden = !plan.area;
  document.getElementById("floor-plan-price-card").hidden = !plan.price;
  const configurationSelect = document.getElementById("sidebar-bhk-select");
  configurationSelect.value = plan.id;
  const configurationWrapper = configurationSelect.closest(
    "[data-custom-select]",
  );
  configurationWrapper.querySelector(
    ".custom-select-trigger span",
  ).textContent =
    configurationSelect.options[configurationSelect.selectedIndex].textContent;
  configurationWrapper
    .querySelectorAll('.custom-select-menu [role="option"]')
    .forEach((option) => {
      option.setAttribute(
        "aria-selected",
        String(option.dataset.value === plan.id),
      );
    });
  const image = document.getElementById("floor-plan-img");
  const imagePanel = document.getElementById("floor-plan-image-panel");
  if (plan.image) {
    image.loading = "lazy";
    image.src = plan.image;
    imagePanel.hidden = false;
    image.onerror = () => {
      imagePanel.hidden = true;
    };
  } else {
    image.removeAttribute("src");
    imagePanel.hidden = true;
    image.onerror = null;
  }
  image.alt = `${activeProperty.title} ${plan.bhk} configuration`;
  syncEmiCalculatorWithFloorPlan(plan);
}

// LIGHTBOX MODAL
function openLightbox(imgIndex) {
  const propertyImages = Array.isArray(activeProperty?.images)
    ? activeProperty.images
    : activeProperty?.image
      ? [activeProperty.image]
      : [];
  if (!propertyImages[imgIndex]) return;
  const lightboxImage = document.getElementById("lightbox-img");
  lightboxImage.loading = "lazy";
  lightboxImage.src = propertyImages[imgIndex];
  document.getElementById("lightbox-modal").classList.remove("hidden");
}

function closeLightbox() {
  document.getElementById("lightbox-modal").classList.add("hidden");
}

// BUILDER-SPECIFIC FAQ CONTENT
function renderFaqs(faqs) {
  const list = document.getElementById("faq-list");
  if (!list) return;
  list.replaceChildren();
  const useTwoColumns = faqs.length > 5;
  list.className = `grid grid-cols-1 items-start gap-4${useTwoColumns ? " lg:grid-cols-2" : ""}`;

  const columns = useTwoColumns
    ? [0, 1].map(() => {
        const column = document.createElement("div");
        column.className = "contents lg:flex lg:flex-col lg:gap-4";
        list.appendChild(column);
        return column;
      })
    : null;

  if (!faqs.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "py-8 text-center text-sm text-slate-500";
    emptyMessage.textContent = "FAQs for this builder will be added soon.";
    list.appendChild(emptyMessage);
    return;
  }

  faqs.forEach((faq, index) => {
    const id = index + 1;
    const item = document.createElement("div");
    item.className =
      "bg-white border border-builder-border rounded-2xl overflow-hidden shadow-sm";

    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none font-semibold text-slate-800 text-sm sm:text-base";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", `faq-answer-${id}`);
    button.addEventListener("click", () => toggleFaq(id));

    const question = document.createElement("span");
    question.textContent = faq.question;
    const icon = document.createElement("i");
    icon.id = `faq-icon-${id}`;
    icon.className =
      "fa-solid fa-chevron-down text-builder-primary transition-transform";
    icon.setAttribute("aria-hidden", "true");
    button.append(question, icon);

    const answer = document.createElement("div");
    answer.id = `faq-answer-${id}`;
    answer.className =
      "hidden px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3";
    answer.textContent = faq.answer;

    item.append(button, answer);
    if (columns) columns[index % 2].appendChild(item);
    else list.appendChild(item);
  });
}

// FAQ ACCORDION
function toggleFaq(id) {
  const ans = document.getElementById(`faq-answer-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);
  const button = document.querySelector(`[aria-controls="faq-answer-${id}"]`);
  if (!ans || !icon || !button) return;

  const willOpen = ans.classList.contains("hidden");

  if (willOpen) {
    document
      .querySelectorAll('#faq-list [id^="faq-answer-"]')
      .forEach((otherAnswer) => {
        if (otherAnswer === ans) return;

        otherAnswer.classList.add("hidden");
        const otherId = otherAnswer.id.replace("faq-answer-", "");
        document
          .getElementById(`faq-icon-${otherId}`)
          ?.classList.remove("rotate-180");
        document
          .querySelector(`[aria-controls="${otherAnswer.id}"]`)
          ?.setAttribute("aria-expanded", "false");
      });
  }

  ans.classList.toggle("hidden", !willOpen);
  icon.classList.toggle("rotate-180", willOpen);
  button.setAttribute("aria-expanded", String(willOpen));
}

// ==================== MULTI-COUNTRY DIAL SELECTOR & VALIDATION ====================
const COUNTRY_CODES = [
  {
    code: 'IN',
    dial: '+91',
    label: 'IN +91',
    name: 'Indian',
    min: 10,
    max: 10,
    minDigits: 10,
    maxDigits: 10,
    prefixRegex: /^[6-9]/,
    pattern: /^[6-9]\d{9}$/,
    placeholder: '10-digit mobile number',
    startDesc: '6, 7, 8, or 9',
    example: '98765 43210'
  },
  {
    code: 'AE',
    dial: '+971',
    label: 'AE +971',
    name: 'UAE',
    min: 9,
    max: 9,
    minDigits: 9,
    maxDigits: 9,
    prefixRegex: /^5/,
    pattern: /^5\d{8}$/,
    placeholder: '9-digit mobile number',
    startDesc: '5 (e.g. 50, 52, 54, 55, 56, 58)',
    example: '50 123 4567'
  },
  {
    code: 'US',
    dial: '+1',
    label: 'US +1',
    name: 'US/Canada',
    min: 10,
    max: 10,
    minDigits: 10,
    maxDigits: 10,
    prefixRegex: /^[2-9]/,
    pattern: /^[2-9]\d{9}$/,
    placeholder: '10-digit mobile number',
    startDesc: '2-9 (area code)',
    example: '212 555 0199'
  },
  {
    code: 'UK',
    dial: '+44',
    label: 'UK +44',
    name: 'UK',
    min: 10,
    max: 10,
    minDigits: 10,
    maxDigits: 10,
    prefixRegex: /^7/,
    pattern: /^7\d{9}$/,
    placeholder: '10-digit mobile number',
    startDesc: '7 (e.g. 71-75, 77-79)',
    example: '7911 123456'
  },
  {
    code: 'SG',
    dial: '+65',
    label: 'SG +65',
    name: 'Singapore',
    min: 8,
    max: 8,
    minDigits: 8,
    maxDigits: 8,
    prefixRegex: /^[89]/,
    pattern: /^[89]\d{7}$/,
    placeholder: '8-digit mobile number',
    startDesc: '8 or 9',
    example: '9123 4567'
  },
  {
    code: 'AU',
    dial: '+61',
    label: 'AU +61',
    name: 'Australian',
    min: 9,
    max: 9,
    minDigits: 9,
    maxDigits: 9,
    prefixRegex: /^4/,
    pattern: /^4\d{8}$/,
    placeholder: '9-digit mobile number',
    startDesc: '4 (mobile 04xx xxx xxx)',
    example: '412 345 678'
  },
  {
    code: 'SA',
    dial: '+966',
    label: 'SA +966',
    name: 'Saudi',
    min: 9,
    max: 9,
    minDigits: 9,
    maxDigits: 9,
    prefixRegex: /^5/,
    pattern: /^5\d{8}$/,
    placeholder: '9-digit mobile number',
    startDesc: '5 (e.g. 50, 53, 54, 55, 56, 58, 59)',
    example: '50 123 4567'
  },
  {
    code: 'QA',
    dial: '+974',
    label: 'QA +974',
    name: 'Qatar',
    min: 8,
    max: 8,
    minDigits: 8,
    maxDigits: 8,
    prefixRegex: /^[3567]/,
    pattern: /^[3567]\d{7}$/,
    placeholder: '8-digit mobile number',
    startDesc: '3, 5, 6, or 7',
    example: '5512 3456'
  },
  {
    code: 'OM',
    dial: '+968',
    label: 'OM +968',
    name: 'Oman',
    min: 8,
    max: 8,
    minDigits: 8,
    maxDigits: 8,
    prefixRegex: /^[79]/,
    pattern: /^[79]\d{7}$/,
    placeholder: '8-digit mobile number',
    startDesc: '7 or 9',
    example: '9123 4567'
  },
  {
    code: 'KW',
    dial: '+965',
    label: 'KW +965',
    name: 'Kuwait',
    min: 8,
    max: 8,
    minDigits: 8,
    maxDigits: 8,
    prefixRegex: /^[569]/,
    pattern: /^[569]\d{7}$/,
    placeholder: '8-digit mobile number',
    startDesc: '5, 6, or 9',
    example: '9123 4567'
  },
  {
    code: 'BH',
    dial: '+973',
    label: 'BH +973',
    name: 'Bahrain',
    min: 8,
    max: 8,
    minDigits: 8,
    maxDigits: 8,
    prefixRegex: /^[36]/,
    pattern: /^[36]\d{7}$/,
    placeholder: '8-digit mobile number',
    startDesc: '3 or 6',
    example: '3912 3456'
  },
  {
    code: 'NZ',
    dial: '+64',
    label: 'NZ +64',
    name: 'New Zealand',
    min: 8,
    max: 9,
    minDigits: 8,
    maxDigits: 9,
    prefixRegex: /^2/,
    pattern: /^2\d{7,8}$/,
    placeholder: '8-9 digit mobile number',
    startDesc: '2 (mobile 02x)',
    example: '21 123 4567'
  },
  {
    code: 'DE',
    dial: '+49',
    label: 'DE +49',
    name: 'German',
    min: 10,
    max: 11,
    minDigits: 10,
    maxDigits: 11,
    prefixRegex: /^1/,
    pattern: /^1\d{9,10}$/,
    placeholder: '10-11 digit mobile number',
    startDesc: '1 (mobile 015x, 016x, 017x)',
    example: '151 23456789'
  },
  {
    code: 'HK',
    dial: '+852',
    label: 'HK +852',
    name: 'Hong Kong',
    min: 8,
    max: 8,
    minDigits: 8,
    maxDigits: 8,
    prefixRegex: /^[5-9]/,
    pattern: /^[5-9]\d{7}$/,
    placeholder: '8-digit mobile number',
    startDesc: '5, 6, 7, 8, or 9',
    example: '9123 4567'
  },
  {
    code: 'MY',
    dial: '+60',
    label: 'MY +60',
    name: 'Malaysian',
    min: 9,
    max: 10,
    minDigits: 9,
    maxDigits: 10,
    prefixRegex: /^1/,
    pattern: /^1\d{8,9}$/,
    placeholder: '9-10 digit mobile number',
    startDesc: '1 (mobile 01x)',
    example: '12 345 6789'
  }
];

function getSelectedCountryForInput(inputEl) {
  if (!inputEl) return COUNTRY_CODES[0];
  const group = inputEl.closest('.phone-input-group');
  const code = group?.querySelector('input[name="countryCode"]')?.value || 'IN';
  return COUNTRY_CODES.find(c => c.code === code) || COUNTRY_CODES[0];
}

function initCountrySelectors() {
  document.querySelectorAll('.country-select').forEach(select => {
    const listbox = select.querySelector('.country-select-options');
    if (!listbox) return;
    if (!listbox.children.length) {
      COUNTRY_CODES.forEach(item => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'country-select-option';
        btn.setAttribute('role', 'option');
        btn.setAttribute('aria-selected', item.code === 'IN' ? 'true' : 'false');
        btn.dataset.code = item.code;
        btn.dataset.dial = item.dial;
        btn.textContent = item.label;
        listbox.appendChild(btn);
      });
    }
  });
}

function closeAllCountryDropdowns(exceptListbox = null) {
  document.querySelectorAll('.country-select-options:not([hidden])').forEach(el => {
    if (el !== exceptListbox) {
      el.hidden = true;
      el.classList.remove('opens-up');
      const sel = el.closest('.country-select');
      sel?.querySelector('.country-select-trigger')?.setAttribute('aria-expanded', 'false');
      sel?.classList.remove('is-open');
      const grp = el.closest('.phone-input-group');
      grp?.classList.remove('dropdown-open');
      const fg = el.closest('.form-group') || grp?.parentElement;
      fg?.classList.remove('dropdown-open');
      if (fg?.parentElement?.classList.contains('grid')) {
        fg.parentElement.classList.remove('dropdown-open');
      }
    }
  });
}

function handleCountryDropdownClick(event) {
  const select = event.target.closest('.country-select');
  const trigger = event.target.closest('.country-select-trigger');

  if (trigger && select?.contains(trigger)) {
    const listbox = select.querySelector('.country-select-options');
    if (!listbox) return;
    const open = trigger.getAttribute('aria-expanded') === 'true';

    // Close all other open country dropdowns
    closeAllCountryDropdowns(listbox);

    const group = select.closest('.phone-input-group');
    const formGroup = select.closest('.form-group') || group?.parentElement;
    const gridRow = formGroup?.parentElement;

    if (open) {
      listbox.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      select.classList.remove('is-open');
      group?.classList.remove('dropdown-open');
      formGroup?.classList.remove('dropdown-open');
      if (gridRow?.classList.contains('grid')) gridRow.classList.remove('dropdown-open');
    } else {
      // Clear any active validation error on this phone field immediately
      if (group) {
        group.classList.remove('is-invalid');
        const phoneInput = group.querySelector('input[type="tel"]');
        if (phoneInput) phoneInput.classList.remove('is-invalid');
        group.classList.add('dropdown-open');
      }
      if (formGroup) {
        formGroup.classList.add('dropdown-open');
        formGroup.querySelector('.field-error-msg')?.remove();
      }
      if (gridRow && gridRow.classList.contains('grid')) {
        gridRow.classList.add('dropdown-open');
      }
      select.classList.add('is-open');

      listbox.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');

      const rect = trigger.getBoundingClientRect();
      const menuHeight = Math.min(COUNTRY_CODES.length * 36 + 10, 230);
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const modalBox = trigger.closest('.modal-box');
      let shouldOpenUp = spaceBelow < menuHeight && spaceAbove > spaceBelow;
      if (modalBox) {
        const modalRect = modalBox.getBoundingClientRect();
        if (modalRect.bottom - rect.bottom < menuHeight && (rect.top - modalRect.top) > 100) {
          shouldOpenUp = true;
        }
      }
      listbox.classList.toggle('opens-up', shouldOpenUp);
      const activeOpt = listbox.querySelector('.country-select-option[aria-selected="true"]') || listbox.querySelector('.country-select-option');
      activeOpt?.focus();
    }
    return;
  }

  const option = event.target.closest('.country-select-option');
  if (option && select?.contains(option)) {
    const listbox = select.querySelector('.country-select-options');
    const code = option.dataset.code;
    const item = COUNTRY_CODES.find(c => c.code === code) || COUNTRY_CODES[0];

    const currentSpan = select.querySelector('.country-select-current');
    if (currentSpan) currentSpan.textContent = item.label;
    const hiddenCode = select.querySelector('input[name="countryCode"]');
    if (hiddenCode) hiddenCode.value = item.code;
    const hiddenDial = select.querySelector('input[name="dialCode"]');
    if (hiddenDial) hiddenDial.value = item.dial;

    listbox.querySelectorAll('.country-select-option').forEach(candidate => {
      candidate.setAttribute('aria-selected', String(candidate === option));
    });

    listbox.hidden = true;
    listbox.classList.remove('opens-up');
    const activeTrigger = select.querySelector('.country-select-trigger');
    if (activeTrigger) activeTrigger.setAttribute('aria-expanded', 'false');

    select.classList.remove('is-open');
    const group = select.closest('.phone-input-group');
    group?.classList.remove('dropdown-open');
    const formGroup = select.closest('.form-group') || group?.parentElement;
    formGroup?.classList.remove('dropdown-open');
    if (formGroup?.parentElement?.classList.contains('grid')) {
      formGroup.parentElement.classList.remove('dropdown-open');
    }

    // Update phone input placeholder, maxlength, and validate current value for new country
    const phoneInput = group?.querySelector('input[type="tel"]');
    if (phoneInput) {
      phoneInput.setAttribute('maxlength', String(item.max));
      phoneInput.setAttribute('placeholder', item.placeholder);
      let digits = phoneInput.value.replace(/\D/g, '');

      const dialDigits = item.dial.replace(/\D/g, '');
      if (digits.startsWith(dialDigits) && digits.length > item.max) {
        digits = digits.slice(dialDigits.length);
      }
      if (digits.length > item.max && digits.startsWith('0')) {
        digits = digits.replace(/^0+/, '');
      }

      if (digits.length > 0 && !item.prefixRegex.test(digits.charAt(0))) {
        phoneInput.value = '';
        showFieldError(phoneInput, `${item.name} mobile numbers must start with ${item.startDesc}.`);
      } else {
        phoneInput.value = digits.slice(0, item.max);
        phoneInput.classList.remove('is-invalid');
        group?.classList.remove('is-invalid');
        formGroup?.querySelector('.field-error-msg')?.remove();
      }
      phoneInput.focus();
    }
    return;
  }

  // Dismiss open country dropdowns on click outside
  closeAllCountryDropdowns();
}

function handleCountryDropdownKeydown(event) {
  const select = event.target.closest('.country-select');
  if (!select) return;
  const trigger = select.querySelector('.country-select-trigger');
  const listbox = select.querySelector('.country-select-options');
  if (!trigger || !listbox) return;

  if (event.target === trigger && ['ArrowDown', 'Enter', ' '].includes(event.key) && trigger.getAttribute('aria-expanded') !== 'true') {
    event.preventDefault();
    trigger.click();
    return;
  }

  if (event.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
    closeAllCountryDropdowns();
    trigger.focus();
    return;
  }

  if (event.target.classList.contains('country-select-option')) {
    const options = [...listbox.querySelectorAll('.country-select-option')];
    const index = options.indexOf(event.target);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = options[(index + 1) % options.length];
      next?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = options[(index - 1 + options.length) % options.length];
      prev?.focus();
    } else if (['Enter', ' '].includes(event.key)) {
      event.preventDefault();
      event.target.click();
    }
  }
}

function resetCountrySelector(formOrCard) {
  const countrySelect = formOrCard?.querySelector('.country-select');
  if (!countrySelect) return;
  const defaultCountry = COUNTRY_CODES[0]; // IN +91
  const currentSpan = countrySelect.querySelector('.country-select-current');
  if (currentSpan) currentSpan.textContent = defaultCountry.label;
  const codeInput = countrySelect.querySelector('input[name="countryCode"]');
  if (codeInput) codeInput.value = defaultCountry.code;
  const dialInput = countrySelect.querySelector('input[name="dialCode"]');
  if (dialInput) dialInput.value = defaultCountry.dial;
  countrySelect.querySelectorAll('.country-select-option').forEach(opt => {
    opt.setAttribute('aria-selected', String(opt.dataset.code === defaultCountry.code));
  });
  const phoneInput = countrySelect.closest('.phone-input-group')?.querySelector('input[type="tel"]');
  if (phoneInput) {
    phoneInput.setAttribute('maxlength', String(defaultCountry.maxDigits));
    phoneInput.setAttribute('placeholder', defaultCountry.placeholder);
  }
}

function resolveProjectName(input) {
  if (!input || typeof input !== 'string') return '';
  const clean = input.trim();
  if (!clean) return '';

  const dataList = (Array.isArray(propertiesData) && propertiesData.length > 0)
    ? propertiesData
    : (typeof window !== 'undefined' && Array.isArray(window.propertiesData) && window.propertiesData.length > 0 ? window.propertiesData : []);

  if (dataList.length > 0) {
    const found = dataList.find(p =>
      (p.id && p.id.toLowerCase() === clean.toLowerCase()) ||
      (p.apiProjectId && p.apiProjectId.toLowerCase() === clean.toLowerCase()) ||
      (p.name && p.name.toLowerCase() === clean.toLowerCase())
    );
    if (found?.name) return found.name;
  }
  return clean;
}

// ==================== WHATSAPP INTEGRATION & CONFIGURATION ====================
const WHATSAPP_CONFIG = {
  phone: '917411662228',
  displayPhone: '+91 74116 62228',
  defaultProject: 'Birla Estates projects in Bangalore',
  brandMessage: 'Hi, I am interested in Birla Estates projects in Bangalore. Please share brochures, pricing details, and ongoing/new launch offers.',
  buildMessage(target = null, maybeBhk = null) {
    if (!target) {
      return WHATSAPP_CONFIG.brandMessage;
    }

    let name = '';
    let phone = '';
    let email = '';
    let project = '';
    let bhk = '';

    if (typeof target === 'object') {
      name = (target.fullName || target.name || '').trim();
      phone = (target.mobileNumber || target.phone || '').trim();
      email = (target.email || '').trim();
      const rawProject = (target.project || target.projectId || '').trim();
      project = resolveProjectName(rawProject);
      bhk = (target.preferredBhk || target.bhk || '').trim();
    } else if (typeof target === 'string') {
      project = resolveProjectName(target.trim());
      if (typeof maybeBhk === 'string') {
        bhk = maybeBhk.trim();
      }
    }

    // 1. Pop-up WhatsApp Lead submission (Phone entered in timed / floating modal):
    const isWaPopupLead = (!name || name.toLowerCase() === 'whatsapp lead') && Boolean(phone);
    if (isWaPopupLead) {
      return `${WHATSAPP_CONFIG.brandMessage}\n\nMobile Number: ${phone}`;
    }

    // 2. Full VIP enquiry form submission (User filled Name, Phone, Project, BHK):
    const isRealName = name && name.toLowerCase() !== 'whatsapp lead';
    if (isRealName) {
      const targetProj = project || WHATSAPP_CONFIG.defaultProject;
      const lines = [
        `Hi, I am interested in ${targetProj}.`,
        '',
        '*Enquiry Details:*',
        `• *Name:* ${name}`
      ];
      if (phone) lines.push(`• *Phone Number:* ${phone}`);
      if (email) lines.push(`• *Email:* ${email}`);
      if (targetProj) lines.push(`• *Interested Project:* ${targetProj}`);
      if (bhk) lines.push(`• *BHK:* ${bhk}`);
      lines.push('');
      lines.push('Please share brochures, pricing details, and ongoing/new launch offers.');
      return lines.join('\n');
    }

    // 3. Default "Chat on WhatsApp" brand message:
    if (!project || project === WHATSAPP_CONFIG.defaultProject || project === activeBuilderData.name) {
      return WHATSAPP_CONFIG.brandMessage;
    }

    const bhkPart = bhk ? ` (${bhk})` : '';
    return `Hi, I am interested in ${project}${bhkPart}. Please share brochures, pricing details, and ongoing/new launch offers.`;
  },
  buildUrl(target = null, maybeBhk = null) {
    const text = WHATSAPP_CONFIG.buildMessage(target, maybeBhk);
    return `https://api.whatsapp.com/send/?phone=${WHATSAPP_CONFIG.phone}&text=${encodeURIComponent(text)}`;
  }
};

function openWhatsAppChat(target = null, maybeBhk = null) {
  const url = WHATSAPP_CONFIG.buildUrl(target, maybeBhk);
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openWhatsAppModal() {
  const modal = document.getElementById('waPopModal');
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function sanitizeIndianPhone(val) {
  if (!val || typeof val !== 'string') return '';
  let digits = val.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91') && /^[6-9]/.test(digits.slice(2))) {
    digits = digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith('0') && /^[6-9]/.test(digits.slice(1))) {
    digits = digits.slice(1);
  }
  if (digits.length > 0 && !/^[6-9]/.test(digits)) {
    digits = '';
  }
  return digits.slice(0, 10);
}

async function sendWhatsAppLead() {
  const input = document.getElementById('waPhoneInput');
  if (!input) return;

  const phoneGroup = input.closest('.phone-input-group');
  if (phoneGroup) phoneGroup.classList.remove('is-invalid');
  input.classList.remove('is-invalid');
  const container = input.closest('.form-group') || phoneGroup?.parentElement || input.parentElement;
  container?.querySelector('.field-error-msg')?.remove();

  const country = getSelectedCountryForInput(input);
  let digits = input.value.replace(/\D/g, '');

  if (!digits) {
    showFieldError(input, 'Please enter your WhatsApp mobile number');
    input.focus();
    return;
  }

  if (!country.prefixRegex.test(digits)) {
    showFieldError(input, `${country.name} mobile numbers must start with ${country.startDesc}.`);
    input.focus();
    return;
  }

  if (digits.length < country.min || digits.length > country.max) {
    const lenMsg = country.min === country.max 
      ? `Enter a valid ${country.min}-digit ${country.name} mobile number.`
      : `Enter a valid ${country.min}-${country.max}-digit ${country.name} mobile number.`;
    showFieldError(input, lenMsg);
    input.focus();
    return;
  }

  if (country.pattern && !country.pattern.test(digits)) {
    showFieldError(input, `Please enter a valid ${country.name} mobile number (e.g. ${country.example}).`);
    input.focus();
    return;
  }

  const formattedPhone = `${country.dial} ${digits}`;
  const leadPayload = {
    name: 'WhatsApp Lead',
    phone: formattedPhone,
    projectId: activeProperty?.id || 'birla-project',
    bhk: null,
    fullName: 'WhatsApp Lead',
    mobileNumber: formattedPhone,
    project: activeProperty?.name || WHATSAPP_CONFIG.defaultProject,
    preferredBhk: null,
    sourcePage: window.location.href,
    submittedAt: new Date().toISOString(),
    leadSource: 'WhatsApp E-Brochure Popup',
    partner: API_CONFIG.partner
  };

  sendLeadToApi(leadPayload).catch(err => console.error('[WhatsApp Lead Error]:', err));

  closeModal('waPopModal');
  input.value = '';
  resetCountrySelector(document.getElementById('waPopModal'));

  // Take user directly to WhatsApp chat with the mobile number they entered included in the message
  openWhatsAppChat(leadPayload);
}

// ==================== LEAD CAPTURE & CRM API CONFIGURATION ====================
const API_CONFIG = {
  endpoint: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  partner: {
    name: 'M&A Ventures',
    type: 'Authorised Channel Partner',
    builder: 'Birla Estates',
    contactPhone: '+91 74116 62228',
    whatsappPhone: '917411662228',
    brokerRera: ''
  }
};

async function sendLeadToApi(leadData) {
  const payload = {
    name: leadData.name,
    phone: leadData.phone,
    email: leadData.email || '',
    projectId: leadData.projectId,
    ...(leadData.bhk ? { bhk: leadData.bhk } : {})
  };

  if (!API_CONFIG.endpoint) {
    console.log('[Lead Capture - Local Mode]: API endpoint not set yet. Ready to send exact payload:', payload);
    return { success: true, mode: 'local', payload };
  }

  try {
    const response = await fetch(API_CONFIG.endpoint, {
      method: API_CONFIG.method || 'POST',
      headers: API_CONFIG.headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`API responded with HTTP ${response.status}`);
    }

    const data = await response.json().catch(() => ({}));
    return { success: true, data };
  } catch (error) {
    console.error('[Lead Capture Error]: Failed to dispatch lead to API:', error);
    return { success: false, error: error.message };
  }
}

function escapeLeadHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showFieldError(targetElement, message) {
  targetElement.classList.add('is-invalid');
  targetElement.classList.remove('is-valid');

  // If inside phone-input-group, also mark the entire phone group as invalid
  const phoneGroup = targetElement.closest('.phone-input-group');
  if (phoneGroup) {
    phoneGroup.classList.add('is-invalid');
  }

  // If this is a custom select or select trigger
  const customSelect = targetElement.closest('[data-custom-select]');
  if (customSelect) {
    const trigger = customSelect.querySelector('.custom-select-trigger');
    if (trigger) trigger.classList.add('is-invalid');
  }

  // Ensure error is placed outside and below the input control or input group
  const container = targetElement.closest('.form-group') || phoneGroup?.parentElement || customSelect?.parentElement || targetElement.parentElement;
  if (!container) return;

  let errorMsg = container.querySelector(':scope > .field-error-msg, .field-error-msg');
  if (!errorMsg) {
    errorMsg = document.createElement('div');
    errorMsg.className = 'field-error-msg';
    errorMsg.setAttribute('role', 'alert');
    errorMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i> <span>${message}</span>`;
    container.appendChild(errorMsg);
  } else {
    const span = errorMsg.querySelector('span');
    if (span) span.textContent = message;
  }
}

function showEnquiryStatusModal(status, leadData, errorMsg) {
  const modal = document.getElementById('enquiryStatusModal');
  const content = document.getElementById('statusModalContent');
  if (!modal || !content) return;

  const normalizedLead = (leadData && typeof leadData === 'object') ? { ...leadData } : {};
  normalizedLead.fullName = (normalizedLead.fullName || normalizedLead.name || '').trim();
  normalizedLead.name = normalizedLead.fullName;
  normalizedLead.mobileNumber = (normalizedLead.mobileNumber || normalizedLead.phone || '').trim();
  normalizedLead.phone = normalizedLead.mobileNumber;
  normalizedLead.email = (normalizedLead.email || '').trim();
  normalizedLead.preferredBhk = (normalizedLead.preferredBhk || normalizedLead.bhk || '').trim();
  normalizedLead.bhk = normalizedLead.preferredBhk;

  const rawProject = (normalizedLead.project || normalizedLead.projectId || '').trim();
  normalizedLead.project = resolveProjectName(rawProject) || (typeof activeProperty !== 'undefined' && activeProperty?.name ? activeProperty.name : WHATSAPP_CONFIG.defaultProject);

  if (status === 'success') {
    content.innerHTML = `
      <div class="partner-verified-badge">
        Authorised Channel Partner · M&amp;A Ventures
      </div>
      <h3 class="status-modal-title" id="statusModalTitle">Enquiry Successfully Submitted!</h3>
      <p class="status-modal-greeting">Thank you, <strong>${escapeLeadHtml(normalizedLead.fullName || 'Valued Customer')}</strong>.</p>
      
      <div class="enquiry-summary-box">
        <div class="summary-row">
          <span class="summary-label"><i class="fa-solid fa-building" aria-hidden="true"></i> Project:</span>
          <span class="summary-val"><strong>${escapeLeadHtml(normalizedLead.project || WHATSAPP_CONFIG.defaultProject)}</strong></span>
        </div>
        ${normalizedLead.preferredBhk ? `
        <div class="summary-row">
          <span class="summary-label"><i class="fa-solid fa-bed" aria-hidden="true"></i> BHK Preference:</span>
          <span class="summary-val"><strong>${escapeLeadHtml(normalizedLead.preferredBhk)}</strong></span>
        </div>` : ''}
        <div class="summary-row">
          <span class="summary-label"><i class="fa-solid fa-phone" aria-hidden="true"></i> Contact:</span>
          <span class="summary-val">${escapeLeadHtml(normalizedLead.mobileNumber || 'Provided')}</span>
        </div>
      </div>

      <p class="status-modal-desc">
        Your enquiry has been received by <strong>M&amp;A Ventures</strong>, the Authorised Channel Partner for Birla Estates. Our dedicated property advisor will contact you within 15 minutes.
      </p>

      <div class="partner-quick-contact">
        <span>Need immediate consultation or brochure on WhatsApp?</span>
        <a href="${WHATSAPP_CONFIG.buildUrl(normalizedLead)}" target="_blank" rel="noopener noreferrer" class="btn-partner-wa">
          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp Sales Desk
        </a>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="status-fail-badge">
        <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> Submission Unsuccessful
      </div>
      <h3 class="status-modal-title" id="statusModalTitle">Unable to Submit Online</h3>
      <p class="status-modal-desc">
        We could not connect to the lead dispatch service (${escapeLeadHtml(errorMsg || 'Network or server issue')}). Please connect directly with our sales desk on WhatsApp for instant assistance.
      </p>

      <div class="partner-quick-contact">
        <span>Instant Consultation:</span>
        <a href="${WHATSAPP_CONFIG.buildUrl(normalizedLead)}" target="_blank" rel="noopener noreferrer" class="btn-partner-wa">
          <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Connect via WhatsApp
        </a>
      </div>
    `;
  }

  modal.classList.add('active');
}

// FORMS SUBMISSION
async function handleMainFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;

  form.querySelectorAll('.field-error-msg').forEach(el => el.remove());
  form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  form.querySelectorAll('.phone-input-group').forEach(el => el.classList.remove('is-invalid'));

  const nameInput = form.querySelector('input[name="fullName"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const emailInput = form.querySelector('input[name="email"]');
  const projectInput = form.querySelector('select[name="preferredProject"]');
  const submitBtn = form.querySelector('button[type="submit"]');

  let isValid = true;
  let firstInvalid = null;

  if (nameInput) {
    const nameVal = nameInput.value.trim();
    if (!nameVal) {
      isValid = false;
      showFieldError(nameInput, 'Please enter your full name');
      if (!firstInvalid) firstInvalid = nameInput;
    } else if (nameVal.length < 2) {
      isValid = false;
      showFieldError(nameInput, 'Please enter a valid name (at least 2 characters)');
      if (!firstInvalid) firstInvalid = nameInput;
    }
  }

  if (phoneInput) {
    const country = getSelectedCountryForInput(phoneInput);
    let digits = phoneInput.value.replace(/\D/g, '');

    if (!digits) {
      isValid = false;
      showFieldError(phoneInput, 'Please enter your mobile number');
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (!country.prefixRegex.test(digits)) {
      isValid = false;
      showFieldError(phoneInput, `${country.name} mobile numbers must start with ${country.startDesc}.`);
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (digits.length < country.min || digits.length > country.max) {
      isValid = false;
      const lenMsg = country.min === country.max 
        ? `Enter a valid ${country.min}-digit ${country.name} mobile number.`
        : `Enter a valid ${country.min}-${country.max}-digit ${country.name} mobile number.`;
      showFieldError(phoneInput, lenMsg);
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (country.pattern && !country.pattern.test(digits)) {
      isValid = false;
      showFieldError(phoneInput, `Please enter a valid ${country.name} mobile number (e.g. ${country.example}).`);
      if (!firstInvalid) firstInvalid = phoneInput;
    }
  }

  if (emailInput && emailInput.value.trim()) {
    const emailVal = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
      isValid = false;
      showFieldError(emailInput, 'Please enter a valid email address or leave blank');
      if (!firstInvalid) firstInvalid = emailInput;
    }
  }

  if (!isValid) {
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  const country = getSelectedCountryForInput(phoneInput);
  let rawDigits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
  if (country.code === 'IN') rawDigits = sanitizeIndianPhone(rawDigits);
  const formattedPhone = rawDigits ? `${country.dial} ${rawDigits}` : (phoneInput ? phoneInput.value.trim() : '');

  const selectedProjectVal = projectInput?.value?.trim() || '';
  const resolvedProject = resolveProjectName(selectedProjectVal) || (activeProperty?.name || WHATSAPP_CONFIG.defaultProject);
  const matchedProp = propertiesData.find(p => p.name === resolvedProject || p.id === selectedProjectVal) || activeProperty;

  const leadData = {
    name: nameInput ? nameInput.value.trim() : '',
    phone: formattedPhone,
    email: emailInput && emailInput.value.trim() ? emailInput.value.trim() : '',
    projectId: matchedProp?.apiProjectId || matchedProp?.id || 'birla-project',
    bhk: null,
    fullName: nameInput ? nameInput.value.trim() : '',
    mobileNumber: formattedPhone,
    project: resolvedProject,
    preferredBhk: null,
    sourcePage: window.location.href,
    submittedAt: new Date().toISOString(),
    partner: API_CONFIG.partner
  };

  const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Submitting...';
  }

  const result = await sendLeadToApi(leadData);

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnContent;
  }

  if (result.success) {
    showEnquiryStatusModal('success', leadData);
    form.reset();
    resetCountrySelector(form);
  } else {
    showEnquiryStatusModal('failure', leadData, result.error);
  }

  return false;
}

function resetMainForm() {
  const form = document.getElementById("main-consultation-form");
  if (form) {
    form.reset();
    resetCountrySelector(form);
    form.querySelectorAll('.field-error-msg').forEach(el => el.remove());
    form.querySelectorAll('.is-invalid, .is-valid').forEach(el => el.classList.remove('is-invalid', 'is-valid'));
    form.querySelectorAll('.phone-input-group').forEach(el => el.classList.remove('is-invalid'));
  }
}

async function handleSidebarSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;

  form.querySelectorAll('.field-error-msg').forEach(el => el.remove());
  form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
  form.querySelectorAll('.phone-input-group').forEach(el => el.classList.remove('is-invalid'));

  const nameInput = form.querySelector('input[name="fullName"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const bhkSelect = form.querySelector('select[name="preferredConfiguration"]');
  const submitBtn = form.querySelector('button[type="submit"]');

  let isValid = true;
  let firstInvalid = null;

  if (nameInput) {
    const nameVal = nameInput.value.trim();
    if (!nameVal) {
      isValid = false;
      showFieldError(nameInput, 'Please enter your full name');
      if (!firstInvalid) firstInvalid = nameInput;
    } else if (nameVal.length < 2) {
      isValid = false;
      showFieldError(nameInput, 'Please enter a valid name (at least 2 characters)');
      if (!firstInvalid) firstInvalid = nameInput;
    }
  }

  if (phoneInput) {
    const country = getSelectedCountryForInput(phoneInput);
    let digits = phoneInput.value.replace(/\D/g, '');

    if (!digits) {
      isValid = false;
      showFieldError(phoneInput, 'Please enter your mobile number');
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (!country.prefixRegex.test(digits)) {
      isValid = false;
      showFieldError(phoneInput, `${country.name} mobile numbers must start with ${country.startDesc}.`);
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (digits.length < country.min || digits.length > country.max) {
      isValid = false;
      const lenMsg = country.min === country.max 
        ? `Enter a valid ${country.min}-digit ${country.name} mobile number.`
        : `Enter a valid ${country.min}-${country.max}-digit ${country.name} mobile number.`;
      showFieldError(phoneInput, lenMsg);
      if (!firstInvalid) firstInvalid = phoneInput;
    } else if (country.pattern && !country.pattern.test(digits)) {
      isValid = false;
      showFieldError(phoneInput, `Please enter a valid ${country.name} mobile number (e.g. ${country.example}).`);
      if (!firstInvalid) firstInvalid = phoneInput;
    }
  }

  if (!isValid) {
    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  const country = getSelectedCountryForInput(phoneInput);
  let rawDigits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
  if (country.code === 'IN') rawDigits = sanitizeIndianPhone(rawDigits);
  const formattedPhone = rawDigits ? `${country.dial} ${rawDigits}` : (phoneInput ? phoneInput.value.trim() : '');

  const selectedBhk = bhkSelect?.value?.trim() || null;
  const projectName = activeProperty?.name || WHATSAPP_CONFIG.defaultProject;

  const leadData = {
    name: nameInput ? nameInput.value.trim() : '',
    phone: formattedPhone,
    email: '',
    projectId: activeProperty?.apiProjectId || activeProperty?.id || 'birla-project',
    bhk: selectedBhk,
    fullName: nameInput ? nameInput.value.trim() : '',
    mobileNumber: formattedPhone,
    project: projectName,
    preferredBhk: selectedBhk,
    sourcePage: window.location.href,
    submittedAt: new Date().toISOString(),
    partner: API_CONFIG.partner
  };

  const originalBtnContent = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Submitting...';
  }

  const result = await sendLeadToApi(leadData);

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnContent;
  }

  if (result.success) {
    showEnquiryStatusModal('success', leadData);
    form.reset();
    resetCountrySelector(form);
  } else {
    showEnquiryStatusModal('failure', leadData, result.error);
  }

  return false;
}

function scrollToConsultation() {
  if (activeProperty) selectEnquiryProject(activeProperty.id);
  navigateToBuilderSection("contact", "consultation-section");
}

const mobileMenuButton = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
  mobileMenuButton.innerHTML =
    '<i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>';
}

mobileMenuButton.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", isOpen);
  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenuButton.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu",
  );
  mobileMenuButton.innerHTML =
    '<i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>';
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.classList.contains("hidden"))
    closeMobileMenu();
});

initializeBuilderProjectSelect();
initializeCustomSelects();
document.addEventListener("click", (event) => {
  if (event.target.closest("[data-custom-select]")) return;
  document
    .querySelectorAll("[data-custom-select] .custom-select-menu")
    .forEach((menu) => {
      menu.hidden = true;
      menu.style.width = "";
      menu.style.left = "";
      menu.style.top = "";
      menu.parentElement
        .querySelector(".custom-select-trigger")
        .setAttribute("aria-expanded", "false");
    });
});

// Phone number enforcement: Multi-country validation & Indian mobile standard
document.addEventListener("keydown", (event) => {
  const el = event.target;
  if (el && el.type === "tel") {
    const allowedNavKeys = [
      "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", 
      "ArrowUp", "ArrowDown", "Enter", "Escape", "Home", "End"
    ];
    if (allowedNavKeys.includes(event.key)) return;
    if (event.ctrlKey || event.metaKey) return;

    // Block any non-digit
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
      return;
    }

    const country = getSelectedCountryForInput(el);
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const currentVal = el.value || "";
    const digitsOnly = currentVal.replace(/\D/g, "");

    // Enforce country-specific starting digit regex on the very first typed digit
    const isFirstDigit = start === 0 && (digitsOnly.length === 0 || end === currentVal.length);
    if (isFirstDigit && country.prefixRegex && !country.prefixRegex.test(event.key)) {
      event.preventDefault();
      showFieldError(el, `${country.name} mobile numbers must start with ${country.startDesc}.`);
      return;
    }

    // Do not allow typing beyond max digits
    if (digitsOnly.length >= country.max && start === end) {
      event.preventDefault();
    }
  }
});

document.addEventListener("paste", (event) => {
  const el = event.target;
  if (el && el.type === "tel") {
    event.preventDefault();
    const country = getSelectedCountryForInput(el);
    const pasteData = (event.clipboardData || window.clipboardData)?.getData("text") || "";
    let digits = pasteData.replace(/\D/g, "");

    const dialDigits = country.dial.replace(/\D/g, "");
    if (digits.startsWith(dialDigits) && digits.length > country.max) {
      digits = digits.slice(dialDigits.length);
    }
    if (digits.length > country.max && digits.startsWith("0")) {
      digits = digits.replace(/^0+/, "");
    }

    if (digits.length > 0 && country.prefixRegex && !country.prefixRegex.test(digits.charAt(0))) {
      showFieldError(el, `${country.name} mobile numbers must start with ${country.startDesc}.`);
      return;
    }

    digits = digits.slice(0, country.max);
    if (digits) {
      el.value = digits;
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
});

// Real-time error dismissal and country dropdown click/dismiss handlers
document.addEventListener("input", (event) => {
  const el = event.target;
  if (el && el.type === "tel") {
    const country = getSelectedCountryForInput(el);
    let digits = el.value.replace(/\D/g, "");

    const dialDigits = country.dial.replace(/\D/g, "");
    if (digits.startsWith(dialDigits) && digits.length > country.max) {
      digits = digits.slice(dialDigits.length);
    }
    if (digits.length > country.max && digits.startsWith("0")) {
      digits = digits.replace(/^0+/, "");
    }

    if (digits.length > 0 && country.prefixRegex && !country.prefixRegex.test(digits.charAt(0))) {
      el.value = "";
      showFieldError(el, `${country.name} mobile numbers must start with ${country.startDesc}.`);
      return;
    }

    if (digits.length > country.max) {
      digits = digits.slice(0, country.max);
    }

    if (el.value !== digits) {
      el.value = digits;
    }
  }

  if (el && el.classList.contains("is-invalid")) {
    el.classList.remove("is-invalid");
    const group = el.closest(".phone-input-group");
    if (group) group.classList.remove("is-invalid");
    const container = el.closest(".form-group") || group?.parentElement || el.parentElement;
    container?.querySelector(".field-error-msg")?.remove();
  }
});

document.addEventListener("change", (event) => {
  const el = event.target;
  if (el && el.classList.contains("is-invalid")) {
    el.classList.remove("is-invalid");
    const group = el.closest(".phone-input-group");
    if (group) group.classList.remove("is-invalid");
    const container = el.closest(".form-group") || el.parentElement;
    container?.querySelector(".field-error-msg")?.remove();
  }
});

// Modal dismiss listeners: click backdrop or press Escape
document.addEventListener("click", (event) => {
  handleCountryDropdownClick(event);
  if (event.target.classList.contains("modal-overlay")) {
    event.target.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  handleCountryDropdownKeydown(event);
  if (event.key === "Escape") {
    document.querySelectorAll(".modal-overlay.active").forEach((m) => m.classList.remove("active"));
  }
});

const propertyCarousel = document.querySelector("[data-property-carousel]");
const propertyTrack = document.getElementById("property-grid");
propertyCarousel
  .querySelector("[data-carousel-prev]")
  .addEventListener("click", () => movePropertyCarousel(-1));
propertyCarousel
  .querySelector("[data-carousel-next]")
  .addEventListener("click", () => movePropertyCarousel(1));
propertyTrack.addEventListener("scroll", updatePropertyCarousel, {
  passive: true,
});
if ("ResizeObserver" in window) {
  carouselResizeObserver = new ResizeObserver(updatePropertyCarousel);
  carouselResizeObserver.observe(propertyTrack);
} else {
  window.addEventListener("resize", updatePropertyCarousel);
}

document
  .getElementById("sidebar-bhk-select")
  .addEventListener("change", (event) => {
    selectFloorPlan(event.currentTarget.value);
  });

// ==================== HOME LOAN EMI CALCULATOR ====================
let emiBasePrice = 14900000;
let emiCurrentPropertyName = activeBuilderData.properties?.[0]?.title || activeBuilderData.properties?.[0]?.name || "Featured Residence";
let emiUserModifiedPrice = false;

function parseIndianPrice(priceStr) {
  if (!priceStr || typeof priceStr !== "string") return null;
  const clean = priceStr.replace(/,/g, "").trim();
  const crMatch = clean.match(/([\d.]+)\s*(?:cr|crore)/i);
  if (crMatch) {
    const val = parseFloat(crMatch[1]);
    if (!isNaN(val) && val > 0) return Math.round(val * 10000000);
  }
  const lMatch = clean.match(/([\d.]+)\s*(?:l|lac|lakh)/i);
  if (lMatch) {
    const val = parseFloat(lMatch[1]);
    if (!isNaN(val) && val > 0) return Math.round(val * 100000);
  }
  const numMatch = clean.match(/(\d+)/);
  if (numMatch) {
    const val = parseInt(numMatch[1], 10);
    if (!isNaN(val) && val > 0) return val;
  }
  return null;
}

function formatINR(val) {
  if (isNaN(val) || val === null || val === undefined) return "₹0";
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

function formatINRShort(val) {
  if (isNaN(val) || val <= 0) return "₹0";
  if (val >= 10000000) {
    const cr = (val / 10000000)
      .toFixed(2)
      .replace(/\.00$/, "")
      .replace(/(\.[1-9])0$/, "$1");
    return `₹${cr} Cr`;
  }
  if (val >= 100000) {
    const l = (val / 100000)
      .toFixed(2)
      .replace(/\.00$/, "")
      .replace(/(\.[1-9])0$/, "$1");
    return `₹${l} Lakh`;
  }
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

function calculateEmi(principal, annualRate, tenureYears) {
  if (principal <= 0 || tenureYears <= 0) {
    return {
      emi: 0,
      totalPayment: 0,
      totalInterest: 0,
      principalPct: 50,
      interestPct: 50,
    };
  }
  const r = annualRate / 12 / 100;
  const n = tenureYears * 12;
  if (r === 0) {
    const emi = Math.round(principal / n);
    return {
      emi,
      totalPayment: principal,
      totalInterest: 0,
      principalPct: 100,
      interestPct: 0,
    };
  }
  const factor = Math.pow(1 + r, n);
  const emi = Math.round(principal * r * (factor / (factor - 1)));
  const totalPayment = emi * n;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPct =
    totalPayment > 0 ? (principal / totalPayment) * 100 : 50;
  const interestPct =
    totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50;
  return { emi, totalPayment, totalInterest, principalPct, interestPct };
}

function getPropertySliderLimits(price) {
  if (!price || price <= 0)
    return { min: 2500000, max: 250000000, step: 100000 };
  let min, max, step;
  if (price < 15000000) {
    min = Math.max(2500000, Math.floor((price * 0.4) / 500000) * 500000);
    max = Math.ceil((price * 2.5) / 2500000) * 2500000;
    step = 100000;
  } else if (price < 50000000) {
    min = Math.floor((price * 0.4) / 1000000) * 1000000;
    max = Math.ceil((price * 2.2) / 5000000) * 5000000;
    step = 100000;
  } else {
    min = Math.floor((price * 0.4) / 2500000) * 2500000;
    max = Math.ceil((price * 2.0) / 10000000) * 10000000;
    step = 500000;
  }
  return { min, max, step };
}

function updateSliderTrack(slider) {
  if (!slider) return;
  const min = parseFloat(slider.min) || 0;
  const max = parseFloat(slider.max) || 100;
  const val = parseFloat(slider.value) || 0;
  const percentage = Math.max(
    0,
    Math.min(100, ((val - min) / (max - min)) * 100),
  );
  slider.style.background = `linear-gradient(to right, #d4af37 0%, #d4af37 ${percentage}%, #e8f0ec ${percentage}%, #e8f0ec 100%)`;
}

function updateEmiCalculator() {
  const propSlider = document.getElementById("emi-prop-slider");
  const downSlider = document.getElementById("emi-down-slider");
  const tenureSlider = document.getElementById("emi-tenure-slider");
  const rateSlider = document.getElementById("emi-rate-slider");
  if (!propSlider || !downSlider || !tenureSlider || !rateSlider) return;

  const propVal = parseFloat(propSlider.value) || 0;
  const downPct = parseFloat(downSlider.value) || 20;
  const tenureYears = parseInt(tenureSlider.value, 10) || 20;
  const rate = parseFloat(rateSlider.value) || 8.5;

  const downPaymentAmt = Math.round(propVal * (downPct / 100));
  const loanAmount = Math.max(0, propVal - downPaymentAmt);
  const result = calculateEmi(loanAmount, rate, tenureYears);

  const propDisplay = document.getElementById("emi-prop-display");
  const propSub = document.getElementById("emi-prop-sub");
  if (propDisplay) propDisplay.textContent = formatINR(propVal);
  if (propSub) propSub.textContent = `(${formatINRShort(propVal)})`;

  const downPctDisplay = document.getElementById("emi-down-pct-display");
  const downAmtDisplay = document.getElementById("emi-down-amount-display");
  if (downPctDisplay) downPctDisplay.textContent = `${Math.round(downPct)}%`;
  if (downAmtDisplay) downAmtDisplay.textContent = formatINR(downPaymentAmt);

  const loanAmountDisplay = document.getElementById("emi-loan-amount");
  if (loanAmountDisplay) loanAmountDisplay.textContent = formatINR(loanAmount);

  const tenureDisplay = document.getElementById("emi-tenure-display");
  const tenureMonths = document.getElementById("emi-tenure-months");
  if (tenureDisplay) tenureDisplay.textContent = `${tenureYears} Years`;
  if (tenureMonths) tenureMonths.textContent = `(${tenureYears * 12} Months)`;

  const rateDisplay = document.getElementById("emi-rate-display");
  if (rateDisplay) rateDisplay.textContent = `${rate.toFixed(2)}%`;

  const monthlyOutput = document.getElementById("emi-monthly-output");
  if (monthlyOutput) monthlyOutput.textContent = formatINR(result.emi);

  const heroFootnote = document.getElementById("emi-hero-footnote");
  if (heroFootnote) {
    heroFootnote.textContent = `*For ${formatINRShort(loanAmount)} loan at ${rate.toFixed(2)}% for ${tenureYears} yrs`;
  }

  const tableDown = document.getElementById("emi-table-down");
  const tableDownPct = document.getElementById("emi-table-down-pct");
  if (tableDown) tableDown.textContent = formatINR(downPaymentAmt);
  if (tableDownPct) tableDownPct.textContent = `(${Math.round(downPct)}%)`;

  const tablePrincipal = document.getElementById("emi-table-principal");
  const tableInterest = document.getElementById("emi-table-interest");
  const tableTotal = document.getElementById("emi-table-total");
  if (tablePrincipal) tablePrincipal.textContent = formatINR(loanAmount);
  if (tableInterest) tableInterest.textContent = formatINR(result.totalInterest);
  if (tableTotal) tableTotal.textContent = formatINR(result.totalPayment);

  const donutCenterVal = document.getElementById("emi-donut-center-val");
  if (donutCenterVal)
    donutCenterVal.textContent = formatINRShort(result.totalPayment);

  const legendPrincipalVal = document.getElementById(
    "emi-legend-principal-val",
  );
  const legendPrincipalPct = document.getElementById(
    "emi-legend-principal-pct",
  );
  const legendInterestVal = document.getElementById("emi-legend-interest-val");
  const legendInterestPct = document.getElementById("emi-legend-interest-pct");
  if (legendPrincipalVal) legendPrincipalVal.textContent = formatINR(loanAmount);
  if (legendPrincipalPct)
    legendPrincipalPct.textContent = `(${Math.round(result.principalPct)}%)`;
  if (legendInterestVal)
    legendInterestVal.textContent = formatINR(result.totalInterest);
  if (legendInterestPct)
    legendInterestPct.textContent = `(${Math.round(result.interestPct)}%)`;

  const C = 238.761;
  const principalDash = (result.principalPct / 100) * C;
  const interestDash = (result.interestPct / 100) * C;

  const donutPrincipal = document.getElementById("emi-donut-principal");
  const donutInterest = document.getElementById("emi-donut-interest");
  if (donutPrincipal) {
    donutPrincipal.style.strokeDasharray = `${principalDash.toFixed(2)} ${C}`;
    donutPrincipal.style.strokeDashoffset = "0";
  }
  if (donutInterest) {
    donutInterest.style.strokeDasharray = `${interestDash.toFixed(2)} ${C}`;
    donutInterest.style.strokeDashoffset = `-${principalDash.toFixed(2)}`;
  }

  updateSliderTrack(propSlider);
  updateSliderTrack(downSlider);
  updateSliderTrack(tenureSlider);
  updateSliderTrack(rateSlider);
}

function syncEmiCalculatorWithProperty(property) {
  if (!property) return;
  const propTitle = property.title || property.name || activeBuilderData.name || "Birla Estates";
  emiCurrentPropertyName = propTitle;
  const parsed = parseIndianPrice(property.price);
  if (parsed) {
    emiBasePrice = parsed;
  }
  emiUserModifiedPrice = false;

  const propSlider = document.getElementById("emi-prop-slider");
  if (propSlider && parsed) {
    const limits = getPropertySliderLimits(parsed);
    propSlider.min = String(limits.min);
    propSlider.max = String(limits.max);
    propSlider.step = String(limits.step);
    propSlider.value = String(parsed);

    const minLbl = document.getElementById("emi-prop-min-lbl");
    const maxLbl = document.getElementById("emi-prop-max-lbl");
    if (minLbl) minLbl.textContent = formatINRShort(limits.min);
    if (maxLbl) maxLbl.textContent = formatINRShort(limits.max);
  }

  const syncLabel = document.getElementById("emi-sync-property");
  if (syncLabel) {
    syncLabel.textContent = propTitle;
  }

  updateEmiCalculator();
}

function syncEmiCalculatorWithFloorPlan(fp) {
  if (!fp || emiUserModifiedPrice) return;
  const parsed = parseIndianPrice(fp.price);
  if (parsed) {
    emiBasePrice = parsed;
    const propSlider = document.getElementById("emi-prop-slider");
    if (propSlider) {
      const limits = getPropertySliderLimits(parsed);
      propSlider.min = String(limits.min);
      propSlider.max = String(limits.max);
      propSlider.step = String(limits.step);
      propSlider.value = String(parsed);

      const minLbl = document.getElementById("emi-prop-min-lbl");
      const maxLbl = document.getElementById("emi-prop-max-lbl");
      if (minLbl) minLbl.textContent = formatINRShort(limits.min);
      if (maxLbl) maxLbl.textContent = formatINRShort(limits.max);
    }
    const syncLabel = document.getElementById("emi-sync-property");
    if (syncLabel && activeProperty) {
      const propTitle = activeProperty.title || activeProperty.name || activeBuilderData.name || "Birla Estates";
      syncLabel.textContent = `${propTitle} (${fp.bhk})`;
    }
    updateEmiCalculator();
  }
}

function initEmiCalculator() {
  const calcSection = document.getElementById("dt-emi-calculator");
  if (!calcSection) return;

  const propSlider = document.getElementById("emi-prop-slider");
  const downSlider = document.getElementById("emi-down-slider");
  const tenureSlider = document.getElementById("emi-tenure-slider");
  const rateSlider = document.getElementById("emi-rate-slider");
  const resetBtn = document.getElementById("emi-reset-price-btn");

  if (propSlider) {
    propSlider.addEventListener("input", () => {
      emiUserModifiedPrice = true;
      const syncLabel = document.getElementById("emi-sync-property");
      if (syncLabel) {
        syncLabel.textContent = `${emiCurrentPropertyName} (Custom Value)`;
      }
      updateEmiCalculator();
    });
  }

  if (downSlider) {
    downSlider.addEventListener("input", updateEmiCalculator);
  }

  if (tenureSlider) {
    tenureSlider.addEventListener("input", () => {
      const years = parseInt(tenureSlider.value, 10);
      document.querySelectorAll(".emi-chip").forEach((chip) => {
        chip.classList.toggle(
          "active",
          parseInt(chip.dataset.years, 10) === years,
        );
      });
      updateEmiCalculator();
    });
  }

  if (rateSlider) {
    rateSlider.addEventListener("input", updateEmiCalculator);
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      emiUserModifiedPrice = false;
      if (propSlider) {
        const limits = getPropertySliderLimits(emiBasePrice);
        propSlider.min = String(limits.min);
        propSlider.max = String(limits.max);
        propSlider.step = String(limits.step);
        propSlider.value = String(emiBasePrice);

        const minLbl = document.getElementById("emi-prop-min-lbl");
        const maxLbl = document.getElementById("emi-prop-max-lbl");
        if (minLbl) minLbl.textContent = formatINRShort(limits.min);
        if (maxLbl) maxLbl.textContent = formatINRShort(limits.max);
      }
      const syncLabel = document.getElementById("emi-sync-property");
      if (syncLabel) {
        syncLabel.textContent = emiCurrentPropertyName;
      }
      updateEmiCalculator();
    });
  }

  document.querySelectorAll(".emi-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document
        .querySelectorAll(".emi-chip")
        .forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const years = parseInt(chip.dataset.years, 10);
      if (tenureSlider) {
        tenureSlider.value = String(years);
      }
      updateEmiCalculator();
    });
  });

  updateEmiCalculator();
}

// ==================== STRATEGIC CONNECTIVITY & LEAFLET MAP ====================
let connectivityMapPlaces = [];
let connectivitySearchTimer = null;
let connectivityLeafletMap = null;
let connectivityMapPropertyId = null;
let connectivityOriginMarker = null;
let connectivityRouteLayer = null;
let connectivityRouteController = null;
let connectivityRouteRequestId = 0;
let connectivityPreviewMap = null;
let connectivityPreviewMarker = null;
let connectivityPreviewObserver = null;
const connectivityRouteCache = new Map();

function getConnectivityDestination(place) {
  return (
    place.destination ||
    `${place.label || place.name}, Bengaluru, Karnataka`
  );
}

function initializeConnectivityMap(item) {
  const status = document.getElementById("connectivity-map-route-status");
  if (!window.L) {
    if (status)
      status.textContent =
        "The interactive map could not be loaded. Use Google Maps directions instead.";
    return false;
  }

  const mapElement = document.getElementById("connectivity-map-canvas");
  const themeColor = activeBuilderData.theme?.primary || "#0B1E36";
  const propertyPlaces = [
    [item.coordinates.lat, item.coordinates.lon],
    ...connectivityMapPlaces
      .filter((place) => place.coordinates)
      .map((place) => [place.coordinates.lat, place.coordinates.lon]),
  ];
  const projectBounds = window.L.latLngBounds(propertyPlaces);
  if (!connectivityLeafletMap) {
    connectivityLeafletMap = window.L.map(mapElement, {
      scrollWheelZoom: false,
    }).fitBounds(projectBounds, { padding: [30, 30], maxZoom: 12 });
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a> | Routing: <a href="https://project-osrm.org/" target="_blank" rel="noopener noreferrer">OSRM</a>',
    }).addTo(connectivityLeafletMap);
    connectivityRouteLayer = window.L.layerGroup().addTo(connectivityLeafletMap);
  } else if (connectivityMapPropertyId !== item.id) {
    connectivityRouteLayer.clearLayers();
    connectivityOriginMarker?.remove();
    connectivityLeafletMap.fitBounds(projectBounds, {
      padding: [30, 30],
      maxZoom: 12,
    });
  }

  if (connectivityMapPropertyId !== item.id || !connectivityOriginMarker) {
    connectivityOriginMarker = window.L.circleMarker(
      [item.coordinates.lat, item.coordinates.lon],
      {
        radius: 8,
        color: "#fff",
        weight: 3,
        fillColor: themeColor,
        fillOpacity: 1,
      },
    ).addTo(connectivityLeafletMap);
    connectivityOriginMarker.bindTooltip(
      `${item.title || item.name} (Property)`,
    );
  }
  connectivityMapPropertyId = item.id;
  requestAnimationFrame(() => connectivityLeafletMap.invalidateSize());
  return true;
}

function initializeConnectivityPreview(item) {
  if (!window.L || !item?.coordinates) return;

  const previewElement = document.getElementById(
    "connectivity-map-preview-canvas",
  );
  if (!previewElement) return;
  const themeColor = activeBuilderData.theme?.primary || "#0B1E36";
  if (!connectivityPreviewMap) {
    connectivityPreviewMap = window.L.map(previewElement, {
      attributionControl: true,
      boxZoom: false,
      dragging: false,
      doubleClickZoom: false,
      keyboard: false,
      scrollWheelZoom: false,
      touchZoom: false,
      zoomControl: false,
    }).setView([item.coordinates.lat, item.coordinates.lon], 14);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
    }).addTo(connectivityPreviewMap);
  } else {
    connectivityPreviewMap.setView(
      [item.coordinates.lat, item.coordinates.lon],
      14,
    );
    connectivityPreviewMarker?.remove();
  }

  connectivityPreviewMarker = window.L.circleMarker(
    [item.coordinates.lat, item.coordinates.lon],
    {
      radius: 9,
      color: "#fff",
      weight: 3,
      fillColor: themeColor,
      fillOpacity: 1,
    },
  ).addTo(connectivityPreviewMap);
  connectivityPreviewMarker.bindTooltip(item.title || item.name);
  requestAnimationFrame(() => connectivityPreviewMap.invalidateSize());
}

function renderConnectivityDestinationMarker(place) {
  const themeColor = activeBuilderData.theme?.primary || "#0B1E36";
  const destinationMarker = window.L.circleMarker(
    [place.coordinates.lat, place.coordinates.lon],
    {
      radius: 7,
      color: "#fff",
      weight: 3,
      fillColor: themeColor,
      fillOpacity: 1,
    },
  ).addTo(connectivityRouteLayer);
  destinationMarker.bindTooltip(place.label || place.name);
}

function renderConnectivityRoute(item, place, route) {
  connectivityRouteLayer.clearLayers();
  const routeCoordinates = route.geometry.coordinates.slice();
  const originCoordinate = [item.coordinates.lon, item.coordinates.lat];
  const destinationCoordinate = [place.coordinates.lon, place.coordinates.lat];
  const firstRouteCoordinate = routeCoordinates[0];
  const lastRouteCoordinate = routeCoordinates[routeCoordinates.length - 1];

  if (
    firstRouteCoordinate[0] !== originCoordinate[0] ||
    firstRouteCoordinate[1] !== originCoordinate[1]
  ) {
    routeCoordinates.unshift(originCoordinate);
  }
  if (
    lastRouteCoordinate[0] !== destinationCoordinate[0] ||
    lastRouteCoordinate[1] !== destinationCoordinate[1]
  ) {
    routeCoordinates.push(destinationCoordinate);
  }

  const routeLine = window.L.geoJSON(
    {
      ...route.geometry,
      coordinates: routeCoordinates,
    },
    {
      style: {
        color: activeBuilderData.theme?.primary || "#0B1E36",
        weight: 5,
        opacity: 0.85,
      },
    },
  ).addTo(connectivityRouteLayer);
  renderConnectivityDestinationMarker(place);
  const routeBounds = routeLine.getBounds();
  if (routeBounds.isValid()) {
    connectivityLeafletMap.fitBounds(routeBounds, {
      padding: [48, 48],
      maxZoom: 16,
    });
  }
}

async function updateConnectivityRoute(item, place) {
  const status = document.getElementById("connectivity-map-route-status");
  if (!place.coordinates || !initializeConnectivityMap(item)) {
    if (!place.coordinates && status) {
      status.textContent = `A map location is not available for ${place.label || place.name}. Open Google Maps for directions.`;
    }
    return;
  }

  connectivityRouteController?.abort();
  connectivityRouteController = new AbortController();
  const requestId = ++connectivityRouteRequestId;
  connectivityRouteLayer.clearLayers();
  renderConnectivityDestinationMarker(place);
  const routeKey = `${item.id}:${place.id}`;
  const cachedRoute = connectivityRouteCache.get(routeKey);
  if (cachedRoute) {
    renderConnectivityRoute(item, place, cachedRoute);
    if (status) status.textContent = `Route to ${place.label || place.name}`;
    return;
  }

  if (status)
    status.textContent = `Loading route to ${place.label || place.name}…`;
  const origin = item.coordinates;
  const destination = place.coordinates;
  const routeUrl = `https://router.project-osrm.org/route/v1/driving/${origin.lon},${origin.lat};${destination.lon},${destination.lat}?overview=full&geometries=geojson&steps=false`;

  try {
    const response = await fetch(routeUrl, {
      signal: connectivityRouteController.signal,
    });
    if (!response.ok)
      throw new Error(`Routing service returned HTTP ${response.status}.`);
    const result = await response.json();
    const route = result.routes?.[0];
    if (result.code !== "Ok" || !route?.geometry?.coordinates?.length) {
      throw new Error(
        result.message || "No road route is available for this destination.",
      );
    }
    connectivityRouteCache.set(routeKey, route);
    if (requestId !== connectivityRouteRequestId) return;
    renderConnectivityRoute(item, place, route);
    if (status) status.textContent = `Route to ${place.label || place.name}`;
  } catch (error) {
    if (error.name === "AbortError" || requestId !== connectivityRouteRequestId)
      return;
    if (status)
      status.textContent = `Could not load the route to ${place.label || place.name}. Open Google Maps for directions.`;
  }
}

function getConnectivityDirectionsUrl(item, place) {
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  const origin =
    item.mapsQuery || `${item.coordinates.lat},${item.coordinates.lon}`;
  url.searchParams.set("origin", origin);
  url.searchParams.set("destination", getConnectivityDestination(place));
  url.searchParams.set("travelmode", "driving");
  return url.href;
}

function updateConnectivityMapUrl(placeId) {
  const url = new URL(window.location.href);
  url.searchParams.set("map", "location");
  if (placeId) url.searchParams.set("destination", placeId);
  else url.searchParams.delete("destination");
  window.history.replaceState(
    { ...window.history.state, locationMap: true },
    "",
    `${url.pathname}${url.search}${url.hash}`,
  );
}

function selectConnectivityMapPlace(placeId) {
  const place = connectivityMapPlaces.find(
    (candidate) => candidate.id === placeId,
  );
  if (!activeProperty?.coordinates || !place) return;

  const directionsLink = document.getElementById(
    "connectivity-map-directions-link",
  );
  if (directionsLink) {
    directionsLink.href = getConnectivityDirectionsUrl(activeProperty, place);
    if (directionsLink.firstChild) {
      directionsLink.firstChild.textContent = `Directions to ${place.label || place.name} in Google Maps `;
    }
  }

  document.querySelectorAll(".connectivity-map-place").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.connectivityPlace === placeId),
    );
  });
  updateConnectivityMapUrl(placeId);
  updateConnectivityRoute(activeProperty, place);
}

function renderConnectivityMapPlaces(query = "") {
  const list = document.getElementById("connectivity-map-list");
  if (!list) return;
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const places = connectivityMapPlaces.filter((place) =>
    `${place.label || place.name} ${place.distance}`
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );
  list.replaceChildren();
  const countEl = document.getElementById("connectivity-map-count");
  if (countEl) countEl.textContent = `${places.length} places`;

  if (!places.length) {
    const empty = document.createElement("p");
    empty.className = "connectivity-map-no-results";
    empty.textContent = "No listed destinations match your search.";
    list.appendChild(empty);
    return;
  }

  places.forEach((place) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "connectivity-map-place";
    button.dataset.connectivityPlace = place.id;
    button.setAttribute(
      "aria-pressed",
      String(
        place.id ===
          new URL(window.location.href).searchParams.get("destination"),
      ),
    );

    const icon = document.createElement("span");
    icon.className = "connectivity-map-place-icon";
    const iconElement = document.createElement("i");
    const iconName =
      place.icon?.startsWith("fa-") && !place.icon.includes(" ")
        ? `fa-solid ${place.icon}`
        : place.icon || "fa-solid fa-location-dot";
    iconElement.className = iconName;
    iconElement.setAttribute("aria-hidden", "true");
    icon.appendChild(iconElement);

    const details = document.createElement("span");
    details.className = "connectivity-map-place-details";
    const name = document.createElement("span");
    name.textContent = place.label || place.name;
    const distance = document.createElement("span");
    distance.textContent = place.distance;
    details.append(name, distance);
    button.append(icon, details);
    list.appendChild(button);
  });
}

function openConnectivityMap({ updateUrl = true } = {}) {
  if (!activeProperty?.coordinates) return;
  const map = document.getElementById("connectivity-map");
  if (!map) return;
  const search = document.getElementById("connectivity-map-search-input");
  const projectLabel = document.getElementById("connectivity-map-project");
  if (projectLabel) {
    projectLabel.textContent = `${activeProperty.title || activeProperty.name} · ${activeProperty.location}`;
  }
  connectivityMapPlaces = (activeProperty.connectivity || []).map(
    (place, index) => ({
      ...place,
      id: `${activeProperty.id}-connectivity-${index + 1}`,
    }),
  );
  if (search) search.value = "";
  map.hidden = false;
  document.body.classList.add("connectivity-map-open");
  initializeConnectivityMap(activeProperty);
  renderConnectivityMapPlaces(search?.value || "");
  const directionsLink = document.getElementById(
    "connectivity-map-directions-link",
  );
  if (directionsLink) {
    const query =
      activeProperty.mapsQuery ||
      `${activeProperty.coordinates.lat},${activeProperty.coordinates.lon}`;
    directionsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    if (directionsLink.firstChild) {
      directionsLink.firstChild.textContent =
        "Open property location in Google Maps ";
    }
  }

  const url = new URL(window.location.href);
  if (updateUrl) {
    url.searchParams.set("map", "location");
    url.searchParams.delete("destination");
    window.history.replaceState(
      { ...window.history.state, locationMap: true },
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  }
  const requestedDestination = new URL(
    window.location.href,
  ).searchParams.get("destination");
  const selectedPlace =
    connectivityMapPlaces.find(
      (place) => place.id === requestedDestination,
    ) || connectivityMapPlaces[0];
  if (selectedPlace) selectConnectivityMapPlace(selectedPlace.id);
  document.getElementById("connectivity-map-close")?.focus();
}

function closeConnectivityMap({ updateUrl = true, restoreFocus = true } = {}) {
  const map = document.getElementById("connectivity-map");
  if (!map || map.hidden) return;

  map.hidden = true;
  document.body.classList.remove("connectivity-map-open");
  connectivityRouteRequestId++;
  connectivityRouteController?.abort();
  clearTimeout(connectivitySearchTimer);
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.delete("map");
    url.searchParams.delete("destination");
    window.history.replaceState(
      { ...window.history.state, locationMap: false },
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  }
  if (restoreFocus)
    document.getElementById("connectivity-map-open")?.focus();
}

// DETAIL SUB-NAVIGATION TABS & SCROLLSPY
let isProgrammaticScroll = false;
let programmaticScrollTimer = null;
let subnavRafId = null;

function syncHeaderMetrics() {
  const header =
    document.querySelector(".site-header") || document.querySelector("header");
  if (header) {
    document.documentElement.style.setProperty(
      "--header-height",
      `${header.offsetHeight}px`,
    );
  }
  const logoText =
    document.querySelector(".site-logo .site-logo-text") ||
    document.querySelector(".site-logo span.min-w-0") ||
    document.querySelector(".site-logo span span:first-child");
  const logoMark = document.querySelector(".site-logo-mark");
  if (logoText) {
    const textRect = logoText.getBoundingClientRect();
    if (textRect.left > 0) {
      document.documentElement.style.setProperty(
        "--subnav-left-offset",
        `${Math.round(textRect.left)}px`,
      );
    }
  }
  if (logoMark) {
    const markRect = logoMark.getBoundingClientRect();
    if (markRect.left >= 0) {
      document.documentElement.style.setProperty(
        "--subnav-logo-mark-left",
        `${Math.round(markRect.left)}px`,
      );
    }
  }
}

function initDetailSubnav() {
  const subnavBar = document.getElementById("detailSubnavBar");
  const subnavTrack = document.getElementById("subnavTrack");
  const subnavArrowLeft = document.getElementById("subnavArrowLeft");
  const subnavArrowRight = document.getElementById("subnavArrowRight");

  if (!subnavBar || !subnavTrack) return;

  syncHeaderMetrics();
  window.addEventListener("resize", syncHeaderMetrics, { passive: true });

  // Click handler for subnav tabs
  subnavTrack.addEventListener("click", (event) => {
    const tab = event.target.closest(".subnav-tab");
    if (!tab) return;
    const targetId = tab.dataset.target;
    if (!targetId) return;
    const targetSection = document.getElementById(targetId);
    if (!targetSection || targetSection.hidden) return;

    event.preventDefault();

    // Lock scrollspy during programmatic smooth scroll
    isProgrammaticScroll = true;
    clearTimeout(programmaticScrollTimer);
    programmaticScrollTimer = setTimeout(() => {
      isProgrammaticScroll = false;
    }, 850);

    // Update active tab UI immediately
    setActiveSubnavTab(tab);

    // Smooth scroll to target section
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Keyboard navigation (ArrowLeft / ArrowRight) for tabs
  subnavTrack.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    const visibleTabs = [
      ...subnavTrack.querySelectorAll(".subnav-tab:not([hidden])"),
    ];
    const currentIndex = visibleTabs.indexOf(document.activeElement);
    if (currentIndex < 0) return;
    event.preventDefault();
    const nextIndex =
      event.key === "ArrowRight"
        ? (currentIndex + 1) % visibleTabs.length
        : (currentIndex - 1 + visibleTabs.length) % visibleTabs.length;
    visibleTabs[nextIndex].focus();
    visibleTabs[nextIndex].click();
  });

  // Arrow navigation buttons
  subnavArrowLeft?.addEventListener("click", () => {
    subnavTrack.scrollBy({ left: -220, behavior: "smooth" });
  });

  subnavArrowRight?.addEventListener("click", () => {
    subnavTrack.scrollBy({ left: 220, behavior: "smooth" });
  });

  // Update arrows on track scroll
  subnavTrack.addEventListener("scroll", updateSubnavArrows, { passive: true });

  // Window scroll handler for visibility & scrollspy
  window.addEventListener("scroll", onWindowScrollForSubnav, { passive: true });
  window.addEventListener("resize", onWindowResizeForSubnav, { passive: true });

  // Initial arrow state
  updateSubnavArrows();
}

function updateSubnavArrows() {
  const track = document.getElementById("subnavTrack");
  const leftBtn = document.getElementById("subnavArrowLeft");
  const rightBtn = document.getElementById("subnavArrowRight");
  if (!track || !leftBtn || !rightBtn) return;

  const maxScroll = track.scrollWidth - track.clientWidth;
  const hasOverflow = maxScroll > 8;

  if (!hasOverflow) {
    leftBtn.style.display = "none";
    rightBtn.style.display = "none";
    leftBtn.disabled = true;
    rightBtn.disabled = true;
    return;
  }

  const currentScroll = track.scrollLeft;
  const canScrollLeft = currentScroll > 8;
  const canScrollRight = currentScroll < maxScroll - 8;

  leftBtn.style.display = canScrollLeft ? "inline-flex" : "none";
  leftBtn.disabled = !canScrollLeft;

  rightBtn.style.display = canScrollRight ? "inline-flex" : "none";
  rightBtn.disabled = !canScrollRight;
}

function setActiveSubnavTab(targetTab) {
  if (!targetTab) return;
  const track = document.getElementById("subnavTrack");
  if (!track) return;

  const allTabs = track.querySelectorAll(".subnav-tab");
  allTabs.forEach((tab) => {
    const isActive = tab === targetTab;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
    tab.setAttribute("tabindex", isActive ? "0" : "-1");
  });

  // Auto-scroll track to keep active tab centered
  targetTab.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
  updateSubnavArrows();
}

function onWindowScrollForSubnav() {
  if (subnavRafId) return;
  subnavRafId = requestAnimationFrame(() => {
    subnavRafId = null;
    handleSubnavScrollspy();
  });
}

function onWindowResizeForSubnav() {
  updateSubnavArrows();
  onWindowScrollForSubnav();
}

function handleSubnavScrollspy() {
  const detailView = document.getElementById("details-page");
  const subnavBar = document.getElementById("detailSubnavBar");
  if (!detailView || !subnavBar) return;

  // Check if property detail view is currently visible
  if (
    detailView.classList.contains("hidden") ||
    detailView.style.display === "none" ||
    detailView.offsetParent === null
  ) {
    subnavBar.classList.remove("is-visible");
    return;
  }

  // Visibility toggle: reveal only when scrolled down past hero (threshold: 260px)
  const revealThreshold = 260;
  const isPastHero = window.scrollY > revealThreshold;
  subnavBar.classList.toggle("is-visible", isPastHero);

  if (!isPastHero) {
    // Reset to first tab when at the top
    const firstTab = document.querySelector(
      '.subnav-tab[data-target="dt-overview-section"]',
    );
    if (firstTab && !firstTab.classList.contains("active")) {
      setActiveSubnavTab(firstTab);
    }
    return;
  }

  if (isProgrammaticScroll) return;

  // Scrollspy section detection
  const sectionTargets = [
    "dt-overview-section",
    "dt-project-highlights",
    "dt-project-gallery",
    "dt-floorplans-section",
    "dt-emi-calculator",
    "dt-amenities-section",
    "dt-connectivity-section",
    "dt-project-comparison",
  ];

  const isNearBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 60;

  const visibleSections = sectionTargets
    .map((id) => document.getElementById(id))
    .filter((el) => el && !el.hidden && el.offsetParent !== null);

  if (!visibleSections.length) return;

  let currentSection = null;

  if (isNearBottom) {
    currentSection = visibleSections[visibleSections.length - 1];
  } else {
    const triggerLine = (window.innerWidth <= 768 ? 120 : 140) + 40;
    for (let i = 0; i < visibleSections.length; i++) {
      const rect = visibleSections[i].getBoundingClientRect();
      if (rect.top <= triggerLine) {
        currentSection = visibleSections[i];
      } else {
        break;
      }
    }
    if (!currentSection) currentSection = visibleSections[0];
  }

  if (currentSection) {
    const matchingTab = document.querySelector(
      `.subnav-tab[data-target="${currentSection.id}"]`,
    );
    if (matchingTab && !matchingTab.classList.contains("active")) {
      setActiveSubnavTab(matchingTab);
    }
  }
}

function syncDetailSubnavTabs() {
  syncHeaderMetrics();
  const subnavBar = document.getElementById("detailSubnavBar");
  const track = document.getElementById("subnavTrack");
  if (!subnavBar || !track) return;

  const hlSection = document.getElementById("dt-project-highlights");
  const gallerySection = document.getElementById("dt-project-gallery");
  const fpSection = document.getElementById("dt-floorplans-section");
  const amenitiesSection = document.getElementById("dt-amenities-section");
  const connSection = document.getElementById("dt-connectivity-section");
  const compSection = document.getElementById("dt-project-comparison");

  const hlTab = document.getElementById("subnav-tab-highlights");
  const galleryTab = document.getElementById("subnav-tab-gallery");
  const fpTab = document.getElementById("subnav-tab-floorplans");
  const amenitiesTab = document.getElementById("subnav-tab-amenities");
  const connTab = document.getElementById("subnav-tab-connectivity");
  const compTab = document.getElementById("subnav-tab-comparison");

  if (hlTab) hlTab.hidden = !hlSection || hlSection.hidden || hlSection.offsetParent === null;
  if (galleryTab) galleryTab.hidden = !gallerySection || gallerySection.hidden || gallerySection.offsetParent === null;
  if (fpTab) fpTab.hidden = !fpSection || fpSection.hidden || fpSection.offsetParent === null;
  if (amenitiesTab) amenitiesTab.hidden = !amenitiesSection || amenitiesSection.hidden || amenitiesSection.offsetParent === null;
  if (connTab) connTab.hidden = !connSection || connSection.hidden || connSection.offsetParent === null;
  if (compTab) compTab.hidden = !compSection || compSection.hidden || compSection.offsetParent === null;

  // Reset to first visible tab if no active tab or active tab is hidden
  const currentActive = track.querySelector(".subnav-tab.active:not([hidden])");
  if (!currentActive) {
    const firstTab = track.querySelector(".subnav-tab:not([hidden])");
    if (firstTab) setActiveSubnavTab(firstTab);
  }

  updateSubnavArrows();
}

// Keep inline HTML handlers available when this file runs as an ES module.
Object.assign(window, {
  applyFilters,
  closeConnectivityMap,
  closeLightbox,
  closeMobileMenu,
  closeModal,
  filterByChip,
  handleMainFormSubmit,
  handleSidebarSubmit,
  initDetailSubnav,
  openConnectivityMap,
  openDetailPage,
  renderProjectComparison,
  goToProjectEnquiry,
  selectEnquiryProject,
  openLightbox,
  openWhatsAppChat,
  openWhatsAppModal,
  sendWhatsAppLead,
  showEnquiryStatusModal,
  resetMainForm,
  scrollToConsultation,
  selectFloorPlan,
  showCatalogPage,
  syncComparisonRowHeights,
  syncDetailSubnavTabs,
  toggleFaq,
  resolveProjectName,
  COUNTRY_CODES,
  initCountrySelectors,
  resetCountrySelector,
  getSelectedCountryForInput,
  WHATSAPP_CONFIG,
  API_CONFIG,
  sendLeadToApi,
});
// INITIALIZE AFTER THE SHARED PAGE MARKUP IS AVAILABLE.
function initializeBuilderPage() {
  document.addEventListener("contextmenu", (event) => {
    if (event.target instanceof Element && event.target.closest("img")) {
      event.preventDefault();
    }
  });
  document.addEventListener("dragstart", (event) => {
    if (event.target instanceof Element && event.target.closest("img")) {
      event.preventDefault();
    }
  });
  initCountrySelectors();
  const waPhoneInput = document.getElementById("waPhoneInput");
  if (waPhoneInput) {
    waPhoneInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendWhatsAppLead();
      }
    });
  }
  renderFaqs(faqsData);
  renderPropertyGrid(propertiesData);
  const footerPropertyCount = document.getElementById("footer-property-count");
  if (footerPropertyCount)
    footerPropertyCount.textContent = String(propertiesData.length);
  document.querySelectorAll("[data-footer-builder-name]").forEach((element) => {
    element.textContent = activeBuilderData.name;
  });
  const footerBuilderName = document.getElementById("footer-builder-name");
  if (footerBuilderName) footerBuilderName.textContent = activeBuilderData.name;
  const footerRegions = document.getElementById("footer-builder-regions");
  if (footerRegions && activeBuilderData.regions)
    footerRegions.textContent = activeBuilderData.regions;
  initEmiCalculator();
  initDetailSubnav();
  syncDetailSubnavTabs();
  requestAnimationFrame(syncComparisonRowHeights);
  document.getElementById("dt-project-comparison")?.addEventListener("click", (event) => {
    const enquiryButton = event.target.closest("[data-enquiry-project]");
    if (enquiryButton) {
      goToProjectEnquiry(enquiryButton.dataset.enquiryProject);
      return;
    }
    const detailsButton = event.target.closest("[data-details-project]");
    if (detailsButton) {
      openDetailPage(detailsButton.dataset.detailsProject);
    }
  });
  restoreEnquiryProjectFromUrl();
  const connectivityPreview = document.getElementById(
    "connectivity-map-preview-canvas",
  );
  if (connectivityPreview && "IntersectionObserver" in window) {
    connectivityPreviewObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && activeProperty) {
          initializeConnectivityPreview(activeProperty);
          connectivityPreviewObserver.disconnect();
        }
      },
      { rootMargin: "160px" },
    );
    connectivityPreviewObserver.observe(connectivityPreview);
  }
  restoreBuilderRoute();
  requestAnimationFrame(syncComparisonRowHeights);
  window.addEventListener("resize", () => {
    requestAnimationFrame(syncComparisonRowHeights);
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      requestAnimationFrame(syncComparisonRowHeights);
    });
  }
  let popupAlreadyShown = false;
  try {
    popupAlreadyShown = sessionStorage.getItem("waPopupShown") === "true";
  } catch (error) {
    /* Storage may be disabled. */
  }
  if (!popupAlreadyShown) {
    window.setTimeout(() => {
      openWhatsAppModal();
      try {
        sessionStorage.setItem("waPopupShown", "true");
      } catch (error) {
        /* Storage may be disabled. */
      }
    }, 3500);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeBuilderPage, {
    once: true,
  });
} else {
  initializeBuilderPage();
}


// PROJECT GALLERY EVENT LISTENERS (CENTURY MATCH)
document.getElementById("projectGalleryPreview")?.addEventListener("click", (event) => openProjectGallery(event.currentTarget));
document.getElementById("projectGalleryClose")?.addEventListener("click", closeProjectGallery);
document.getElementById("projectGalleryDialog")?.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) closeProjectGallery();
});
document.querySelector(".project-gallery-tabs")?.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-gallery-category]");
  if (tab) setProjectGalleryCategory(tab.dataset.galleryCategory);
});
document.querySelector(".project-gallery-tabs")?.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  const tabs = [...document.querySelectorAll(".project-gallery-tab:not([hidden])")];
  const index = tabs.indexOf(event.target);
  if (index < 0 || tabs.length < 2) return;
  event.preventDefault();
  event.stopPropagation();
  const nextTab = tabs[(index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
  setProjectGalleryCategory(nextTab.dataset.galleryCategory);
  nextTab.focus();
});
document.getElementById("projectGalleryThumbnails")?.addEventListener("click", (event) => {
  const thumbnail = event.target.closest("[data-gallery-index]");
  if (thumbnail) selectProjectGalleryImage(Number(thumbnail.dataset.galleryIndex));
});
document.getElementById("projectGalleryPrevious")?.addEventListener("click", () => changeProjectGalleryImage(-1));
document.getElementById("projectGalleryNext")?.addEventListener("click", () => changeProjectGalleryImage(1));
document.getElementById("projectGalleryDialog")?.addEventListener("close", () => {
  document.getElementById("projectGalleryCurrentImage")?.removeAttribute("src");
  document.getElementById("projectGalleryThumbnails")?.replaceChildren();
  if (projectGalleryTrigger?.isConnected) projectGalleryTrigger.focus();
  projectGalleryTrigger = null;
});
window.addEventListener("keydown", (event) => {
  const dialog = document.getElementById("projectGalleryDialog");
  if (!dialog?.open) return;
  if (event.key === "ArrowLeft") changeProjectGalleryImage(-1);
  else if (event.key === "ArrowRight") changeProjectGalleryImage(1);
});

// CONNECTIVITY MAP EVENT LISTENERS (CENTURY MATCH)
window.addEventListener("popstate", () => {
  const map = document.getElementById("connectivity-map");
  if (
    map &&
    !map.hidden &&
    new URL(window.location.href).searchParams.get("map") !== "location"
  ) {
    closeConnectivityMap({ updateUrl: false, restoreFocus: false });
  }
});
document
  .getElementById("connectivity-map-open")
  ?.addEventListener("click", () => openConnectivityMap());
document
  .getElementById("connectivity-map-close")
  ?.addEventListener("click", () => closeConnectivityMap());
document
  .getElementById("connectivity-map-search-input")
  ?.addEventListener("input", (event) => {
    clearTimeout(connectivitySearchTimer);
    connectivitySearchTimer = setTimeout(
      () => renderConnectivityMapPlaces(event.target.value),
      250,
    );
  });
document
  .getElementById("connectivity-map-list")
  ?.addEventListener("click", (event) => {
    const placeButton = event.target.closest("[data-connectivity-place]");
    if (!placeButton) return;
    event.preventDefault();
    event.stopPropagation();
    selectConnectivityMapPlace(placeButton.dataset.connectivityPlace);
  });
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !document.getElementById("connectivity-map")?.hidden
  ) {
    closeConnectivityMap();
  }
});

