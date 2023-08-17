// Exercício 1

let newArr = [];

newArr.push("elemento1");
newArr.push("elemento2");

console.log(newArr.length); // 2

// Exercício 2

const numeros = [1, 2, 3, 4];

numeros.pop();
console.log(numeros.length);    // 3
numeros.pop();
console.log(numeros.length);    // 2

// Exercício 3

const linguagens = ['javascript', 'python', 'golang', 'java'];

linguagens.shift();
console.log(linguagens.length);
linguagens.shift();
console.log(linguagens.length);

// Exercício 4

const produtos = ['sabao', 'detergente', 'amaciante', 'alvejante', 'sapolio'];

console.log(`Elemento 1: ${produtos.at(0)}`);