// ===== ARRAYS ===== //
// Servem para analisar uma lista, ou seja, diferente de elementos em uma única variável
document.write("<h3>Construindo um Array:</h3>");

const products = ["Computadores", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof products);

document.write("<br>"); 
document.write("<br>");
document.write("<br>");

document.write("<h3>Exibindo elementos do array através do índice:</h3>");
document.write(`<p>${products[2]}</p>`);

document.write("<br>");

document.write("<h3>Percorrendo um array através do forEach:</h3>");
products.forEach(product => {
  document.write(`<p>${product}</p>`);
});

document.write("<br>");

document.write("<h3>Mostrando os índices e valores com forEach:</h3>");
products.forEach((product, i) => {
  document.write(`<p>${i+1} - ${product}</p>`);
});
