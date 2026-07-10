import { profileData } from '../data.js';

export function renderCertifications() {
    const badgesContainer = document.querySelector('.badges-gallery');
    if (!badgesContainer) return;
    
    badgesContainer.innerHTML = ''; // Clear existing
    
    // Render Badges
    profileData.badges.forEach(badge => {
        const item = document.createElement('div');
        item.className = 'badge-item';
        item.innerHTML = `<i class="${badge.icon} fa-3x"></i><p>${badge.name}<br><small>${badge.org}</small></p>`;
        badgesContainer.appendChild(item);
    });

    // Render Internships as well
    profileData.internships.forEach(intern => {
        const item = document.createElement('div');
        item.className = 'badge-item';
        item.innerHTML = `<i class="fas fa-certificate fa-3x"></i><p>${intern.title}<br><small>${intern.company} (${intern.date})</small></p>`;
        badgesContainer.appendChild(item);
    });
}
