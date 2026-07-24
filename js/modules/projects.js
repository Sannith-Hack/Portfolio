import { profileData } from '../data.js';

export function renderProjects() {
    const projectsContainer = document.querySelector('.projects');
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = ''; // Clear existing
    
    profileData.projects.forEach((project, index) => {
        const delay = 300 + (index % 4) * 100;
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-aos', 'zoom-in-down');
        card.setAttribute('data-aos-delay', delay.toString());
        
        const githubUrl = project.github && project.github.trim() !== '' 
            ? project.github 
            : 'https://github.com/Sannith-Hack';

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img class="card-bg-blur" src="${project.image}" alt="" aria-hidden="true" onerror="this.style.display='none'" />
                <img class="card-img-main" src="${project.image}" alt="${project.title}" onerror="this.src='assets/images/Task manager app.jpg'" />
            </div>
            <div class="description">
                <h1>${project.title}</h1>
                <p><strong>Stack:</strong> ${project.techStack || 'N/A'}</p>
                <p>${project.description || ''}</p>
                ${project.features ? `<p><em>${project.features}</em></p>` : ''}
                <div class="action">
                    <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="#" class="demo-link" data-title="${project.title}">Demo</a>
                </div>
            </div>
        `;
        
        const demoLink = card.querySelector('.demo-link');
        if (demoLink) {
            demoLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert(`Live demo for "${project.title}" will be available soon! Check GitHub repository for details.`);
            });
        }
        
        projectsContainer.appendChild(card);
    });
}
