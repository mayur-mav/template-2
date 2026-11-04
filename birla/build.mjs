import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

async function loadBuilderSeo(dataFile) {
  const source = readFileSync(dataFile, "utf8");
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  const dataModule = await import(moduleUrl);
  const builder = dataModule.builderConfig || {};
  const properties = Array.isArray(builder.properties)
    ? builder.properties
    : Object.values(dataModule).find(
        (value) => Array.isArray(value) && value.some((item) => item?.id),
      ) || [];

  return { builder, properties };
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function cleanDescription(value, fallback) {
  const normalized = String(value || fallback || "")
    .replace(/\s+/g, " ")
    .trim();
  if (normalized.length <= 155) return normalized;
  const shortened = normalized.slice(0, 152);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 110 ? lastSpace : 152).replace(/[,. ]+$/, "")}...`;
}

function updateMeta(html, name, content) {
  const escaped = escapeHtml(content);
  const pattern = new RegExp(`(<meta\\s+name="${name}"[^>]*content=")[^"]*("[^>]*>)`, "i");
  if (pattern.test(html)) return html.replace(pattern, `$1${escaped}$2`);
  return html.replace("</head>", `    <meta name="${name}" content="${escaped}">\n</head>`);
}

function renderOverviewParagraph(paragraph) {
  const registration = paragraph.match(/^(.*) RERA registration number: (.+)\.$/i);
  if (!registration) return `<p class="overview-text">${escapeHtml(paragraph)}</p>`;
  return `<p class="overview-text">${escapeHtml(registration[1])} <span class="overview-rera"><strong>RERA Registration No.</strong> <span>${escapeHtml(registration[2])}</span></span></p>`;
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

function renderHighlightCardHtml(highlight) {
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

  const titleHtml = titleText ? `<strong class="highlight-title">${escapeHtml(titleText)}</strong>` : "";
  const bodyHtml = bodyText ? `<span class="highlight-text">${escapeHtml(bodyText)}</span>` : "";

  return `<div class="highlight-card">
                  <div class="highlight-icon-wrap"><i class="${escapeHtml(iconClass)}" aria-hidden="true"></i></div>
                  <div class="highlight-text-wrap">${titleHtml}${bodyHtml}</div>
                </div>`;
}

function replaceElement(html, id, content) {
  const pattern = new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\bid="${id}"[^>]*>)[\\s\\S]*?(<\\/\\2>)`, "i");
  return html.replace(pattern, `$1${content}$3`);
}

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
    const cr = (val / 10000000).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
    return `₹${cr} Cr`;
  }
  if (val >= 100000) {
    const l = (val / 100000).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
    return `₹${l} Lakh`;
  }
  return "₹" + Math.round(val).toLocaleString("en-IN");
}

function calculateEmi(principal, annualRate = 8.5, tenureYears = 20) {
  if (principal <= 0 || tenureYears <= 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0, principalPct: 50, interestPct: 50 };
  }
  const r = (annualRate / 12) / 100;
  const n = tenureYears * 12;
  const factor = Math.pow(1 + r, n);
  const emi = Math.round(principal * r * (factor / (factor - 1)));
  const totalPayment = emi * n;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPct = totalPayment > 0 ? (principal / totalPayment) * 100 : 50;
  const interestPct = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50;
  return { emi, totalPayment, totalInterest, principalPct, interestPct };
}

function getPropertySliderLimits(price) {
  if (!price || price <= 0) return { min: 2500000, max: 250000000, step: 100000 };
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

function getSimilarProjects(item, allProperties) {
  if (!Array.isArray(allProperties) || allProperties.length < 2) return [];
  const configurations = getConfigurationTokens(item);
  return allProperties
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

function renderComparisonCardHtml(project, index) {
  const isCurrent = index === 0;
  const currentBadge = isCurrent
    ? '<span class="comparison-current-label">Current Project</span>'
    : "";
  const projName = project.title || project.name || "Birla Estates Project";
  const imageSrc = project.thumbnail || (project.images && project.images[0]) || "";
  const shortLoc =
    project.shortAddress ||
    (project.location ? project.location.split(",").slice(0, 2).join(", ").trim() : "Bengaluru");

  const actionButton = isCurrent
    ? `<button type="button" class="comparison-project-link" data-enquiry-project="${escapeHtml(project.id)}" aria-label="Enquire about ${escapeHtml(projName)}"><i class="fa-solid fa-phone" aria-hidden="true"></i> Enquire Now</button>`
    : `<button type="button" class="comparison-project-link" data-details-project="${escapeHtml(project.id)}" aria-label="View ${escapeHtml(projName)} details"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i> View Details</button>`;

  const allBhks = [...new Set((project.floorPlans || []).map((f) => f.bhk))].join(", ");
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

  const specsHtml = rows
    .map(
      ([label, val]) =>
        `<div class="comparison-project-spec"><span class="comparison-project-spec-label">${escapeHtml(label)}</span><span class="comparison-project-spec-value" title="${escapeHtml(val || "Not listed")}">${escapeHtml(val || "Not listed")}</span></div>`
    )
    .join("\n          ");

  return `<article class="project-comparison-card${isCurrent ? " is-current" : ""}">
      <div class="comparison-project-card">
        <div class="comparison-project-image-wrap">
          <img class="comparison-project-image" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(projName)} project" loading="lazy" decoding="async">
          ${currentBadge}
        </div>
        <div class="comparison-project-name">
          <span>${escapeHtml(projName)}</span>
          <span class="comparison-project-location" title="${escapeHtml(project.location || shortLoc)}">${escapeHtml(shortLoc)}</span>
        </div>
        ${actionButton}
        <div class="comparison-project-specs">
          ${specsHtml}
        </div>
      </div>
    </article>`;
}

function applyBuilderSeo(html, { builder, properties }, route, basePath, siteOrigin) {
  const builderName = builder.name || "Birla Estates";
  const property = properties.find((item) => String(item.id) === String(route));
  const existingDescription = decodeHtml(html.match(/<meta\s+name="description"[^>]*content="([^"]*)"/i)?.[1] || "");
  const existingTitle = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || builderName);
  let title = existingTitle;
  let description = existingDescription;

  if (property) {
    title = `${property.title || property.name} | ${builderName} Bangalore`;
    description = cleanDescription(
      property.summary || property.description,
      `Explore ${property.title || property.name} by ${builderName} in Bangalore. View location, prices, floor plans, amenities, and book a site visit.`,
    );
    html = replaceElement(html, "detail-title", escapeHtml(property.title || property.name));
    html = replaceElement(html, "detail-location", escapeHtml(property.location || "Bengaluru"));
    const overviewParagraphs = Array.isArray(property.overview)
      ? property.overview
      : [property.summary || property.description || description];
    const overviewHtml = overviewParagraphs.map(renderOverviewParagraph).join("\n                ");
    html = replaceElement(html, "detail-description", overviewHtml);

    if (property.reraId?.trim()) {
      html = html.replace(/(<span\b[^>]*\bid="detail-rera-badge"[^>]*?)\bhidden\b/i, "$1");
    }

    const propertyImages = Array.isArray(property.images)
      ? property.images
      : property.image
        ? [property.image]
        : [];
    [0, 1, 2].forEach((index) => {
      if (propertyImages[index]) {
        const alt = `${property.title || property.name} ${["architecture", "interior", "amenities"][index]} in Bengaluru`;
        html = html.replace(
          new RegExp(`(<img\\s+id="detail-img-${index}"[^>]*src=")[^"]*("[^>]*>)`, "i"),
          `$1${escapeHtml(propertyImages[index])}$2`,
        );
        html = html.replace(
          new RegExp(`(<img\\s+id="detail-img-${index}"[^>]*alt=")[^"]*(")`, "i"),
          `$1${escapeHtml(alt)}$2`,
        );
      }
    });

    const highlights = property.highlights || [];
    if (highlights.length > 0) {
      const highlightsHtml = highlights.map(renderHighlightCardHtml).join("\n                ");
      html = replaceElement(html, "dt-highlights", `\n                ${highlightsHtml}\n              `);
      html = html.replace(/(<section\b[^>]*\bid="dt-project-highlights"[^>]*?)\bhidden\b/i, "$1");
    } else {
      html = replaceElement(html, "dt-highlights", "");
      html = html.replace('id="subnav-tab-highlights"', 'id="subnav-tab-highlights" hidden');
    }

    const galleryPhotos = (property.images || []).map((src, index) => ({
      src,
      alt: `${property.title || property.name} photo ${index + 1}`,
    }));
    const galleryFloorPlans = (property.floorPlans || []).map((fp) => ({
      src: fp.image || property.images[0],
      alt: `${property.title || property.name} ${fp.bhk} floor plan`,
    }));
    const allGalleryImages = [...galleryPhotos, ...galleryFloorPlans];
    if (allGalleryImages.length > 0) {
      html = html.replace(/(<section\b[^>]*\bid="dt-project-gallery"[^>]*?)\bhidden\b/i, "$1");
      const previewImg = property.images[0] || property.thumbnail || "";
      const previewAlt = `${property.title || property.name} gallery preview in Bengaluru`;
      html = html.replace(/id="projectGalleryPreviewImage"\s+src=""\s+alt=""/i, `id="projectGalleryPreviewImage" src="${escapeHtml(previewImg)}" alt="${escapeHtml(previewAlt)}"`);
      const countText = `${allGalleryImages.length} ${allGalleryImages.length === 1 ? "image" : "images"} · Project photos and floor plans`;
      html = replaceElement(html, "projectGalleryImageCount", escapeHtml(countText));
    } else {
      html = html.replace('id="subnav-tab-gallery"', 'id="subnav-tab-gallery" hidden');
    }

    const parsedPrice = parseIndianPrice(property.price) || 14900000;
    const loanAmt = Math.round(parsedPrice * 0.8);
    const emiRes = calculateEmi(loanAmt, 8.5, 20);
    const limits = getPropertySliderLimits(parsedPrice);
    html = replaceElement(html, "emi-sync-property", escapeHtml(property.title || property.name));
    html = replaceElement(html, "emi-prop-display", formatINR(parsedPrice));
    html = replaceElement(html, "emi-prop-sub", `(${formatINRShort(parsedPrice)})`);
    html = replaceElement(html, "emi-prop-min-lbl", formatINRShort(limits.min));
    html = replaceElement(html, "emi-prop-max-lbl", formatINRShort(limits.max));
    html = replaceElement(html, "emi-down-amount-display", formatINR(Math.round(parsedPrice * 0.2)));
    html = replaceElement(html, "emi-loan-amount", formatINR(loanAmt));
    html = replaceElement(html, "emi-monthly-output", formatINR(emiRes.emi));
    html = replaceElement(html, "emi-hero-footnote", `*For ${formatINRShort(loanAmt)} loan at 8.50% for 20 yrs`);
    html = replaceElement(html, "emi-table-down", formatINR(Math.round(parsedPrice * 0.2)));
    html = replaceElement(html, "emi-table-down-pct", "(20%)");
    html = replaceElement(html, "emi-table-principal", formatINR(loanAmt));
    html = replaceElement(html, "emi-table-interest", formatINR(emiRes.totalInterest));
    html = replaceElement(html, "emi-table-total", formatINR(emiRes.totalPayment));
    html = replaceElement(html, "emi-donut-center-val", formatINRShort(emiRes.totalPayment));
    html = replaceElement(html, "emi-legend-principal-val", formatINR(loanAmt));
    html = replaceElement(html, "emi-legend-principal-pct", `(${Math.round(emiRes.principalPct)}%)`);
    html = replaceElement(html, "emi-legend-interest-val", formatINR(emiRes.totalInterest));
    html = replaceElement(html, "emi-legend-interest-pct", `(${Math.round(emiRes.interestPct)}%)`);
    html = html.replace(/id="emi-prop-slider"[^>]*>/i, `id="emi-prop-slider" min="${limits.min}" max="${limits.max}" step="${limits.step}" value="${parsedPrice}" aria-label="Property Value">`);

    if (property.connectivity && property.connectivity.length > 0) {
      html = html.replace(
        /(<section\b[^>]*\bid="dt-connectivity-section"[^>]*?)\bhidden\b/i,
        "$1",
      );
      const nearbyPlaces = property.connectivity.slice(0, 4);
      const connectivityHtml = nearbyPlaces
        .map((place) => {
          const iconName =
            place.icon?.startsWith("fa-") && !place.icon.includes(" ")
              ? `fa-solid ${place.icon}`
              : place.icon || "fa-solid fa-location-dot";
          return `<div class="loc-item"><i class="${escapeHtml(iconName)}" aria-hidden="true"></i><div><strong>${escapeHtml(place.label || place.name)}:</strong> ${escapeHtml(place.distance || "")}</div></div>`;
        })
        .join("\n                                ");
      html = replaceElement(
        html,
        "dt-connectivity",
        `\n                                ${connectivityHtml}\n                            `,
      );
    } else {
      html = html.replace(
        /(<section\b[^>]*\bid="dt-connectivity-section"[^>]*?)(>)/i,
        "$1 hidden$2",
      );
      html = html.replace('id="subnav-tab-connectivity"', 'id="subnav-tab-connectivity" hidden');
    }

    const similar = getSimilarProjects(property, properties);
    const comparisonProjects = [property, ...similar];
    if (comparisonProjects.length >= 2) {
      html = html.replace(/(<section\b[^>]*\bid="dt-project-comparison"[^>]*?)\bhidden\b/i, "$1");
      const comparisonHtml = comparisonProjects
        .map((p, idx) => renderComparisonCardHtml(p, idx))
        .join("\n\n    ");
      html = replaceElement(html, "dt-project-comparison-grid", `\n    ${comparisonHtml}\n              `);
    } else {
      html = html.replace(/(<section\b[^>]*\bid="dt-project-comparison"[^>]*?)(>)/i, "$1 hidden$2");
      html = html.replace('id="subnav-tab-comparison"', 'id="subnav-tab-comparison" hidden');
    }
  }

  if (!property) {
    const builderHeading = `${builderName} in Bangalore`;
    html = html.replace(/(<h1\b[^>]*>)[\s\S]*?(<\/h1>)/i, `$1${escapeHtml(builderHeading)}$2`);
    const heroDescription = escapeHtml(description);
    html = html.replace(/(<h1\b[^>]*>[\s\S]*?<\/h1>[\s\S]*?<p\b[^>]*>)[\s\S]*?(<\/p>)/i, `$1${heroDescription}$2`);
  }

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = updateMeta(html, "description", description);

  const baseKeywords = Array.isArray(builder.seoKeywords) && builder.seoKeywords.length
    ? builder.seoKeywords
    : [
        `${builderName} Bangalore`,
        `${builderName} projects in Bangalore`,
        `apartments for sale in Bangalore`,
        `flats for sale in Bangalore`,
      ];
  const propertyKeywords = property
    ? [
        property.title || property.name,
        `${property.title || property.name} Bangalore`,
        `${property.title || property.name} ${property.location || "Bengaluru"}`,
        ...(property.bhk ? [property.bhk] : []),
        property.category === "new-launch"
          ? "new launch projects in Bangalore"
          : property.category === "ready"
            ? "ready to move flats in Bangalore"
            : "ongoing projects in Bangalore",
      ]
    : [];
  const allKeywords = [...new Set([...propertyKeywords, ...baseKeywords])].join(", ");
  html = updateMeta(html, "keywords", allKeywords);

  const ogTitle = `<meta property="og:title" content="${escapeHtml(title)}">`;
  const ogDescription = `<meta property="og:description" content="${escapeHtml(description)}">`;
  if (/property="og:title"/.test(html)) {
    html = html.replace(/<meta\s+property="og:title"[^>]*>/i, ogTitle);
  } else {
    html = html.replace("</head>", `    ${ogTitle}\n</head>`);
  }
  if (/property="og:description"/.test(html)) {
    html = html.replace(/<meta\s+property="og:description"[^>]*>/i, ogDescription);
  } else {
    html = html.replace("</head>", `    ${ogDescription}\n</head>`);
  }

  const canonicalPattern = /\s*<link\s+rel="canonical"\s+href="https:\/\/yourdomain\.com\/[^\"]+"\s*\/?>/i;
  html = html.replace(canonicalPattern, "");
  if (siteOrigin) {
    const canonicalRoute = property ? `${encodeURIComponent(route)}/` : "";
    const canonical = `${siteOrigin}${basePath}${canonicalRoute}`;
    html = html.replace(/<link\s+rel="canonical"[^>]*>/i, "");
    html = html.replace("</head>", `    <link rel="canonical" href="${escapeHtml(canonical)}">\n</head>`);
    html = html.replace(/<meta\s+property="og:url"[^>]*>/i, "");
    html = html.replace("</head>", `    <meta property="og:url" content="${escapeHtml(canonical)}">\n</head>`);
  }

  return html;
}

