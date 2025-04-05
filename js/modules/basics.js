// Módulo de JavaScript Básico
class BasicsModule {
    constructor() {
      this.init();
    }
  
    init() {
      console.log('Módulo Básico inicializado');
      this.setupExamples();
      this.setupInteractiveConsole();
    }
  
    setupExamples() {
      // Exemplo de variáveis
      this.exampleVariables();
  
      // Exemplo de tipos de dados
      this.exampleDataTypes();
  
      // Exemplo de operadores
      this.exampleOperators();
  
      // Exemplo de estruturas de controle
      this.exampleControlStructures();
    }
  
    exampleVariables() {
      console.log('\n=== Variáveis ===');
      console.log('var: escopo de função (hoisting)');
      console.log('let: escopo de bloco');
      console.log('const: escopo de bloco (valor constante)');
      
      // Demonstração prática
      if (true) {
        var varVariable = 'var';
        let letVariable = 'let';
        const constVariable = 'const';
      }
      
      console.log('varVariable fora do bloco:', varVariable); // Acessível
      // console.log(letVariable); // ReferenceError
      // console.log(constVariable); // ReferenceError
    }
  
    exampleDataTypes() {
      console.log('\n=== Tipos de Dados ===');
      const types = {
        string: 'Texto',
        number: 42,
        boolean: true,
        array: [1, 2, 3],
        object: { chave: 'valor' },
        function: function() { return 'Função'; },
        nullValue: null,
        undefinedValue: undefined
      };
      
      console.table(types);
    }
  
    exampleOperators() {
      console.log('\n=== Operadores ===');
      
      // Aritméticos
      console.log('5 + 3 =', 5 + 3);
      console.log('5 - 3 =', 5 - 3);
      console.log('5 * 3 =', 5 * 3);
      console.log('5 / 3 =', 5 / 3);
      console.log('5 % 3 =', 5 % 3);
      console.log('5 ** 3 =', 5 ** 3);
      
      // Comparação
      console.log('\n5 == "5"', 5 == '5'); // true (coerção de tipo)
      console.log('5 === "5"', 5 === '5'); // false
      console.log('5 != "5"', 5 != '5'); // false
      console.log('5 !== "5"', 5 !== '5'); // true
    }
  
    exampleControlStructures() {
      console.log('\n=== Estruturas de Controle ===');
      
      // If-else
      const age = 18;
      if (age >= 18) {
        console.log('Maior de idade');
      } else {
        console.log('Menor de idade');
      }
      
      // Switch
      const day = 3;
      switch (day) {
        case 1: console.log('Domingo'); break;
        case 2: console.log('Segunda'); break;
        case 3: console.log('Terça'); break;
        default: console.log('Dia inválido');
      }
      
      // Loops
      console.log('\nLoop for:');
      for (let i = 0; i < 3; i++) {
        console.log('Iteração:', i);
      }
      
      console.log('\nLoop while:');
      let j = 0;
      while (j < 3) {
        console.log('Iteração:', j);
        j++;
      }
    }
  
    setupInteractiveConsole() {
      const consoleElement = document.getElementById('interactive-console');
      if (!consoleElement) return;
      
      consoleElement.innerHTML = `
        <div class="console-header">
          <h4>Console Interativo</h4>
          <button id="run-basics" class="btn btn-sm btn-primary">Executar Exemplos</button>
        </div>
        <div id="console-output" class="console-output"></div>
      `;
      
      document.getElementById('run-basics').addEventListener('click', () => {
        const output = document.getElementById('console-output');
        output.innerHTML = `
          <p><strong>Variáveis:</strong> var, let e const demonstradas no console</p>
          <p><strong>Tipos de Dados:</strong> Ver tabela no console</p>
          <p><strong>Operadores:</strong> Resultados no console</p>
          <p><strong>Estruturas de Controle:</strong> if/else, switch e loops no console</p>
          <p class="text-muted">Abra o console do navegador (F12) para ver os exemplos</p>
        `;
        
        // Roda todos os exemplos novamente
        this.exampleVariables();
        this.exampleDataTypes();
        this.exampleOperators();
        this.exampleControlStructures();
      });
    }
  }
  
  // Inicializa quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    new BasicsModule();
  });