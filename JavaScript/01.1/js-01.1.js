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

// FUNÇÂO COM PARÂMETROS
const user = "Miguel Santos";

function userMessage(user) {
    // ESSA FUNÇÃO RECEBE UM PARÂMETRO
    document.write(`<h3>O que deseja fazer hoje, ${user}?</h3>`);
    // ${} -> Template Strings / Literal Strings
    // Usado para inserir váriaveis dentro de STRINGS
}

userMessage(user); // ARGUMENTO
