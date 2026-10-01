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

        const status = profileData.status || {};
        const placement = status.campusPlacement || {};

        descriptionText.innerHTML = `
            <div class="bio-statement">
                <p>${profileData.executiveSummary}</p>
            </div>
            
            <!-- Career Status & Immediate Availability -->
            <div class="placement-banner" style="border-left: 4px solid var(--accent-cyan, #06b6d4);">
                <div class="placement-icon" style="background: rgba(6, 182, 212, 0.15); color: var(--accent-cyan, #06b6d4);">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="placement-info">
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 4px;">
                        <span class="placement-badge" style="background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <span class="pulse-dot" style="display:inline-block; width:7px; height:7px; border-radius:50%; background:#10b981; margin-right:4px;"></span>
                            ${status.availability || 'Actively Seeking Opportunities'}
                        </span>
                        <span style="font-size: 0.8rem; color: var(--text-muted, #94a3b8);">Immediate Availability</span>
                    </div>
                    <h4 style="margin: 4px 0 6px 0; font-size: 1.05rem;">${status.headline || 'Full-Stack, Backend & AI Opportunities'}</h4>
                    <p style="margin: 0 0 6px 0; font-size: 0.88rem; line-height: 1.5;">${status.details}</p>
                    
                    <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed rgba(255, 255, 255, 0.1); font-size: 0.82rem; color: var(--text-muted, #94a3b8);">
                        <i class="fas fa-file-signature" style="color: var(--accent-purple, #a855f7); margin-right: 4px;"></i>
                        <strong>Campus Placement Record:</strong> Selected as <em>${placement.role}</em> at <em>${placement.company}</em> (${placement.type}). ${placement.note}
                    </div>
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
                    ${item.details ? `<p style="font-size: 0.82rem; margin-top: 4px; color: var(--text-muted, #94a3b8);">${item.details}</p>` : ''}
                </div>
            </div>
        `).join('');
    }
}
