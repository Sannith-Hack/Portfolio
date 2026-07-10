import { profileData } from '../data.js';

export function renderAbout() {
    const descriptionText = document.querySelector('.description-text p');
    if (descriptionText) {
        descriptionText.innerHTML = `${profileData.executiveSummary}<br><br><strong>Interests:</strong><br>` + 
        profileData.interests.map(i => `• ${i}`).join('<br>');
    }

    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
        timelineContainer.innerHTML = `
            <div class="timeline-item">
                <div class="timeline-icon"><i class="fas fa-briefcase"></i></div>
                <div class="timeline-content">
                    <h4>${profileData.employment[0].role}</h4>
                    <p>${profileData.employment[0].company}</p>
                    <span>${profileData.employment[0].status} (${profileData.employment[0].ctc})</span>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-icon"><i class="fas fa-graduation-cap"></i></div>
                <div class="timeline-content">
                    <h4>${profileData.background.degree}</h4>
                    <p>${profileData.background.institution}</p>
                    <span>Focus: ${profileData.background.focusAreas.slice(0, 2).join(', ')}</span>
                </div>
            </div>
        `;
    }
}
