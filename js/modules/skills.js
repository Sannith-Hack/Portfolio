import { profileData } from '../data.js';

export function renderSkills() {
    const skillsContainer = document.querySelector('.skills-categories-large');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = ''; // Clear existing
    
    profileData.skills.forEach((skillCat, index) => {
        const delay = (index % 3) * 100;
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-aos', 'flip-left');
        card.setAttribute('data-aos-delay', delay.toString());
        
        let itemsHtml = skillCat.items.map(item => {
            return `<div class="skill-item"><p style="margin: 5px; font-weight: bold;">${item}</p></div>`;
        }).join('');
        
        card.innerHTML = `
            <div class="category-header">
                <i class="${skillCat.icon}"></i>
                <h3>${skillCat.category}</h3>
            </div>
            <div class="skills-display" style="flex-wrap: wrap; justify-content: center; gap: 10px;">
                ${itemsHtml}
            </div>
        `;
        skillsContainer.appendChild(card);
    });
}
