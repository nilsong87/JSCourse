// Módulo de Projetos Práticos
class ProjectsModule {
    constructor() {
      this.projects = [
        {
          id: 'calculator',
          title: 'Calculadora',
          description: 'Calculadora completa com operações básicas e memória.',
          level: 'Iniciante',
          tags: ['DOM', 'Eventos', 'Funções'],
          image: 'https://i.ytimg.com/vi/30AWy90GMJc/hq720.jpg',
          link: 'examples/calculator/',
          codeLink: 'https://github.com/seu-usuario/curso-javascript/tree/main/examples/calculator'
        },
        {
          id: 'todo-app',
          title: 'Lista de Tarefas',
          description: 'Aplicativo para gerenciar tarefas com armazenamento local.',
          level: 'Intermediário',
          tags: ['LocalStorage', 'CRUD', 'Event Delegation'],
          image: 'https://i.ytimg.com/vi/-yu0nBthAdo/maxresdefault.jpg',
          link: 'examples/todo-app/',
          codeLink: 'https://github.com/seu-usuario/curso-javascript/tree/main/examples/todo-app'
        },
        {
          id: 'weather-app',
          title: 'App de Clima',
          description: 'Aplicativo que mostra previsão do tempo usando API pública.',
          level: 'Avançado',
          tags: ['Fetch API', 'Async/Await', 'Geolocation'],
          image: 'https://www.brasilcode.com.br/wp-content/uploads/2024/09/aplicativo-de-clima.jpg',
          link: 'examples/weather-app/',
          codeLink: 'https://github.com/seu-usuario/curso-javascript/tree/main/examples/weather-app'
        }
      ];
      
      this.init();
    }
  
    init() {
      console.log('Módulo de Projetos inicializado');
      this.renderProjects();
      this.setupFilterButtons();
      this.setupProjectDetails();
    }
  
    renderProjects(filter = 'all') {
      const container = document.getElementById('projects-container');
      if (!container) return;
      
      let filteredProjects = this.projects;
      
      if (filter !== 'all') {
        filteredProjects = this.projects.filter(project => 
          project.tags.includes(filter) || project.level.toLowerCase().includes(filter)
        );
      }
      
      if (filteredProjects.length === 0) {
        container.innerHTML = `
          <div class="col-12 text-center py-5">
            <h4>Nenhum projeto encontrado</h4>
            <p>Tente alterar os filtros de busca</p>
          </div>
        `;
        return;
      }
      
      container.innerHTML = filteredProjects.map(project => `
        <div class="col-md-4 mb-4">
          <div class="card project-card h-100" data-project="${project.id}">
            <div class="position-relative">
              <img src="${project.image}" class="card-img-top" alt="${project.title}">
              <span class="position-absolute top-0 end-0 badge 
                ${project.level === 'Iniciante' ? 'bg-success' : 
                  project.level === 'Intermediário' ? 'bg-warning' : 'bg-danger'}">
                ${project.level}
              </span>
            </div>
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <div class="mb-3">
                ${project.tags.map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}
              </div>
            </div>
            <div class="card-footer bg-white">
              <a href="${project.link}" class="btn btn-primary">Ver Projeto</a>
              <a href="${project.codeLink}" target="_blank" class="btn btn-outline-secondary ms-2">
                <i class="fas fa-code"></i> Código
              </a>
            </div>
          </div>
        </div>
      `).join('');
    }
  
    setupFilterButtons() {
      const filterButtons = document.querySelectorAll('[data-filter]');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');
          // Filter projects
          this.renderProjects(button.dataset.filter);
        });
      });
    }
  
    setupProjectDetails() {
      document.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if (card) {
          const projectId = card.dataset.project;
          const project = this.projects.find(p => p.id === projectId);
          this.showProjectModal(project);
        }
      });
    }
  
    showProjectModal(project) {
      // Cria o modal dinamicamente
      const modalHTML = `
        <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${project.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <img src="${project.image}" class="img-fluid rounded mb-3" alt="${project.title}">
                    <p>${project.description}</p>
                    <h6>Tecnologias utilizadas:</h6>
                    <div class="mb-3">
                      ${project.tags.map(tag => `<span class="badge bg-primary me-1">${tag}</span>`).join('')}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h6>Detalhes do Projeto:</h6>
                    <ul>
                      <li><strong>Nível:</strong> ${project.level}</li>
                      <li><strong>Conceitos-chave:</strong> ${project.tags.join(', ')}</li>
                      <li><strong>Pré-requisitos:</strong> ${this.getPrerequisites(project.level)}</li>
                    </ul>
                    <hr>
                    <h6>O que você vai aprender:</h6>
                    <ul>
                      ${this.getLearningPoints(project.id).map(point => `<li>${point}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <a href="${project.link}" class="btn btn-primary">
                  <i class="fas fa-external-link-alt me-1"></i> Abrir Projeto
                </a>
                <a href="${project.codeLink}" target="_blank" class="btn btn-outline-primary">
                  <i class="fab fa-github me-1"></i> Ver Código
                </a>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Adiciona o modal ao DOM
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      
      // Mostra o modal
      const modal = new bootstrap.Modal(document.getElementById('projectModal'));
      modal.show();
      
      // Remove o modal do DOM quando fechado
      document.getElementById('projectModal').addEventListener('hidden.bs.modal', () => {
        document.getElementById('projectModal').remove();
      });
    }
  
    getPrerequisites(level) {
      const prerequisites = {
        'Iniciante': 'Conhecimentos básicos de HTML, CSS e JavaScript',
        'Intermediário': 'DOM Manipulation, Eventos e Funções em JavaScript',
        'Avançado': 'Async/Await, Fetch API e manipulação de dados JSON'
      };
      return prerequisites[level] || 'Conhecimentos intermediários de JavaScript';
    }
  
    getLearningPoints(projectId) {
      const points = {
        'calculator': [
          'Manipulação do DOM para criar a interface',
          'Lógica para operações matemáticas',
          'Tratamento de eventos de clique'
        ],
        'todo-app': [
          'CRUD (Create, Read, Update, Delete)',
          'Armazenamento local com localStorage',
          'Manipulação de arrays e objetos',
          'Event delegation para elementos dinâmicos'
        ],
        'weather-app': [
          'Consumo de API REST com Fetch',
          'Trabalho com async/await',
          'Geolocalização do navegador',
          'Manipulação de dados JSON'
        ]
      };
      return points[projectId] || [
        'Práticas essenciais de JavaScript',
        'Resolução de problemas reais',
        'Boas práticas de desenvolvimento'
      ];
    }
  
    // Método para projetos sugeridos
    getSuggestedProjects(skillLevel) {
      const suggestions = {
        'beginner': [
          'Relógio Digital',
          'Contador de Caracteres',
          'Quiz Simples',
          'Conversor de Moedas',
          'Gerador de Citações Aleatórias'
        ],
        'intermediate': [
          'Galeria de Imagens',
          'App de Notas',
          'Player de Música Simples',
          'Lista de Compras',
          'Jogo da Velha'
        ],
        'advanced': [
          'Chat em Tempo Real (com Firebase)',
          'Dashboard com Gráficos',
          'Clone do Trello Simples',
          'App de Finanças Pessoais',
          'Jogo de Memória'
        ],
        'apis': [
          'Buscador de Filmes (OMDb API)',
          'Visualizador de Repositórios GitHub',
          'App de Notícias (News API)',
          'Mapa com Localização (Google Maps API)',
          'App de Receitas (Edamam API)'
        ]
      };
      
      return suggestions[skillLevel] || [];
    }
  }
  
  // Inicializa quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    new ProjectsModule();
  });