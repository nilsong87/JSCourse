// Configuração para efeito de partículas usando particles.js

class ParticlesManager {
    constructor() {
        this.defaultConfig = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#f0db4f"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#f0db4f",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        };
    }

    init(selector, config) {
        // Carrega a biblioteca particles.js dinamicamente
        if (typeof particlesJS === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.onload = () => this.setupParticles(selector, config);
            document.head.appendChild(script);
        } else {
            this.setupParticles(selector, config);
        }
    }

    setupParticles(selector, config) {
        const finalConfig = config || this.defaultConfig;
        particlesJS(selector, finalConfig);
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const particles = new ParticlesManager();
    particles.init('.hero-section', {
        particles: {
            color: {
                value: "#f0db4f"
            },
            line_linked: {
                color: "#f0db4f"
            }
        }
    });
});