// ===== Métodos de Manipulação de Vetores ===== //
let vetor = ['Laranja', 'Maça', 'Banana'];
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

vetor[3] = 'Morango'
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// PUSH - Insere um novo elemento no final do vetor:
document.write(`<br><h4>PUSH</h4>`);
vetor.push('Abacaxi');
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

vetor[0] = 'Pera';
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// UNSHIFT - Insere um novo elemento no incio do vetor:
document.write(`<br><h4>UNSHIFT</h4>`);
vetor.unshift('Laranja')
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

// LENGTH - Retorna o número de elementos no vetor:
document.write(`<br><h4>LENGTH</h4>`);
let numbers = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso novo vetor agora é o: ${numbers}</p>`);

document.write(`<p>O número de elementos desse vetor é ${numbers.length}</p>`);

// SORT - Ordena o vetor
document.write(`<br><h4>SORT</h4>`);

document.write(`<p>O primeiro elemento do vetor é o: ${numbers[0]}</p>`);

let numbersOrdenados = numbers.sort()

document.write(`<p>O vetorordenado é: ${numbersOrdenados}</p>`);

document.write(`<p>A lista de frutas ordenada é: ${vetor.sort()}</p>`);


// Ordenando um vetor númerico em ordem crescente:
document.write(`<p>${numbers.sort((a, b) => a - b)}</p>`);

// Ordenando um vetor númerico em ordem decrescente:
document.write(`<p>${numbers.sort((a, b) => b - a)}</p>`);

