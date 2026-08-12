import { profileData } from '../data.js';

export function renderCertifications() {
    let certsContainer = document.querySelector('.certifications-grid');
    if (!certsContainer) {
        certsContainer = document.querySelector('.badges-gallery');
    }
    if (!certsContainer) return;

    certsContainer.className = 'certifications-grid'; // Standardize container class
    certsContainer.innerHTML = ''; // Clear existing static content

    const certList = profileData.certifications || [];

    certList.forEach((cert, index) => {
        const delay = 150 + (index % 3) * 100;
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay.toString());

        const iconClass = getIconForType(cert.type);

        const tagsHtml = (cert.technologies || [])
            .map(tech => `<span class="cert-tag">${tech}</span>`)
            .join('');

        const actionUrl = cert.credentialUrl && cert.credentialUrl.trim() !== '' ? cert.credentialUrl : '#';
        const buttonLabel = cert.buttonText || (cert.type === 'IoT Project' ? 'View Project' : 'View Certificate');
        const hasExternalLink = actionUrl !== '#';

        card.innerHTML = `
            <div class="cert-img-wrapper" title="Click to inspect preview">
                <img class="cert-bg-blur" src="${cert.image}" alt="" aria-hidden="true" onerror="this.style.display='none'" />
                <img class="cert-img-main" src="${cert.image}" alt="${cert.title} Certificate Preview" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="cert-placeholder" style="display: none;">
                    <div class="placeholder-icon-wrap">
                        <i class="${iconClass}"></i>
                    </div>
                    <div class="placeholder-type">${cert.type || 'Certificate'}</div>
                    <div class="placeholder-text">Certificate Preview</div>
                    <div class="placeholder-status"><i class="fas fa-clock"></i> Image Coming Soon</div>
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
                ${cert.features ? `<div class="cert-features"><i class="fas fa-cogs"></i> <strong>Key Highlights:</strong> ${cert.features}</div>` : ''}
                <div class="cert-tags">${tagsHtml}</div>
                <div class="cert-action">
                    ${hasExternalLink ? `
                        <a href="${actionUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn primary-btn">
                            <i class="fas fa-external-link-alt"></i> ${buttonLabel}
                        </a>
                    ` : `
                        <button class="cert-btn disabled-btn" title="Credential verified">
                            <i class="fas fa-certificate"></i> Verified
                        </button>
                    `}
                    <button class="cert-btn secondary-btn preview-trigger">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
        `;

        const imgWrapper = card.querySelector('.cert-img-wrapper');
        const previewTrigger = card.querySelector('.preview-trigger');

        const openLightboxHandler = (e) => {
            if (e.target.closest('a')) return;
            openCertLightbox(cert);
        };

        if (imgWrapper) imgWrapper.addEventListener('click', openLightboxHandler);
        if (previewTrigger) previewTrigger.addEventListener('click', openLightboxHandler);

        certsContainer.appendChild(card);
    });

    initCertLightboxModal();
}

function getIconForType(type = '') {
    const t = type.toLowerCase();
    if (t.includes('bootcamp')) return 'fas fa-graduation-cap';
    if (t.includes('iot') || t.includes('project')) return 'fas fa-microchip';
    if (t.includes('technical') || t.includes('achievement')) return 'fas fa-award';
    if (t.includes('simulation')) return 'fas fa-laptop-code';
    if (t.includes('course')) return 'fas fa-book-open';
    if (t.includes('intern')) return 'fas fa-user-check';
    if (t.includes('badge')) return 'fas fa-medal';
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
                <div class="cert-modal-media">
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

    const modalImg = document.getElementById('cert-modal-img');
    const modalPlaceholder = document.getElementById('cert-modal-placeholder');
    const modalIcon = document.getElementById('cert-modal-icon');
    const modalTypeBadge = document.getElementById('cert-modal-type-badge');
    const modalBadge = document.getElementById('cert-modal-badge');
    const modalTitle = document.getElementById('cert-modal-title');
    const modalOrg = document.getElementById('cert-modal-org');
    const modalDate = document.getElementById('cert-modal-date');
    const modalDesc = document.getElementById('cert-modal-desc');
    const modalTags = document.getElementById('cert-modal-tags');
    const modalAction = document.getElementById('cert-modal-action');

    const iconClass = getIconForType(cert.type);

    if (modalImg) {
        modalImg.style.display = 'block';
        modalImg.src = cert.image || '';
        modalImg.alt = cert.title;
    }
    if (modalPlaceholder) modalPlaceholder.style.display = 'none';
    if (modalIcon) modalIcon.className = iconClass;
    if (modalTypeBadge) modalTypeBadge.textContent = cert.type || 'Certificate';
    if (modalBadge) modalBadge.innerHTML = `<i class="${iconClass}"></i> ${cert.type || 'Certificate'}`;
    if (modalTitle) modalTitle.textContent = cert.title;
    if (modalOrg) modalOrg.innerHTML = `<i class="fas fa-building"></i> ${cert.organization}`;
    if (modalDate) modalDate.textContent = cert.date ? `Completed: ${cert.date}` : '';
    if (modalDesc) modalDesc.textContent = cert.description;

    if (modalTags) {
        modalTags.innerHTML = (cert.technologies || [])
            .map(tech => `<span class="cert-tag">${tech}</span>`)
            .join('');
    }

    if (modalAction) {
        const actionUrl = cert.credentialUrl && cert.credentialUrl.trim() !== '' ? cert.credentialUrl : '#';
        const buttonLabel = cert.buttonText || 'View Certificate';
        if (actionUrl !== '#') {
            modalAction.innerHTML = `
                <a href="${actionUrl}" target="_blank" rel="noopener noreferrer" class="cert-btn primary-btn">
                    <i class="fas fa-external-link-alt"></i> ${buttonLabel}
                </a>
            `;
        } else {
            modalAction.innerHTML = `
                <button class="cert-btn disabled-btn" disabled>
                    <i class="fas fa-check-circle"></i> Verified Credential
                </button>
            `;
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

