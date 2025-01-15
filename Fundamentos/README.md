1) Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

```js
const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean
```

2) Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

```js
const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);
```

3) Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

```js
const numero = 42;
const string = 'universo';

const texto = `${numero} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto);
```

4) Crie uma variável inicializada com um valor de qualter tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

```js
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel= 'Novo valor';
console.log(minhaVariavel);
```

5) Declare uma variável usando `var` fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando `console.log` e analise os resultados. Faça o mesmo processo utilizando `let` e compare com os resultados anteriores.

```js
var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'
```

6) Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

```js
const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}
```

8) Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada `operacao`, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

```js
let saldo = 1000;
const saque = 50;
const deposito = 500;
const operacao = saldo - saque;

console.log('Saldo:', saldo); 
console.log('Saldo após saque:', operacao);
```

9) Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

```js
const numero = 7;
const resultado = numero % 2 === 0 ? 'Par' : 'Ímpar';
console.log(resultado); // Ímpar
```

10) Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

```js
const logado = true;
const admin = false;

const resultado = logado && admin;

console.log('Administrador logado no sistema:', resultado); 
```

11) Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

```js
const condicao1 = true;
const condicao2 = false;

const resultado = condicao1 || condicao2;

console.log('Resultado do operador OR:', resultado); // Saída: true
```

12) Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

```js
const idadeMinima = 18;
const idadeUsuario = 21;

if (idadeUsuario >= idadeMinima) {
    console.log('Você pode comprar o ingresso. Bom show!');
} else {
    console.log('Você não tem idade suficiente para comprar o ingresso.');
}
```

13) Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.

```js
const frase = 'Esta é uma frase de exemplo.';
console.log(frase.length); // Comprimento da frase
console.log(frase.toUpperCase()); // Frase em constras maiúsculas
```

14) Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

```js
const valorNull = null;
let valorUndefined;

console.log('Valor de valorNull:', valorNull); // Saída: null
console.log('Valor de valorUndefined:', valorUndefined); // Saída: undefined
```

15) Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

```js
const numero = 42;
const texto = ' é a resposta.';
const booleano = true;

const combinacao = `${numero} ${texto} É verdade? ${booleano}`;
console.log(combinacao);
```

16) Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

```js
const numero = 42;
const texto = '10';

const numeroConvertido = String(numero);
const textoConvertido = Number(texto);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);
```

17) Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

```js
const texto = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);
```
