// Módulo de Funções
class FunctionsModule {
    constructor() {
      this.init();
    }
  
    init() {
      console.log('Módulo de Funções inicializado');
      this.setupExamples();
      this.setupFunctionExercises();
    }
  
    setupExamples() {
      // Function Declaration
      console.log('\nFunction Declaration:');
      console.log(sayHello('João')); // Chamada antes da declaração
      
      function sayHello(name) {
        return `Olá, ${name}!`;
      }
      
      // Function Expression
      console.log('\nFunction Expression:');
      const sayGoodbye = function(name) {
        return `Tchau, ${name}!`;
      };
      console.log(sayGoodbye('Maria'));
      
      // Arrow Function
      console.log('\nArrow Function:');
      const double = num => num * 2;
      console.log('O dobro de 5 é:', double(5));
      
      // IIFE
      console.log('\nIIFE (Immediately Invoked Function Expression):');
      (function() {
        console.log('Esta função executa imediatamente!');
      })();
      
      // Higher-Order Functions
      console.log('\nHigher-Order Functions:');
      const numbers = [1, 2, 3, 4, 5];
      const squared = numbers.map(num => num * num);
      console.log('Números ao quadrado:', squared);
    }
  
    setupFunctionExercises() {
      const exercisesContainer = document.getElementById('function-exercises');
      if (!exercisesContainer) return;
      
      exercisesContainer.innerHTML = `
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Exercício 1: Calculadora Simples</h5>
            <div class="mb-3">
              <input type="number" id="num1" class="form-control mb-2" placeholder="Número 1">
              <input type="number" id="num2" class="form-control mb-2" placeholder="Número 2">
              <div class="btn-group">
                <button class="btn btn-outline-primary operation-btn" data-op="add">+</button>
                <button class="btn btn-outline-primary operation-btn" data-op="sub">-</button>
                <button class="btn btn-outline-primary operation-btn" data-op="mul">×</button>
                <button class="btn btn-outline-primary operation-btn" data-op="div">÷</button>
              </div>
            </div>
            <div id="calculator-result" class="alert alert-info"></div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Exercício 2: Contador de Letras</h5>
            <div class="mb-3">
              <input type="text" id="text-input" class="form-control mb-2" placeholder="Digite um texto">
              <button id="count-letters" class="btn btn-primary">Contar Letras</button>
            </div>
            <div id="letter-count-result" class="alert alert-info"></div>
          </div>
        </div>
      `;
      
      // Calculadora
      document.querySelectorAll('.operation-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const num1 = parseFloat(document.getElementById('num1').value);
          const num2 = parseFloat(document.getElementById('num2').value);
          const operation = btn.dataset.op;
          let result;
          
          switch (operation) {
            case 'add': result = num1 + num2; break;
            case 'sub': result = num1 - num2; break;
            case 'mul': result = num1 * num2; break;
            case 'div': result = num1 / num2; break;
            default: result = 'Operação inválida';
          }
          
          document.getElementById('calculator-result').textContent = `Resultado: ${result}`;
        });
      });
      
      // Contador de letras
      document.getElementById('count-letters').addEventListener('click', () => {
        const text = document.getElementById('text-input').value;
        const count = text.length;
        document.getElementById('letter-count-result').textContent = 
          `O texto possui ${count} ${count === 1 ? 'letra' : 'letras'}`;
      });
    }
  }
  
  // Inicializa quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    new FunctionsModule();
  });