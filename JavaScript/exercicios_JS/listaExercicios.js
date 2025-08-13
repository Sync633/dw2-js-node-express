// ===== Tarefa 01 ===== //
const nome = "Miguel";

function saudacaoPersonalizada(nome) {
    document.write(`<p>Olá, ${nome}! Bem vindo(a) à Calculadora Universal!</p>`)
}

saudacaoPersonalizada(nome);


// ===== Tarefa 02 ===== //
function operacaoMatematica(num1, operador, num2) {
    document.write(`<p>O resultado de ${num1}${operador}${num2} é igual a ${eval(`${num1}${operador}${num2}`)}</p>`);
};

operacaoMatematica(10, "*", 10);


// ===== Tarefa 03 ===== //
const calcularDobro = function (x){
    return (x*2);
}

document.write(`<p>O dobro do número é ${calcularDobro(5)}</p>`)


// ===== Tarefa 04 ===== //
const calcularMetade = (x) => {
    return (x/2);
}

document.write(`<p>A metade do número é ${calcularMetade(5)}`)


// ===== Tarefa 05 ===== //
const message = (function (){
    document.write("<p>Calculadora Universal pronta para uso!</p>")
})();