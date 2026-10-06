import { godrejData } from '../data/godrej.js';

        const builderData = { godrej: godrejData };
        const builder = document.body.dataset.builder;
        const propertiesData = builderData[builder];
        if (!Array.isArray(propertiesData)) {
            throw new Error(`No property data found for builder: ${builder}`);
        }

        // CURRENT STATE
        let activeProperty = propertiesData[0];
        let currentActiveChip = 'all';
        let carouselResizeObserver;

        function updatePropertyCarousel() {
            const track = document.getElementById('property-grid');
            const carousel = track.closest('[data-property-carousel]');
            const prev = carousel.querySelector('[data-carousel-prev]');
            const next = carousel.querySelector('[data-carousel-next]');
            const hasOverflow = track.scrollWidth > track.clientWidth + 1;
            const atStart = track.scrollLeft <= 1;
            const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

            carousel.classList.toggle('has-overflow', hasOverflow);
            prev.hidden = !hasOverflow;
            next.hidden = !hasOverflow;
            prev.disabled = !hasOverflow || atStart;
            next.disabled = !hasOverflow || atEnd;
        }

        function movePropertyCarousel(direction) {
            const track = document.getElementById('property-grid');
            const card = track.querySelector('.property-card');
            if (!card) return;
            const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
            track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
        }

        function initializeCustomSelects() {
            document.querySelectorAll('[data-custom-select]').forEach(wrapper => {
                const select = wrapper.querySelector('select');
                const trigger = wrapper.querySelector('.custom-select-trigger');
                const menu = wrapper.querySelector('.custom-select-menu');
                const label = trigger.querySelector('span');
                menu.replaceChildren();

                Array.from(select.options).forEach(option => {
                    const item = document.createElement('button');
                    item.type = 'button';
                    item.setAttribute('role', 'option');
                    item.dataset.value = option.value;
                    item.textContent = option.textContent;
                    item.setAttribute('aria-selected', String(option.selected));
                    item.addEventListener('click', () => {
                        select.value = option.value;
                        label.textContent = option.textContent;
                        menu.querySelectorAll('[role="option"]').forEach(optionButton => {
                            optionButton.setAttribute('aria-selected', String(optionButton === item));
                        });
                        select.dispatchEvent(new Event('change', { bubbles: true }));
                        menu.hidden = true;
                        trigger.setAttribute('aria-expanded', 'false');
                        trigger.focus();
                    });
                    menu.appendChild(item);
                });

                trigger.addEventListener('click', () => {
                    const shouldOpen = menu.hidden;
                    document.querySelectorAll('[data-custom-select] .custom-select-menu').forEach(otherMenu => {
                        otherMenu.hidden = true;
                        otherMenu.style.width = '';
                        otherMenu.style.left = '';
                        otherMenu.style.top = '';
                        otherMenu.parentElement.querySelector('.custom-select-trigger').setAttribute('aria-expanded', 'false');
                    });
                    menu.hidden = !shouldOpen;
                    trigger.setAttribute('aria-expanded', String(shouldOpen));
                    if (shouldOpen) {
                        const triggerBounds = trigger.getBoundingClientRect();
                        const menuHeight = menu.getBoundingClientRect().height;
                        const edgePadding = 12;
                        const menuWidth = Math.min(triggerBounds.width, window.innerWidth - edgePadding * 2);
                        const menuLeft = Math.max(edgePadding, Math.min(triggerBounds.left, window.innerWidth - menuWidth - edgePadding));
                        const spaceBelow = window.innerHeight - triggerBounds.bottom - edgePadding;
                        const spaceAbove = triggerBounds.top - edgePadding;
                        const openAbove = spaceBelow < menuHeight + 8 && spaceAbove > spaceBelow;
                        const desiredTop = openAbove ? triggerBounds.top - menuHeight - 6 : triggerBounds.bottom + 6;
                        const menuTop = Math.max(edgePadding, Math.min(desiredTop, window.innerHeight - menuHeight - edgePadding));
                        menu.style.width = `${menuWidth}px`;
                        menu.style.left = `${menuLeft}px`;
                        menu.style.top = `${menuTop}px`;
                        menu.querySelector('[aria-selected="true"]')?.focus();
                    }
                });

                wrapper.addEventListener('keydown', event => {
                    if (event.key === 'Escape') {
                        menu.hidden = true;
                        trigger.setAttribute('aria-expanded', 'false');
                        trigger.focus();
                    }
                });
            });
        }

        // RENDER CATALOG CARDS
        function renderPropertyGrid(items) {
            const grid = document.getElementById('property-grid');
            grid.innerHTML = '';

            if (items.length === 0) {
                grid.innerHTML = `<div class="property-empty-state text-center py-12 text-slate-500 font-medium">No residences found matching your criteria.</div>`;
                updatePropertyCarousel();
                return;
            }

            items.forEach(prop => {
                const card = document.createElement('div');
                card.className = "property-card bg-white rounded-2xl overflow-hidden border border-godrej-sage shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group";
                card.innerHTML = `
                    <div class="relative h-64 overflow-hidden">
                        <img src="${prop.images[0]}" alt="${prop.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                        <div class="absolute top-4 left-4 flex flex-col gap-1">
                            <span class="bg-godrej-emerald text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                                ${prop.category === 'new-launch' ? 'New Launch' : prop.category === 'ongoing' ? 'Ongoing Project' : prop.category === 'ready' ? 'Ready to Move' : 'Project'}
                            </span>
                        </div>
                        <div class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-godrej-emerald flex items-center gap-1">
                            <i class="fa-solid fa-star text-godrej-gold"></i> ${prop.highlight}
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <div class="text-xs font-bold text-godrej-gold uppercase tracking-wider mb-1">${prop.price}</div>
                            <h3 class="font-serif text-xl font-bold text-godrej-emerald mb-2 group-hover:text-godrej-gold transition-colors">${prop.title}</h3>
                            <p class="text-xs text-slate-500 mb-4 flex items-center"><i class="fa-solid fa-location-dot mr-1.5 text-godrej-gold"></i> ${prop.location}</p>
                            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6">${prop.summary}</p>
                        </div>
                        <div class="pt-4 border-t border-slate-100">
                            <button onclick="openDetailPage(${prop.id})" class="w-full bg-godrej-emerald hover:bg-godrej-darkEmerald text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1">
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
        function applyFilters() {
            const searchVal = document.getElementById('search-input').value.toLowerCase();
            const typeVal = document.getElementById('type-select').value;
            const priceVal = document.getElementById('price-select').value;

            const filtered = propertiesData.filter(prop => {
                const matchesSearch = prop.title.toLowerCase().includes(searchVal) || prop.location.toLowerCase().includes(searchVal);
                const matchesType = (typeVal === 'all') || (prop.type === typeVal);
                
                let matchesPrice = true;
                if (priceVal === '1.5-2.5') matchesPrice = (prop.priceValue >= 1.5 && prop.priceValue <= 2.5);
                else if (priceVal === '2.5-4.0') matchesPrice = (prop.priceValue >= 2.5 && prop.priceValue <= 4.0);
                else if (priceVal === '4.0+') matchesPrice = (prop.priceValue >= 4.0);

                let matchesChip = (currentActiveChip === 'all') || (prop.category === currentActiveChip);

                return matchesSearch && matchesType && matchesPrice && matchesChip;
            });

            renderPropertyGrid(filtered);
        }

        function filterByChip(chipType) {
            currentActiveChip = chipType;
            document.querySelectorAll('.chip-btn').forEach(btn => {
                const isActive = btn.dataset.chip === chipType;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', String(isActive));
            });

            applyFilters();
        }

        function renderPropertyFeatures(property) {
            const amenitiesContainer = document.getElementById('detail-amenities');
            const connectivityContainer = document.getElementById('detail-connectivity');
            amenitiesContainer.replaceChildren();
            connectivityContainer.replaceChildren();

            (property.amenities || []).forEach(amenity => {
                const card = document.createElement('div');
                card.className = 'p-4 bg-godrej-offwhite border border-godrej-sage rounded-2xl flex items-center gap-3';

                const iconBox = document.createElement('div');
                iconBox.className = 'w-10 h-10 rounded-xl bg-godrej-sage flex items-center justify-center text-godrej-emerald text-lg shrink-0';
                const icon = document.createElement('i');
                icon.className = `fa-solid ${amenity.icon || 'fa-star'}`;
                icon.setAttribute('aria-hidden', 'true');
                iconBox.appendChild(icon);

                const name = document.createElement('h4');
                name.className = 'text-xs font-bold text-slate-800';
                name.textContent = amenity.name;
                card.append(iconBox, name);
                amenitiesContainer.appendChild(card);
            });

            (property.connectivity || []).forEach(place => {
                const card = document.createElement('div');
                card.className = 'p-4 border border-slate-200 rounded-xl flex items-center justify-between gap-3';

                const placeInfo = document.createElement('div');
                placeInfo.className = 'flex min-w-0 items-center gap-3';
                const icon = document.createElement('i');
                icon.className = `fa-solid ${place.icon || 'fa-location-dot'} text-godrej-gold text-lg shrink-0`;
                icon.setAttribute('aria-hidden', 'true');
                const name = document.createElement('span');
                name.className = 'text-xs font-semibold text-slate-700';
                name.textContent = place.name;
                placeInfo.append(icon, name);

                const distance = document.createElement('span');
                distance.className = 'text-xs font-bold text-godrej-emerald whitespace-nowrap';
                distance.textContent = place.distance || '';
                card.append(placeInfo, distance);
                connectivityContainer.appendChild(card);
            });
        }

        // NAVIGATION SPA SPA SWITCHING
        function openDetailPage(id) {
            const prop = propertiesData.find(p => p.id === id);
            if (!prop) return;
            activeProperty = prop;

            // Populate Page Fields
            document.getElementById('detail-title').innerText = prop.title;
            document.getElementById('detail-location').innerHTML = `<i class="fa-solid fa-location-dot text-godrej-gold"></i> ${prop.location}`;
            document.getElementById('detail-price').innerText = prop.price;
            document.getElementById('detail-possession').innerText = prop.possession;
            document.getElementById('detail-units').innerText = prop.units;
            document.getElementById('detail-highlight').innerText = prop.highlight;
            document.getElementById('detail-tag').innerText = prop.category === 'new-launch' ? 'New Launch' : prop.category === 'ongoing' ? 'Ongoing Project' : prop.category === 'ready' ? 'Ready to Move' : 'Project';
            document.getElementById('detail-description').innerText = prop.description;
            document.getElementById('detail-rera-top').innerText = "RERA ID: " + prop.reraId;
            renderPropertyFeatures(prop);

            // Load 3 Gallery Images
            document.getElementById('detail-img-0').src = prop.images[0];
            document.getElementById('detail-img-1').src = prop.images[1];
            document.getElementById('detail-img-2').src = prop.images[2];

            // Show SPA View
            document.getElementById('catalog-page').classList.add('hidden');
            document.getElementById('details-page').classList.remove('hidden');
            document.getElementById('site-footer').classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showCatalogPage() {
            document.getElementById('details-page').classList.add('hidden');
            document.getElementById('catalog-page').classList.remove('hidden');
            document.getElementById('site-footer').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // FLOOR PLAN SWITCHER
        function selectFloorPlan(planType) {
            document.querySelectorAll('.plan-tab-btn').forEach(btn => {
                btn.classList.remove('bg-godrej-emerald', 'text-white');
                btn.classList.add('text-slate-600');
            });

            const activeBtn = document.getElementById(`plan-btn-${planType}`);
            activeBtn.classList.add('bg-godrej-emerald', 'text-white');
            activeBtn.classList.remove('text-slate-600');

            const areaElem = document.getElementById('plan-area');
            const priceElem = document.getElementById('plan-price');

            if (planType === '2bhk') {
                areaElem.innerText = "1,450 Sq. Ft.";
                priceElem.innerText = activeProperty.price;
            } else if (planType === '3bhk') {
                areaElem.innerText = "2,150 Sq. Ft.";
                priceElem.innerText = "₹ 2.95 Cr Onwards";
            } else if (planType === '4bhk') {
                areaElem.innerText = "3,400 Sq. Ft.";
                priceElem.innerText = "₹ 4.25 Cr Onwards";
            }
        }

        // LIGHTBOX MODAL
        function openLightbox(imgIndex) {
            if (!activeProperty || !activeProperty.images[imgIndex]) return;
            document.getElementById('lightbox-img').src = activeProperty.images[imgIndex];
            document.getElementById('lightbox-modal').classList.remove('hidden');
        }

        function closeLightbox() {
            document.getElementById('lightbox-modal').classList.add('hidden');
        }

        // BRAND LEGACY TAB SWITCHING
        function switchTab(tabKey) {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('border-godrej-emerald', 'text-godrej-emerald', 'font-bold');
                btn.classList.add('border-transparent', 'text-slate-500');
            });
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.add('hidden'));

            const selectedBtn = document.getElementById(`tab-btn-${tabKey}`);
            selectedBtn.classList.add('border-godrej-emerald', 'text-godrej-emerald', 'font-bold');
            selectedBtn.classList.remove('border-transparent', 'text-slate-500');

            document.getElementById(`tab-content-${tabKey}`).classList.remove('hidden');
        }

        // FAQ ACCORDION
        function toggleFaq(id) {
            const ans = document.getElementById(`faq-answer-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            if (ans.classList.contains('hidden')) {
                ans.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                ans.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        // FORMS SUBMISSION
        function handleMainFormSubmit(e) {
            e.preventDefault();
            document.getElementById('booking-form-container').classList.add('hidden');
            document.getElementById('main-form-success').classList.remove('hidden');
        }

        function resetMainForm() {
            document.getElementById('main-consultation-form').reset();
            document.getElementById('booking-form-container').classList.remove('hidden');
            document.getElementById('main-form-success').classList.add('hidden');
        }

        function handleSidebarSubmit(e) {
            e.preventDefault();
            document.getElementById('sidebar-form-content').classList.add('hidden');
            document.getElementById('sidebar-form-success').classList.remove('hidden');
        }

        function scrollToConsultation() {
            if (document.getElementById('details-page').classList.contains('hidden') === false) {
                showCatalogPage();
            }
            requestAnimationFrame(() => {
                document.getElementById('consultation-section').scrollIntoView({ behavior: 'smooth' });
            });
        }

        const mobileMenuButton = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.setAttribute('aria-label', 'Open navigation menu');
            mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>';
        }

        mobileMenuButton.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', isOpen);
            mobileMenuButton.setAttribute('aria-expanded', String(!isOpen));
            mobileMenuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
            mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars text-xl" aria-hidden="true"></i>';
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) closeMobileMenu();
        });

        initializeCustomSelects();
        document.addEventListener('click', event => {
            if (event.target.closest('[data-custom-select]')) return;
            document.querySelectorAll('[data-custom-select] .custom-select-menu').forEach(menu => {
                menu.hidden = true;
                menu.style.width = '';
                menu.style.left = '';
                menu.style.top = '';
                menu.parentElement.querySelector('.custom-select-trigger').setAttribute('aria-expanded', 'false');
            });
        });

        const whatsappPopup = document.getElementById('whatsapp-popup');
        const whatsappFloat = document.getElementById('whatsapp-float');
        const whatsappClose = document.getElementById('whatsapp-close');
        const whatsappForm = document.getElementById('whatsapp-form');
        const whatsappFeedback = document.getElementById('whatsapp-feedback');
        const whatsappBusinessNumber = document.body.dataset.whatsappNumber || '';

        function openWhatsAppPopup() {
            whatsappPopup.classList.add('is-open');
            whatsappPopup.setAttribute('aria-hidden', 'false');
            document.body.classList.add('whatsapp-popup-open');
            whatsappFeedback.textContent = '';
        }

        function closeWhatsAppPopup() {
            whatsappPopup.classList.remove('is-open');
            whatsappPopup.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('whatsapp-popup-open');
        }

        whatsappFloat.addEventListener('click', openWhatsAppPopup);
        whatsappClose.addEventListener('click', closeWhatsAppPopup);
        whatsappPopup.addEventListener('click', event => {
            if (event.target === whatsappPopup) closeWhatsAppPopup();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && whatsappPopup.classList.contains('is-open')) closeWhatsAppPopup();
        });
        whatsappForm.addEventListener('submit', event => {
            event.preventDefault();
            const customerPhone = document.getElementById('whatsapp-phone').value.replace(/\D/g, '');
            if (customerPhone.length < 10) {
                whatsappFeedback.textContent = 'Enter a valid WhatsApp number to continue.';
                return;
            }
            if (!whatsappBusinessNumber) {
                whatsappFeedback.textContent = 'WhatsApp contact is not configured yet. Please contact us by phone.';
                return;
            }
            const message = `Please send me the Godrej e-brochure on WhatsApp. My number is ${customerPhone}.`;
            window.open(`https://wa.me/${whatsappBusinessNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
            closeWhatsAppPopup();
        });

        const propertyCarousel = document.querySelector('[data-property-carousel]');
        const propertyTrack = document.getElementById('property-grid');
        propertyCarousel.querySelector('[data-carousel-prev]').addEventListener('click', () => movePropertyCarousel(-1));
        propertyCarousel.querySelector('[data-carousel-next]').addEventListener('click', () => movePropertyCarousel(1));
        propertyTrack.addEventListener('scroll', updatePropertyCarousel, { passive: true });
        if ('ResizeObserver' in window) {
            carouselResizeObserver = new ResizeObserver(updatePropertyCarousel);
            carouselResizeObserver.observe(propertyTrack);
        } else {
            window.addEventListener('resize', updatePropertyCarousel);
        }

        // Keep inline HTML handlers available when this file runs as an ES module.
        Object.assign(window, {
            applyFilters,
            closeLightbox,
            closeMobileMenu,
            filterByChip,
            handleMainFormSubmit,
            handleSidebarSubmit,
            openDetailPage,
            openLightbox,
            resetMainForm,
            scrollToConsultation,
            selectFloorPlan,
            showCatalogPage,
            switchTab,
            toggleFaq
        });
        // INITIAL ONLOAD
        window.onload = function() {
            renderPropertyGrid(propertiesData);
            let popupAlreadyShown = false;
            try { popupAlreadyShown = localStorage.getItem('godrej-whatsapp-popup-shown') === 'true'; } catch (error) { /* Storage may be disabled. */ }
            if (!popupAlreadyShown) {
                try { localStorage.setItem('godrej-whatsapp-popup-shown', 'true'); } catch (error) { /* Storage may be disabled. */ }
                window.setTimeout(openWhatsAppPopup, 900);
            }
        };
