const dataAtual = new Date();
document.write(`<p> ${dataAtual}</p>`);

const compraInternacional = 486.99;
const compraInternacionalDolar = compraInternacional * 5.45;

const compraDolar = compraInternacional.toLocaleString("en", {
  style: "currency",
  currency: "USD"
});
document.write(`<p>O valor da compra em dolar é: ${compraDolar}</p>`);


const compraReal = compraInternacionalDolar.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL"
});
document.write(`<p>O valor convertido em real: ${compraReal}</p>`);

dataAtual.setDate(dataAtual.getDate() + 12);
document.write(`<p>A data de entrega estimada é: ${dataAtual.getDate()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()} </p>`);