// ===== FUNÇÂO ANÔNIMA ===== //
// function(n1, n2) {
// return n1+n2
// }
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado da soma é ${soma(8, 7)}</p>`);
const tipo = typeof soma;
document.write(`${tipo}`);


// ===== ARROW FUNCTION (função anônima) ===== //
// Quando a função possui apenas um parâmetro não é necessário o uso de parênteses
const dobro = x => {
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}.</p>`);


// ===== ARROW FUNCTION com mais de um parâmetros ===== //
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
// Eval no JavaScript é uma função nativa que realiza cálculos apartir de dois números e um operador.
document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}</p>`);


// ===== SIMPLIFICANDO ARROW FUNCTION com um único retorno ===== //
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`); 
document.write(`<p>O resultado da operação é ${calculadora(1100, "+", 1)}</p>`);


// ===== IIFE - FUNÇÃO IMEDIATA (Immediately Invoked Function Expression) ===== //
const iife = (function () {
  document.write("<p>Estou sendo excecutada imediatamente!</p>")
})();


// ===== IIFE COM PARÂMETRO ===== //
const loadUser = (function(user){
  document.write(
    `<p>Carregando as informações do usuário: <strong>${user}</strong>...</p>`
  )
})("Miguel");