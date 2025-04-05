// Módulo de Programação Orientada a Objetos
class OOPModule {
    constructor() {
      this.init();
    }
  
    init() {
      console.log('Módulo OOP inicializado');
      this.setupExamples();
      this.setupShapeDemo();
    }
  
    setupExamples() {
      // Objetos literais
      console.log('\n=== Objeto Literal ===');
      const person = {
        name: 'João',
        age: 30,
        greet() {
          return `Olá, meu nome é ${this.name}`;
        }
      };
      console.log(person.greet());
      
      // Factory Function
      console.log('\n=== Factory Function ===');
      function createPerson(name, age) {
        return {
          name,
          age,
          greet() {
            return `Olá, eu sou ${this.name} e tenho ${this.age} anos`;
          }
        };
      }
      const person1 = createPerson('Maria', 25);
      console.log(person1.greet());
      
      // Constructor Function
      console.log('\n=== Constructor Function ===');
      function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function() {
          return `Olá, eu sou ${this.name}`;
        };
      }
      const person2 = new Person('Carlos', 40);
      console.log(person2.greet());
      
      // Classes
      console.log('\n=== Classes ===');
      class Animal {
        constructor(name, sound) {
          this.name = name;
          this.sound = sound;
        }
        
        makeSound() {
          return `${this.name} diz: ${this.sound}!`;
        }
      }
      
      const dog = new Animal('Cachorro', 'Au au');
      console.log(dog.makeSound());
      
      // Herança
      console.log('\n=== Herança ===');
      class Cat extends Animal {
        constructor(name) {
          super(name, 'Miau');
        }
        
        purr() {
          return `${this.name} está ronronando...`;
        }
      }
      
      const cat = new Cat('Gato');
      console.log(cat.makeSound());
      console.log(cat.purr());
    }
  
    setupShapeDemo() {
      const demoContainer = document.getElementById('oop-demo');
      if (!demoContainer) return;
      
      demoContainer.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Demonstração de Formas Geométricas</h5>
            <div class="mb-3">
              <select id="shape-type" class="form-select mb-3">
                <option value="circle">Círculo</option>
                <option value="rectangle">Retângulo</option>
                <option value="triangle">Triângulo</option>
              </select>
              
              <div id="shape-inputs"></div>
              
              <button id="calculate-shape" class="btn btn-primary mt-3">Calcular</button>
            </div>
            <div id="shape-result" class="alert alert-info"></div>
          </div>
        </div>
      `;
      
      // Atualiza inputs baseado na forma selecionada
      document.getElementById('shape-type').addEventListener('change', (e) => {
        const shapeType = e.target.value;
        let inputsHTML = '';
        
        switch (shapeType) {
          case 'circle':
            inputsHTML = `
              <label for="radius" class="form-label">Raio</label>
              <input type="number" id="radius" class="form-control" placeholder="Digite o raio">
            `;
            break;
          case 'rectangle':
            inputsHTML = `
              <label for="width" class="form-label">Largura</label>
              <input type="number" id="width" class="form-control mb-2" placeholder="Digite a largura">
              <label for="height" class="form-label">Altura</label>
              <input type="number" id="height" class="form-control" placeholder="Digite a altura">
            `;
            break;
          case 'triangle':
            inputsHTML = `
              <label for="base" class="form-label">Base</label>
              <input type="number" id="base" class="form-control mb-2" placeholder="Digite a base">
              <label for="height" class="form-label">Altura</label>
              <input type="number" id="height" class="form-control" placeholder="Digite a altura">
            `;
            break;
        }
        
        document.getElementById('shape-inputs').innerHTML = inputsHTML;
      });
      
      // Classe base Shape
      class Shape {
        constructor(type) {
          this.type = type;
        }
        
        getInfo() {
          return `Forma: ${this.type}`;
        }
      }
      
      // Subclasses
      class Circle extends Shape {
        constructor(radius) {
          super('Círculo');
          this.radius = radius;
        }
        
        calculateArea() {
          return Math.PI * this.radius * this.radius;
        }
      }
      
      class Rectangle extends Shape {
        constructor(width, height) {
          super('Retângulo');
          this.width = width;
          this.height = height;
        }
        
        calculateArea() {
          return this.width * this.height;
        }
      }
      
      class Triangle extends Shape {
        constructor(base, height) {
          super('Triângulo');
          this.base = base;
          this.height = height;
        }
        
        calculateArea() {
          return (this.base * this.height) / 2;
        }
      }
      
      // Calcula a forma selecionada
      document.getElementById('calculate-shape').addEventListener('click', () => {
        const shapeType = document.getElementById('shape-type').value;
        let shape;
        
        switch (shapeType) {
          case 'circle':
            const radius = parseFloat(document.getElementById('radius').value);
            shape = new Circle(radius);
            break;
          case 'rectangle':
            const width = parseFloat(document.getElementById('width').value);
            const height = parseFloat(document.getElementById('height').value);
            shape = new Rectangle(width, height);
            break;
          case 'triangle':
            const base = parseFloat(document.getElementById('base').value);
            const triHeight = parseFloat(document.getElementById('height').value);
            shape = new Triangle(base, triHeight);
            break;
        }
        
        if (shape) {
          const area = shape.calculateArea();
          document.getElementById('shape-result').innerHTML = `
            <p><strong>${shape.getInfo()}</strong></p>
            <p>Área: ${area.toFixed(2)}</p>
          `;
        }
      });
      
      // Dispara o evento change para carregar os inputs iniciais
      document.getElementById('shape-type').dispatchEvent(new Event('change'));
    }
  }
  
  // Inicializa quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    new OOPModule();
  });