const projectDir = dirname(fileURLToPath(import.meta.url));
const outputDir = join(projectDir, "dist");
const requestedBasePath = process.argv[2] || "/";
const cleanBasePath = requestedBasePath.replace(/^\/+|\/+$/g, "");
const basePath = `/${cleanBasePath}${cleanBasePath ? "/" : ""}`;
const sourceHtml = readFileSync(join(projectDir, "index.html"), "utf8");
const privacyHtml = readFileSync(
  join(projectDir, "privacy-policy.html"),
  "utf8",
);
const builtPrivacy = privacyHtml.replace(
  "<head>",
  '<head>\n    <base href="' + basePath + '">',
);
const builderData = readFileSync(join(projectDir, "data", "birla.js"), "utf8");
const idLines = [
  ...builderData.matchAll(/^( *)"?id"?\s*:\s*(?:"([^"]+)"|(\d+))\s*,/gm),
];
const propertyIndent = idLines.length
  ? Math.min(...idLines.map((match) => match[1].length))
  : -1;
const propertyIds = idLines
  .filter((match) => match[1].length === propertyIndent)
  .map((match) => match[2] || match[3]);
const sectionRoutes = ["residences", "about", "faq", "contact"];
const allRoutes = [...sectionRoutes, ...propertyIds];
const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, "");
const seoData = await loadBuilderSeo(join(projectDir, "data", "birla.js"));
const apacheRules = [
  "Options -MultiViews",
  "RewriteEngine On",
  "RewriteRule ^privacy-policy/?$ privacy-policy.html [L]",
  ...allRoutes.map(
    (route) => `RewriteRule ^${route}/?$ ${route}/index.html [L]`,
  ),
].join("\n");

