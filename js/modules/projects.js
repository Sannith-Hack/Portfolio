import { profileData } from '../data.js';
import { setupImageOrientation, updateModalMediaOrientation } from './imageHelper.js';

let activeCategory = 'all';

export function renderProjects() {
    const projectSection = document.getElementById('project');
    if (!projectSection) return;

    let filterNav = document.getElementById('project-filters');
    if (!filterNav) {
        filterNav = document.createElement('div');
        filterNav.id = 'project-filters';
        filterNav.className = 'filter-tabs';
        filterNav.innerHTML = `
            <button class="filter-btn active" data-filter="all">All (${profileData.projects.length})</button>
            <button class="filter-btn" data-filter="fullstack">Full-Stack & Web</button>
            <button class="filter-btn" data-filter="ai">AI & RAG Agents</button>
            <button class="filter-btn" data-filter="mobile">Mobile Apps</button>
            <button class="filter-btn" data-filter="iot">IoT & Hardware</button>
            <button class="filter-btn" data-filter="systems">Systems & OS</button>
        `;
        const contentDiv = projectSection.querySelector('.content');
        const projectsContainer = projectSection.querySelector('.projects');
        if (contentDiv && projectsContainer) {
            contentDiv.insertBefore(filterNav, projectsContainer);
        }

        filterNav.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            filterNav.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-filter');
            displayProjectsList();
        });
    }

    displayProjectsList();
    initProjectModal();
}

function displayProjectsList() {
    const projectsContainer = document.querySelector('.projects');
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = '';

    const filtered = activeCategory === 'all'
        ? profileData.projects
        : profileData.projects.filter(p => p.category === activeCategory);

    filtered.forEach((project, index) => {
        const delay = (index % 3) * 80;
        const card = document.createElement('div');
        card.className = 'card project-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay.toString());
        
        const githubUrl = project.github && project.github.trim() !== '' 
            ? project.github 
            : 'https://github.com/Sannith-Hack';

        const stackPills = (project.techStack || '')
            .split(',')
            .map(s => `<span class="stack-pill">${s.trim()}</span>`)
            .slice(0, 4)
            .join('');

        card.innerHTML = `
            <div class="card-img-wrapper" title="Click to view full preview">
                <img class="card-bg-blur" src="${project.image}" alt="" aria-hidden="true" onerror="this.style.display='none'" />
                <img class="card-img-main" src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='assets/images/Task manager app.jpg'" />
                <div class="project-badge-pill">${project.badge || 'Project'}</div>
                <div class="project-overlay">
                    <span class="view-detail-hint"><i class="fas fa-expand-alt"></i> Inspect</span>
                </div>
            </div>
            <div class="description">
                <div class="project-category-tag"><i class="fas fa-folder-open"></i> ${project.categoryLabel || 'Showcase'}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.description || ''}</p>
                <div class="stack-container">
                    ${stackPills}
                </div>
                <div class="action">
                    <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="proj-btn code-btn">
                        <i class="fab fa-github"></i> Repository
                    </a>
                    <button class="proj-btn details-btn" data-id="${project.id || project.title}">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        `;
        
        const detailsBtn = card.querySelector('.details-btn');
        const imgWrapper = card.querySelector('.card-img-wrapper');
        const mainImg = card.querySelector('.card-img-main');

        // Dynamically compute and apply orientation
        setupImageOrientation(mainImg, imgWrapper, card);
        
        const openHandler = () => openProjectModal(project);
        if (detailsBtn) detailsBtn.addEventListener('click', openHandler);
        if (imgWrapper) imgWrapper.addEventListener('click', openHandler);

        projectsContainer.appendChild(card);
    });
}

function initProjectModal() {
    if (document.getElementById('project-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'cert-modal';
    modal.innerHTML = `
        <div class="cert-modal-backdrop"></div>
        <div class="cert-modal-dialog project-modal-dialog">
            <button class="cert-modal-close" aria-label="Close modal">&times;</button>
            <div class="cert-modal-body project-modal-body">
                <div class="cert-modal-media project-modal-media" id="proj-modal-media-wrap">
                    <img id="proj-modal-img" src="" alt="Project Visual Preview" />
                </div>
                <div class="cert-modal-info project-modal-info">
                    <div class="cert-meta">
                        <span id="proj-modal-cat" class="cert-type-pill"></span>
                        <span id="proj-modal-badge" class="badge-pill"></span>
                    </div>
                    <h2 id="proj-modal-title"></h2>
                    <div class="tech-stack-box">
                        <strong><i class="fas fa-layer-group"></i> Architecture & Stack:</strong>
                        <p id="proj-modal-stack"></p>
                    </div>
                    <div class="description-box">
                        <strong><i class="fas fa-align-left"></i> System Overview:</strong>
                        <p id="proj-modal-desc"></p>
                    </div>
                    <div class="features-box">
                        <strong><i class="fas fa-bolt"></i> Key Innovations & Engineering Highlights:</strong>
                        <p id="proj-modal-features"></p>
                    </div>
                    <div class="cert-action" id="proj-modal-actions">
                        <a id="proj-modal-github" href="#" target="_blank" rel="noopener noreferrer" class="cert-btn primary-btn">
                            <i class="fab fa-github"></i> Open Source Repository
                        </a>
                    </div>
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

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const modalImg = document.getElementById('proj-modal-img');
    const mediaWrap = document.getElementById('proj-modal-media-wrap');

    modalImg.src = project.image || 'assets/images/Task manager app.jpg';
    updateModalMediaOrientation(modalImg, mediaWrap);

    document.getElementById('proj-modal-cat').innerHTML = `<i class="fas fa-code-branch"></i> ${project.categoryLabel || 'Software Architecture'}`;
    document.getElementById('proj-modal-badge').textContent = project.badge || 'Production Grade';
    document.getElementById('proj-modal-title').textContent = project.title;
    document.getElementById('proj-modal-stack').textContent = project.techStack || 'Custom Stack';
    document.getElementById('proj-modal-desc').textContent = project.description || '';
    document.getElementById('proj-modal-features').textContent = project.features || 'Full architectural modularity and unit-tested components.';
    
    const githubLink = document.getElementById('proj-modal-github');
    const repoUrl = project.github && project.github.trim() !== '' ? project.github : 'https://github.com/Sannith-Hack';
    githubLink.href = repoUrl;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
