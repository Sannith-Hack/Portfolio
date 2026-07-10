import { renderProjects } from './modules/projects.js';
import { renderSkills } from './modules/skills.js';
import { renderAbout } from './modules/about.js';
import { renderCertifications } from './modules/certifications.js';
import { 
    initNavigation, 
    initSQLPlayground, 
    initSystemStatus, 
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
    initTerminal();
    initChart();
});
