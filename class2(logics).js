//Logicos básicos
// String = 'Text' | Number = Número
// const number = '5';
// const number2 = 10;
// const resultado = number * number2;
// const resultadoDuplicado = resultado * 2;
// let resultadoTriplicado = resultado * 3;
// resultadoTriplicado = resultadoTriplicado + 5;

// console.log(number + number2);
// console.log(typeof resultadoTriplicado); //ver o tipo da variável
// console.log(typeof(number + number2));

//Exercício
/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.80 de altura 
e seu IMC é 25.92. Ele nasceu em 1980.
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const peso = 84; 
const altura = 1.80;
let imc = peso / (altura * altura);
let nascimento = 1980
let idade = 2024 - nascimento;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg tem ${altura}`);
console.log(`de altura e seu IMC é ${imc}.Ele nasceu em ${nascimento}.`);
