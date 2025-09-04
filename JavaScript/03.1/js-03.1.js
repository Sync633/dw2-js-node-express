// ===== OBJETOS LITERAIS ===== //

// Criando uma classe
// Nome de classes devem iniciar com a primeira letra maiúscula.
class Carro {
    // Para criar os ATRIBUTOS da classe deve-se utilizar o método "constructor"
    constructor(marca, modelo, ano) {
        // "this" representa a instância (objeto)
        // O valor que for enviadao a classe será atribuido a instância
        // ATRIBUTOS
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    // MÉTODOS
    buzinar() {
        return "Beep! Bepp!";
    }
}; 

// Criando INSTÂNCIAS (objetos) derivadas da classe Carro
// Objeto - Carro Popular
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
    `<p>O carro ${carroPopular.marca}, modelo ${carroPopular.modelo} é do ano de ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}
`);

// Objeto - Carro Esportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;

document.write(
    `<p>O carro ${carroEsportivo.marca}, modelo ${carroEsportivo.modelo} é do ano de ${carroEsportivo.ano}. Quando buzina faz ${carroEsportivo.buzinar()}
`);

// Adicionar um novo atributo
carroEsportivo.corNeon = "Azul";

// Adicionar um novo método
carroEsportivo.turbo = () => {
    return "Vrummmmmmmm! O carro acelera muito!!!";
}

document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa o turbo ${carroEsportivo.turbo()}</p>`)