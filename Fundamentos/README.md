# Exercícios de JavaScript

Este documento apresenta exemplos básicos de utilização de JavaScript, abordando variáveis, operadores, tipos de dados, condicionais e métodos de manipulação de strings.

---

## 1. Tipos de Variáveis

```javascript
const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean
```

---

## 2. Concatenação e Template Strings

```javascript
const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);
```

---

## 3. Combinação de Número e String

```javascript
const numero = 42;
const string = 'universo';

const texto = `${numero} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto);
```

---

## 4. Reatribuição de Variáveis

```javascript
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel = 'Novo valor';
console.log(minhaVariavel);
```

---

## 5. Diferenças entre `var` e `let`

```javascript
var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // Fora do bloco
    console.log(dentro); // Dentro do bloco
}

console.log(fora); // Fora do bloco
console.log(dentro); // Dentro do bloco

/////////////////////

let foraLet = 'Fora do bloco';

if (true) {
    let dentroLet = 'Dentro do bloco';
    console.log(foraLet); // Fora do bloco
    console.log(dentroLet); // Dentro do bloco
}

console.log(foraLet); // Fora do bloco
console.log(dentroLet); // Erro: dentroLet is not defined
```

---

## 6. Estruturas Condicionais com Booleanos

```javascript
const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}
```

---

## 7. Operações Bancárias

```javascript
let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log('Saldo:', saldo);
console.log('Saldo após saque:', operacao);
```

---

## 8. Verificação de Par ou Ímpar

```javascript
const numero = 7;
const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(resultado); // Ímpar
```

---

## 9. Verificação de Login e Permissão de Administrador

```javascript
const logado = true;
const admin = false;

const resultado = logado && admin;

console.log('Administrador logado no sistema:', resultado);
```

---

## 10. Operador OR

```javascript
const condicao1 = true;
const condicao2 = false;

const resultado = condicao1 || condicao2;

console.log('Resultado do operador OR:', resultado); // Saída: true
```

---

## 11. Verificação de Idade para Compra de Ingressos

```javascript
const idadeMinima = 18;
const idadeUsuario = 21;

if (idadeUsuario >= idadeMinima) {
    console.log('Você pode comprar o ingresso. Bom show!');
} else {
    console.log('Você não tem idade suficiente para comprar o ingresso.');
}
```

---

## 12. Manipulação de Strings

```javascript
const frase = 'Esta é uma frase de exemplo.';
console.log(frase.length); // Comprimento da frase
console.log(frase.toUpperCase()); // Frase em maiúsculas
```

---

## 13. Variáveis `null` e `undefined`

```javascript
const valorNull = null;
let valorUndefined;

console.log('Valor de valorNull:', valorNull); // null
console.log('Valor de valorUndefined:', valorUndefined); // undefined
```

---

## 14. Combinação de Diferentes Tipos de Dados

```javascript
const numero = 42;
const texto = ' é a resposta.';
const booleano = true;

const combinacao = `${numero} ${texto} É verdade? ${booleano}`;
console.log(combinacao);
```

---

## 15. Conversão entre Tipos de Dados

```javascript
const numero = 42;
const texto = '10';

const numeroConvertido = String(numero);
const textoConvertido = Number(texto);

console.log('Tipo de dado após conversão de número para string:', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número:', typeof textoConvertido);
```

---

## 16. Métodos de Manipulação de Strings

```javascript
const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);
