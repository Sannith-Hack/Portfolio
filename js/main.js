import { renderProjects } from './modules/projects.js';
import { renderSkills } from './modules/skills.js';
import { renderAbout } from './modules/about.js';
import { renderCertifications } from './modules/certifications.js';
import { 
    initNavigation, 
    initSQLPlayground, 
    initSystemStatus, 
    initLabMicroTools,
    initTerminal, 
    initChart 
} from './modules/advanced.js';

document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic data
    renderProjects();
    renderSkills();
    renderAbout();
    renderCertifications();
    
    // Initialize advanced interactions
    initNavigation();
    initSQLPlayground();
    initSystemStatus();
    initLabMicroTools();
    initTerminal();
    initChart();

    // Initialize or Refresh AOS after dynamic rendering
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 40
        });
        AOS.refresh();
    }
});

// Refresh AOS once images and external assets finish loading
window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});
