// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize modules
    initModules();
    initCodeExample();
    initContactForm();
    setupSmoothScrolling();
    setupActiveNavLinks();
    
    // Load dynamic content
    loadModules();
    
    // Initialize libraries
    if (typeof Particles !== 'undefined') {
        initParticles();
    }
});

function initModules() {
    console.log('Initializing JavaScript course modules...');
    // This would be expanded with actual module initialization
}

function loadModules() {
    const modules = [
        {
            title: "JavaScript Básico",
            description: "Variáveis, tipos de dados, operadores e estruturas de controle.",
            icon: "fas fa-code",
            duration: "2 semanas",
            lessons: 10,
            tags: ["básico", "fundamentos"], // Adicionada vírgula
            link: "basics.html"
        },
        {
            title: "Funções e Escopo",
            description: "Funções, arrow functions, closures e escopo de variáveis.",
            icon: "fas fa-cogs",
            duration: "1 semana",
            lessons: 6,
            tags: ["funções", "escopo"], // Adicionada vírgula
            link: "functions.html"
        },
        {
            title: "DOM Manipulation",
            description: "Trabalhando com a árvore DOM, eventos e manipulação dinâmica.",
            icon: "fas fa-project-diagram",
            duration: "2 semanas",
            lessons: 8,
            tags: ["DOM", "eventos"], // Adicionada vírgula
            link: "dom.html"
        },
        {
            title: "OOP em JavaScript",
            description: "Prototypes, classes, herança e padrões de objetos.",
            icon: "fas fa-object-group",
            duration: "2 semanas",
            lessons: 7,
            tags: ["OOP", "classes"], // Adicionada vírgula
            link: "oop.html"
        },
        {
            title: "Async/Await",
            description: "Promises, async/await, fetch API e chamadas assíncronas.",
            icon: "fas fa-clock",
            duration: "2 semanas",
            lessons: 8,
            tags: ["async", "API"], // Adicionada vírgula
            link: "async.html"
        },
        {
            title: "Projetos Práticos",
            description: "Aplicação dos conceitos em projetos do mundo real.",
            icon: "fas fa-laptop-code",
            duration: "3 semanas",
            lessons: 12,
            tags: ["projetos", "prática"], // Adicionada vírgula
            link: "projects.html"
        }
    ];

    const container = document.getElementById('modules-container');

    if (!container) {
        console.error('O elemento com ID "modules-container" não foi encontrado.');
        return;
    }

    modules.forEach(module => {
        const moduleHTML = `
            <div class="col-md-6 col-lg-4">
                <div class="card module-card h-100" onclick="window.location.href='${module.link}'">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <i class="${module.icon} fa-2x text-warning me-3"></i>
                            <h5 class="card-title mb-0">${module.title}</h5>
                        </div>
                        <p class="card-text">${module.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">
                                <i class="far fa-clock me-1"></i> ${module.duration}
                            </small>
                            <small class="text-muted">
                                <i class="far fa-list-alt me-1"></i> ${module.lessons} aulas
                            </small>
                        </div>
                        <div class="mt-3">
                            ${module.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += moduleHTML;
    });
}

function initCodeExample() {
    const runButton = document.getElementById('run-code');
    const outputDiv = document.getElementById('code-output');
    
    if (runButton && outputDiv) {
        runButton.addEventListener('click', function() {
            // Simulate API call
            outputDiv.classList.remove('d-none');
            outputDiv.innerHTML = '<p>Buscando dados da API...</p>';
            
            setTimeout(() => {
                // Mock response
                const mockData = {
                    userId: 1,
                    id: 1,
                    title: "Exemplo de dados da API",
                    completed: false
                };
                
                outputDiv.innerHTML = `
                    <h5>Resultado da API:</h5>
                    <pre class="bg-dark text-white p-3 rounded">${JSON.stringify(mockData, null, 2)}</pre>
                    <p class="mt-2">Este é um exemplo simulado. Em um projeto real, você estaria conectando-se a uma API real.</p>
                `;
            }, 1500);
        });
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Responderemos para ${email} em breve.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupActiveNavLinks() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

function initParticles() {
    Particles.init({
        selector: '.hero-section',
        color: '#f0db4f',
        connectParticles: true,
        maxParticles: 80,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 40
                }
            },
            {
                breakpoint: 425,
                options: {
                    maxParticles: 20
                }
            }
        ]
    });
}

// Public API for modules
window.JSCourse = {
    utils: {
        loadScript: function(url, callback) {
            const script = document.createElement('script');
            script.src = url;
            script.onload = callback;
            document.body.appendChild(script);
        },
        
        loadStyle: function(url) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        },
        
        debounce: function(func, wait) {
            let timeout;
            return function() {
                const context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(context, args);
                }, wait);
            };
        }
    }
};