function createRoutedHtml(route = "") {
  let html = sourceHtml.replace(
    "<head>",
    `<head>\n    <base href="${basePath}">`,
  );
  if (propertyIds.includes(route)) {
    html = html.replace(
      /<body(?=[\s>])/,
      '<body data-property-route-loading="true"',
    );
    html = html.replace(
      "</head>",
      '<style>body[data-property-route-loading="true"] #catalog-page,body[data-property-route-loading="true"] #site-footer{display:none!important}body[data-property-route-loading="true"] #details-page{display:block!important}</style>\n</head>',
    );
  }
  html = html.replace(
    /<link rel="canonical" href="https:\/\/yourdomain\.com\/[^\"]+">\s*/i,
    "",
  );
  if (siteOrigin) {
    const canonicalUrl = `${siteOrigin}${basePath}${route ? `${route}/` : ""}`;
    html = html.replace(
      "</head>",
      `    <link rel="canonical" href="${canonicalUrl}">\n</head>`,
    );
  }
  return applyBuilderSeo(html, seoData, route, basePath, siteOrigin);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "index.html"), createRoutedHtml());
mkdirSync(join(outputDir, "css"), { recursive: true });
for (const stylesheet of ["styles.css", "tailwind.css", "privacy-policy.css"]) {
  cpSync(
    join(projectDir, "css", stylesheet),
    join(outputDir, "css", stylesheet),
  );
}
for (const directory of ["js", "data"]) {
  cpSync(join(projectDir, directory), join(outputDir, directory), {
    recursive: true,
  });
}
writeFileSync(join(outputDir, "privacy-policy.html"), builtPrivacy);
writeFileSync(join(outputDir, ".htaccess"), `${apacheRules}\n`);

for (const route of allRoutes) {
  const routeDir = join(outputDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, "index.html"), createRoutedHtml(route));
}

if (siteOrigin) {
  const urls = ["", ...propertyIds].map((route) => {
    const path = route ? `${encodeURIComponent(route)}/` : "";
    return `  <url><loc>${siteOrigin}${basePath}${path}</loc></url>`;
  });
  writeFileSync(join(outputDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
}
console.log(
  `Built birla home page, ${sectionRoutes.length} section routes, and ${propertyIds.length} property routes in ${resolve(outputDir)} (base: ${basePath}).`,
);
