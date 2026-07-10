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
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/images/Task manager app.jpg'" />
            <div class="description">
                <h1>${project.title}</h1>
                <p><strong>Stack:</strong> ${project.techStack}</p>
                <p>${project.description}</p>
                <p><em>${project.features}</em></p>
                <div class="action">
                    <a href="${project.github}" target="_blank">Github</a>
                    <a href="#" class="demo-link">Demo</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(card);
    });
}
