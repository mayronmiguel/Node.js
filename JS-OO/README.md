# Programação Orientada a Objetos em JavaScript

## Motivação e Base Conceitual
A Programação Orientada a Objetos (POO) tem como objetivo principal abstrair modelos a partir de conceitos da vida real, estruturando a forma como um programa é desenvolvido. Com isso, facilita-se a organização do código, promovendo reutilização e manutenção eficiente.

## Objeto Literal
Um objeto literal é um tipo de dado composto por pares chave/valor. Suas propriedades podem ser:
- **Dados primitivos** (números, strings, booleanos, etc.).
- **Arrays e outros objetos**.
- **Funções** que atribuem comportamento ao objeto (também chamados de métodos).

Exemplo de objeto literal em JavaScript:
```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  falar: function() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
};
```

## Modelos (Classes) e Instâncias
Classes servem como modelos para criar objetos (instâncias). Isso ajuda a reaproveitar código e manter uma estrutura consistente para os objetos.

Exemplo de classe em JavaScript:
```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const joao = new Pessoa("João", 30);
joao.falar();
```

## UML - Linguagem de Modelagem Unificada
A UML fornece padrões para definir classes, métodos e seus relacionamentos dentro de um sistema, facilitando a organização e visualização da estrutura de um software.

## A Palavra-chave `this`
No JavaScript, `this` representa o contexto onde um método ou função está sendo executado. Seu valor pode ser alterado com `bind()`, `call()` e `apply()`.

Exemplo:
```javascript
function mostrarNome() {
  console.log(this.nome);
}

const pessoa = { nome: "Ana" };
mostrarNome.call(pessoa); // "Ana"
```

## Modelo de Protótipo
O JavaScript trabalha com **herança prototipal**, onde objetos podem herdar propriedades e métodos de outros objetos por meio da propriedade `prototype`.

Exemplo:
```javascript
function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.fazerSom = function() {
  console.log("Som genérico");
};

const cachorro = new Animal("Cachorro");
cachorro.fazerSom();
```

## `prototype` e `__proto__`
- `prototype`: propriedade de funções construtoras.
- `__proto__`: referência ao protótipo do objeto instanciado.

Exemplo:
```javascript
console.log(cachorro.__proto__ === Animal.prototype); // true
```

## Funções Construtoras e `new`
Funções construtoras criam objetos com `new`, simulando o conceito de classes.
```javascript
function Carro(marca) {
  this.marca = marca;
}

const fusca = new Carro("Volkswagen");
console.log(fusca.marca); // "Volkswagen"
```

## Classes e Instâncias
Classes são um padrão essencial para POO. Elas permitem criar objetos padronizados.
```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
const maria = new Pessoa("Maria");
console.log(maria.nome); // "Maria"
```

## Subclasses e Herança
Subclasses herdam propriedades e métodos de uma superclasse com `extends` e `super()`.
```javascript
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super("Cachorro");
    this.nome = nome;
  }
}

const rex = new Cachorro("Rex");
console.log(rex.tipo); // "Cachorro"
```

## Encapsulamento
Encapsulamento protege os dados internos do objeto.
```javascript
class ContaBancaria {
  #saldo = 0; // Propriedade privada

  depositar(valor) {
    this.#saldo += valor;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria();
conta.depositar(100);
console.log(conta.verSaldo()); // 100
```

## Polimorfismo
Polimorfismo permite que um método de uma classe seja sobrescrito por uma subclasse.
```javascript
class Animal {
  fazerSom() {
    console.log("Som genérico");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau");
  }
}

const gato = new Gato();
gato.fazerSom(); // "Miau"
```

## Diferença entre Polimorfismo e Herança
- **Herança**: Subclasses herdam de superclasses.
- **Polimorfismo**: Métodos são modificados para se adaptarem ao contexto da subclasse.

## Métodos Estáticos
Métodos estáticos pertencem à classe e não às instâncias.
```javascript
class Matematica {
  static somar(a, b) {
    return a + b;
  }
}

console.log(Matematica.somar(2, 3)); // 5
```

---
Este documento fornece uma visão geral da Programação Orientada a Objetos em JavaScript, cobrindo conceitos essenciais e exemplos práticos. 🚀

