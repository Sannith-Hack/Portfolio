import { profileData } from '../data.js';

export function renderSkills() {
    renderEngineeringDomains();
    renderSkillCategories();
}

function renderEngineeringDomains() {
    const domainsContainer = document.getElementById('engineering-domains-grid');
    if (!domainsContainer || !profileData.engineeringDomains) return;

    domainsContainer.innerHTML = '';

    profileData.engineeringDomains.forEach((domain, index) => {
        const delay = (index % 4) * 70;
        const card = document.createElement('div');
        card.className = 'domain-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay.toString());

        const techPills = (domain.technologies || []).map(t => `<span class="domain-tag">${t}</span>`).join('');

        card.innerHTML = `
            <div class="domain-card-header">
                <div class="domain-card-icon">
                    <i class="${domain.icon}"></i>
                </div>
                <h3>${domain.title}</h3>
            </div>
            <p>${domain.description}</p>
            <div class="domain-tech-tags">
                ${techPills}
            </div>
        `;

        domainsContainer.appendChild(card);
    });
}

function renderSkillCategories() {
    const skillsContainer = document.querySelector('.skills-categories-large');
    if (!skillsContainer || !profileData.skills) return;
    
    skillsContainer.innerHTML = '';
    
    profileData.skills.forEach((skillCat, index) => {
        const delay = (index % 4) * 80;
        const card = document.createElement('div');
        card.className = `category-card accent-${skillCat.accent || 'indigo'}`;
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay.toString());
        
        let itemsHtml = skillCat.items.map(item => {
            const isSvg = typeof item === 'object' && item.icon && item.icon.endsWith('.svg');
            const iconHtml = typeof item === 'object' 
                ? (isSvg ? `<img src="${item.icon}" alt="${item.name}" class="skill-icon-img" />` : `<i class="${item.icon} skill-icon-fa"></i>`)
                : '<i class="fas fa-code"></i>';
            const name = typeof item === 'object' ? item.name : item;
            const level = typeof item === 'object' && item.level ? `<span class="skill-level">${item.level}</span>` : '';

            return `
                <div class="skill-item">
                    ${iconHtml}
                    <div class="skill-info">
                        <span class="skill-name">${name}</span>
                        ${level}
                    </div>
                </div>
            `;
        }).join('');
        
        card.innerHTML = `
            <div class="category-header">
                <div class="category-icon-wrap">
                    <i class="${skillCat.icon}"></i>
                </div>
                <div>
                    <h3>${skillCat.category}</h3>
                    <span class="category-count">${skillCat.items.length} Technologies</span>
                </div>
            </div>
            <div class="skills-display">
                ${itemsHtml}
            </div>
        `;
        skillsContainer.appendChild(card);
    });
}
