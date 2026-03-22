// Funções consistem em blocos encapsulados de código, desenvolvidas afim de tornar o código mais limpo, reutilizável e eficiente
// Em uma função os parâmetros são passados dentro dos parênteses, permitindo que a função lide com diferentes dados

// function Saudacao(nome) {
//     console.log(`Olá ${nome}!, tudo bem?`)
// }

// Saudacao('Gustavo')

// function listarNomes(nomePrincipal, ...outrosNomes) {
//     console.log(`Nome Principal: ${nomePrincipal}`);
//     console.log(`Outros Nomes: ${outrosNomes.join(', ')}`);
// }

// listarNomes('Gustavo', 'Bruna', 'Sofia');

// function calcularDesconto(preco, desconto) {
//     console.log(`O valor final do produto é: ${preco - (desconto / 100) * preco}`)
// }

// calcularDesconto(16, 5)

// function calcularSoma(...numeros) {
//     let soma = 0
//     for(const numero of numeros) {
//         soma +=  numero;
//     }
//     return soma
// }

// console.log(calcularSoma(35, 35))

// function greet(name) {
//     console.log(`Olá ${name}!, tudo bem?`)
// }

// greet('Gustavo')
// greet('Sofia')
// greet('Pedro')
// greet('Julia')

// let names = []

// names.push('Gustavo', 'Sofia', 'Pedro', 'Julia');

// console.log(names);

// Array.isArray(names)

// const multiplicar = (a, b) => a * b;

// console.log(multiplicar(4, 5));

function saudacao(nome) {
     return `Olá, ${nome}!`;
}
console.log(saudacao("Ana"));
