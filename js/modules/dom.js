// DOM Manipulation Module
class DOMModule {
    constructor() {
        this.init();
    }
    
    init() {
        console.log('DOM Module initialized');
        this.setupEventDelegation();
        this.setupDynamicComponents();
    }
    
    setupEventDelegation() {
        // Example of event delegation
        document.addEventListener('click', function(e) {
            if (e.target.matches('[data-toggle="modal"]')) {
                const modalId = e.target.getAttribute('data-target');
                const modal = document.querySelector(modalId);
                if (modal) {
                    modal.classList.add('show');
                    modal.style.display = 'block';
                }
            }
            
            if (e.target.matches('.modal .close') || e.target.matches('.modal')) {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                    modal.style.display = 'none';
                }
            }
        });
    }
    
    setupDynamicComponents() {
        // Dynamic tabs example
        document.querySelectorAll('[data-tab-target]').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab-target');
                this.activateTab(tab, target);
            });
        });
    }
    
    activateTab(tab, targetId) {
        // Deactivate all tabs
        document.querySelectorAll('[data-tab-target]').forEach(t => {
            t.classList.remove('active');
        });
        
        // Deactivate all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Activate selected tab
        tab.classList.add('active');
        
        // Activate target content
        const targetContent = document.querySelector(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DOMModule();
});