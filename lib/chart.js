// Configuração básica para gráficos usando Chart.js

class ChartManager {
    constructor() {
        this.charts = {};
    }

    init() {
        // Carrega a biblioteca Chart.js dinamicamente
        if (typeof Chart === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
            script.onload = () => this.setupDemoCharts();
            document.head.appendChild(script);
        } else {
            this.setupDemoCharts();
        }
    }

    setupDemoCharts() {
        // Gráfico de exemplo para o módulo de projetos
        const ctx = document.getElementById('project-chart');
        if (ctx) {
            this.charts.projectChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Calculadora', 'To-Do List', 'App Clima'],
                    datasets: [{
                        label: 'Complexidade',
                        data: [30, 60, 90],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        // Gráfico de exemplo para o módulo de async
        const ctx2 = document.getElementById('performance-chart');
        if (ctx2) {
            this.charts.performanceChart = new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: ['Callbacks', 'Promises', 'Async/Await'],
                    datasets: [{
                        label: 'Legibilidade',
                        data: [40, 70, 90],
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                        fill: false
                    }, {
                        label: 'Manutenção',
                        data: [30, 75, 95],
                        borderColor: 'rgb(255, 99, 132)',
                        tension: 0.1,
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }
    }
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ChartManager().init();
});