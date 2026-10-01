import { profileData } from '../data.js';
import { setupImageOrientation, updateModalMediaOrientation } from './imageHelper.js';

let activeCertFilter = 'all';

export function renderCertifications() {
    const certSection = document.getElementById('certifications');
    if (!certSection) return;

    let filterNav = document.getElementById('cert-filters');
    if (!filterNav) {
        filterNav = document.createElement('div');
        filterNav.id = 'cert-filters';
        filterNav.className = 'filter-tabs';
        filterNav.innerHTML = `
            <button class="filter-btn active" data-filter="all">All (${profileData.certifications.length})</button>
            <button class="filter-btn" data-filter="internship">Residencies & Internships</button>
            <button class="filter-btn" data-filter="ai">AI & Agents</button>
            <button class="filter-btn" data-filter="bootcamp">Bootcamps & Courses</button>
            <button class="filter-btn" data-filter="simulation">Job Simulations & Events</button>
            <button class="filter-btn" data-filter="kaggle">Badges & Community</button>
            <button class="filter-btn" data-filter="offers">Offer Letters</button>
        `;
        const contentDiv = certSection.querySelector('.content');
        const gridContainer = certSection.querySelector('#certifications-grid');
        if (contentDiv && gridContainer) {
            contentDiv.insertBefore(filterNav, gridContainer);
        }

        filterNav.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            filterNav.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCertFilter = btn.getAttribute('data-filter');
            displayCertsList();
        });
    }

    displayCertsList();
    initCertLightboxModal();
}

function displayCertsList() {
    const certsContainer = document.getElementById('certifications-grid');
    if (!certsContainer) return;

    certsContainer.innerHTML = '';

    const certList = profileData.certifications || [];
    const filtered = activeCertFilter === 'all'
        ? certList
        : certList.filter(c => c.category === activeCertFilter);

    filtered.forEach((cert, index) => {
        const delay = (index % 3) * 80;
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay.toString());

        const iconClass = getIconForType(cert.type);

        const tagsHtml = (cert.technologies || [])
            .map(tech => `<span class="cert-tag">${tech}</span>`)
            .slice(0, 4)
            .join('');

        const actionUrl = cert.credentialUrl && cert.credentialUrl.trim() !== '' ? cert.credentialUrl : '#';
        const buttonLabel = cert.buttonText || (cert.type === 'IoT Project' ? 'View Project' : 'View Credential');
        const hasExternalLink = actionUrl !== '#';

        card.innerHTML = `
            <div class="cert-img-wrapper" title="Click to inspect full document">
                <img class="cert-bg-blur" src="${cert.image}" alt="" aria-hidden="true" onerror="this.style.display='none'" />
                <img class="cert-img-main" src="${cert.image}" alt="${cert.title} Certificate Preview" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="cert-placeholder" style="display: none;">
                    <div class="placeholder-icon-wrap">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="placeholder-type">${cert.type || 'Certificate'}</div>
                    <div class="placeholder-text">Verified Credential</div>
                    <div class="placeholder-status"><i class="fas fa-check-circle"></i> Authenticated</div>
                </div>
                <div class="cert-img-overlay">
                    <span class="preview-btn"><i class="fas fa-search-plus"></i> Inspect</span>
                </div>
            </div>
            <div class="cert-content">
                <div class="cert-meta">
                    <span class="cert-type-pill"><i class="${iconClass}"></i> ${cert.type}</span>
                    <span class="cert-date">${cert.date || ''}</span>
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                <div class="cert-org"><i class="fas fa-building"></i> ${cert.organization}</div>
                <p class="cert-desc">${cert.description}</p>
                <div class="cert-tags">${tagsHtml}</div>
                <div class="cert-action">
                    ${hasExternalLink ? `
                        <a href="${actionUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn primary-btn">
                            <i class="fas fa-external-link-alt"></i> ${buttonLabel}
                        </a>
                    ` : `
                        <button class="cert-btn disabled-btn" title="Credential on Record">
                            <i class="fas fa-check-circle"></i> Verified
                        </button>
                    `}
                    <button class="cert-btn secondary-btn preview-trigger">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
        `;

        const imgWrapper = card.querySelector('.cert-img-wrapper');
        const mainImg = card.querySelector('.cert-img-main');
        const previewTrigger = card.querySelector('.preview-trigger');

        // Dynamically compute and apply orientation
        setupImageOrientation(mainImg, imgWrapper, card);

        const openLightboxHandler = (e) => {
            if (e.target.closest('a')) return;
            openCertLightbox(cert);
        };

        if (imgWrapper) imgWrapper.addEventListener('click', openLightboxHandler);
        if (previewTrigger) previewTrigger.addEventListener('click', openLightboxHandler);

        certsContainer.appendChild(card);
    });
}

