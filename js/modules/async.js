// Async/Await Module
class AsyncModule {
    constructor() {
        this.apiBaseUrl = 'https://jsonplaceholder.typicode.com';
        this.init();
    }
    
    init() {
        console.log('Async Module initialized');
        this.setupExamples();
    }
    
    setupExamples() {
        // Example 1: Basic Fetch
        this.setupFetchExample();
        
        // Example 2: Async/Await
        this.setupAsyncAwaitExample();
        
        // Example 3: Error Handling
        this.setupErrorHandlingExample();
    }
    
    setupFetchExample() {
        const btn = document.getElementById('fetch-example-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                this.fetchPosts()
                    .then(posts => {
                        console.log('Posts fetched:', posts);
                        this.displayResults(posts.slice(0, 5), 'fetch-results');
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });
            });
        }
    }
    
    setupAsyncAwaitExample() {
        const btn = document.getElementById('async-await-btn');
        if (btn) {
            btn.addEventListener('click', async () => {
                try {
                    const posts = await this.fetchPosts();
                    console.log('Posts with async/await:', posts);
                    this.displayResults(posts.slice(0, 5), 'async-results');
                } catch (error) {
                    console.error('Async error:', error);
                }
            });
        }
    }
    
    setupErrorHandlingExample() {
        const btn = document.getElementById('error-handling-btn');
        if (btn) {
            btn.addEventListener('click', async () => {
                try {
                    // Deliberately use wrong URL to trigger error
                    const response = await fetch(`${this.apiBaseUrl}/nonexistent`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('Data:', data);
                } catch (error) {
                    console.error('Error caught:', error);
                    this.displayError(error, 'error-output');
                }
            });
        }
    }
    
    async fetchPosts() {
        const response = await fetch(`${this.apiBaseUrl}/posts`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    
    displayResults(data, elementId) {
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = `
                <h4>Resultados:</h4>
                <ul class="list-group">
                    ${data.map(item => `
                        <li class="list-group-item">
                            <h6>${item.title}</h6>
                            <p>${item.body}</p>
                        </li>
                    `).join('')}
                </ul>
            `;
        }
    }
    
    displayError(error, elementId) {
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = `
                <div class="alert alert-danger">
                    <h4>Erro:</h4>
                    <p>${error.message}</p>
                    <small>Este é um exemplo de tratamento de erros em operações assíncronas.</small>
                </div>
            `;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AsyncModule();
});