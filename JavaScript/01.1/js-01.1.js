/* =============== VARIÁVEIS =============== */

// VÁRIÁVEIS NO JS PODEM SER DECLARADAS DE 3 FORMAS:
// VAR - (Evitar o seu uso, pouco seguro).
// LET - Utilizar quando for necessário reatribuir o valor da variável.
// CONST - Utilizar quando não for necessário reatribuir o valor da variável.

// // DECLARAÇÃO DE VALORES
// var teste1 = "Miguel";
// let teste2 = "Jacupiranga";
// // ATRIBUIÇÃO DE VALORES
// teste1 = "Bergamota";
// teste2 = "Registro";

// let teste3 = "Registro";
// let teste3 = "Jacupiranga";  // ERRO!

// const teste4 = 18;
// test4 = 20;  //ERRO

/* =============== TIPOS DE FUNÇÔES =============== */

// FUNÇÂO SIMPLES
const message = "<h2>Olá! Bem-vindo! Essa é Sua Primeira Função!</h2>";

function showMessage() {
  document.write(message);
}
// Chamando a função
showMessage();

// ===== FUNÇÂO COM PARÂMETROS ===== //
const user = "Miguel Santos";

function userMessage(user) {
  // ESSA FUNÇÃO RECEBE UM PARÂMETRO
  document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
  // ${} -> Template Strings / Literal Strings
  // Usado para inserir váriaveis dentro de STRINGS
}
userMessage(user); // ARGUMENTO

// ===== FUNÇÂO COM MAIS DE UM PARÂMETRO ===== //
const n1 = 10;
const n2 = 12;

function multi(n1, n2) {
  // Essa fução recebe dois parâmetros
  let result = n1 * n2;
  document.write(`<p>A multiplicação (${n1}x${n2}) é igual a ${result}</p>`);
}
multi(n1, n2);
 
// ===== FUNÇÃO COM RETORNO ===== //
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2;
}
document.write(
  `<p>A divisão de ${num1} por ${num2} é igual a ${div(num1, num2)}</p>`
);

// ===== FUNÇÃO COM DIFERENTES RETORNO ===== //
const number = 7;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong>.`)