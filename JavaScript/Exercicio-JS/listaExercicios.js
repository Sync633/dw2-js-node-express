// ===== Tarefa 01 ===== //
document.write("<h3>Tarefa 01</h1>");
const nome = "Miguel";
function saudacaoPersonalizada(nome) {
    document.write(`<p>Olá, ${nome}! Bem vindo(a) à Calculadora Universal!</p>`)
}

saudacaoPersonalizada(nome);


// ===== Tarefa 02 ===== //
document.write("<h3>Tarefa 02</h1>");
function operacaoMatematica(num1, operador, num2) {
    document.write(`<p>O resultado de ${num1}${operador}${num2} é igual a ${eval(`${num1}${operador}${num2}`)}</p>`); 
};

operacaoMatematica(10, "+", 10);
operacaoMatematica(10, "-", 10);
operacaoMatematica(10, "*", 10);
operacaoMatematica(10, "/", 10);


// ===== Tarefa 03 ===== //
document.write("<h3>Tarefa 03</h1>");
const numDobro = 10;
const calcularDobro = function (x){
    return (x*2);
}

document.write(`<p>O dobro do número ${numDobro} é ${calcularDobro(numDobro)}</p>`)


// ===== Tarefa 04 ===== //
document.write("<h3>Tarefa 04</h1>");
const numMetade = 10;
const calcularMetade = (x) => {
    return (x/2);
}

document.write(`<p>A metade do número ${numMetade} é ${calcularMetade(numMetade)}`)


// ===== Tarefa 05 ===== //
document.write("<h3>Tarefa 05</h1>");
const message = (function (){
    document.write("<p>Calculadora Universal pronta para uso!</p>")
})();