function getIconForType(type = '') {
    const t = type.toLowerCase();
    if (t.includes('bootcamp')) return 'fas fa-graduation-cap';
    if (t.includes('iot') || t.includes('project')) return 'fas fa-microchip';
    if (t.includes('achievement') || t.includes('recognition')) return 'fas fa-award';
    if (t.includes('simulation')) return 'fas fa-laptop-code';
    if (t.includes('course')) return 'fas fa-book-open';
    if (t.includes('intern')) return 'fas fa-user-check';
    if (t.includes('badge') || t.includes('kaggle')) return 'fas fa-medal';
    return 'fas fa-certificate';
}

function initCertLightboxModal() {
    if (document.getElementById('cert-lightbox-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'cert-lightbox-modal';
    modal.className = 'cert-modal';
    modal.innerHTML = `
        <div class="cert-modal-backdrop"></div>
        <div class="cert-modal-dialog">
            <button class="cert-modal-close" aria-label="Close preview">&times;</button>
            <div class="cert-modal-body">
                <div class="cert-modal-media" id="cert-modal-media-wrap">
                    <img id="cert-modal-img" src="" alt="Certificate Full View" onerror="this.style.display='none'; document.getElementById('cert-modal-placeholder').style.display='flex';" />
                    <div id="cert-modal-placeholder" class="cert-placeholder modal-placeholder" style="display:none;">
                        <div class="placeholder-icon-wrap"><i id="cert-modal-icon" class="fas fa-certificate"></i></div>
                        <div id="cert-modal-type-badge" class="placeholder-type">Certificate</div>
                        <div class="placeholder-text">Official Credential Document</div>
                        <div class="placeholder-status"><i class="fas fa-check-circle"></i> Verified Credential Record</div>
                    </div>
                </div>
                <div class="cert-modal-info">
                    <span id="cert-modal-badge" class="cert-type-pill">Certificate</span>
                    <h2 id="cert-modal-title"></h2>
                    <div id="cert-modal-org" class="cert-org"></div>
                    <div id="cert-modal-date" class="cert-date-text"></div>
                    <p id="cert-modal-desc"></p>
                    <div id="cert-modal-tags" class="cert-tags"></div>
                    <div id="cert-modal-action" class="cert-action"></div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.cert-modal-close');
    const backdrop = modal.querySelector('.cert-modal-backdrop');

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openCertLightbox(cert) {
    const modal = document.getElementById('cert-lightbox-modal');
    if (!modal) return;

    const img = document.getElementById('cert-modal-img');
    const mediaWrap = document.getElementById('cert-modal-media-wrap');
    const placeholder = document.getElementById('cert-modal-placeholder');
    const title = document.getElementById('cert-modal-title');
    const org = document.getElementById('cert-modal-org');
    const date = document.getElementById('cert-modal-date');
    const desc = document.getElementById('cert-modal-desc');
    const badge = document.getElementById('cert-modal-badge');
    const tags = document.getElementById('cert-modal-tags');
    const action = document.getElementById('cert-modal-action');

    img.style.display = 'block';
    placeholder.style.display = 'none';
    img.src = cert.image || '';

    updateModalMediaOrientation(img, mediaWrap);

    title.textContent = cert.title;
    org.innerHTML = `<i class="fas fa-building"></i> ${cert.organization}`;
    date.textContent = cert.date ? `Issued: ${cert.date}` : '';
    desc.textContent = cert.description;
    badge.innerHTML = `<i class="${getIconForType(cert.type)}"></i> ${cert.type}`;

    tags.innerHTML = (cert.technologies || [])
        .map(t => `<span class="cert-tag">${t}</span>`)
        .join('');

    const targetUrl = cert.credentialUrl || cert.documentUrl;
    const hasLink = targetUrl && targetUrl.trim() !== '' && targetUrl !== '#';

    action.innerHTML = hasLink ? `
        <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn primary-btn">
            <i class="fas fa-external-link-alt"></i> Open Full Document / PDF
        </a>
    ` : `
        <button class="cert-btn disabled-btn">
            <i class="fas fa-shield-alt"></i> Officially Verified
        </button>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
