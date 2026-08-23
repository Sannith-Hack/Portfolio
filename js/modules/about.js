import { profileData } from '../data.js';

export function renderAbout() {
    const descriptionText = document.querySelector('.description-text');
    if (descriptionText) {
        const languagesHtml = (profileData.languages || []).map(lang => `
            <div class="skill-item" style="padding: 6px 12px; border-radius: 8px;">
                <span style="font-size: 1rem;">${lang.flag}</span>
                <div class="skill-info">
                    <span class="skill-name" style="font-weight: 700;">${lang.name}</span>
                    <span class="skill-level" style="color: var(--accent-cyan); font-weight: 600;">${lang.proficiency}</span>
                </div>
            </div>
        `).join('');

        descriptionText.innerHTML = `
            <div class="bio-statement">
                <p>${profileData.executiveSummary}</p>
            </div>
            <div class="placement-banner">
                <div class="placement-icon"><i class="fas fa-briefcase"></i></div>
                <div class="placement-info">
                    <span class="placement-badge">Internship & Training Offer</span>
                    <h4>${profileData.placement.role} @ ${profileData.placement.company}</h4>
                    <p><strong>Package:</strong> ${profileData.placement.ctc} • <em>${profileData.placement.status}</em></p>
                    <small>${profileData.placement.highlights}</small>
                    ${profileData.placement.documentUrl ? `
                        <div style="margin-top: 8px;">
                            <a href="${profileData.placement.documentUrl}" target="_blank" rel="noopener noreferrer" class="mini-btn primary" style="font-size: 0.78rem; padding: 4px 12px; border-radius: 20px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                                <i class="fas fa-file-pdf"></i> View Offer Letter (PDF)
                            </a>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="interests-container">
                <h5><i class="fas fa-terminal"></i> Engineering Passions & Focus Areas:</h5>
                <ul class="interests-list">
                    ${profileData.interests.map(item => `<li><i class="fas fa-check-circle"></i> <span>${item}</span></li>`).join('')}
                </ul>
            </div>
            <div class="languages-container" style="margin-top: 4px;">
                <h5><i class="fas fa-language"></i> Known Languages:</h5>
                <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                    ${languagesHtml}
                </div>
            </div>
        `;
    }

    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer && profileData.education) {
        timelineContainer.innerHTML = profileData.education.map(item => `
            <div class="timeline-item">
                <div class="timeline-icon"><i class="${item.icon}"></i></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h4>${item.degree}</h4>
                        <span class="timeline-badge">${item.badge}</span>
                    </div>
                    <p>${item.institution}</p>
                    <span class="timeline-period"><i class="far fa-calendar-alt"></i> ${item.period}</span>
                </div>
            </div>
        `).join('');
    }
}
