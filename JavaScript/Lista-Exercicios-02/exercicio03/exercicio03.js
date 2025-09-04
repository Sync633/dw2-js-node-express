// ===== Classe Heroi ===== //
class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }
    correr() {
        return "O heroi esta correndo!!";
    }
    andar() {
        return "O heroi esta andando.";
    }
    atacar() {
        return "O heroi esta atacando!!!";
    }
    defender() {
        return "O heroi está se defendendo!!";
    }
}


// ===== Instânciando os 3 Objetos ===== //
const HomemAranha = new Heroi("Homem-Aranha", 100, 50, 75);
HomemAranha.teia = 1;
HomemAranha.sentidoAranha = () => {
    return "Detectou perigo!!!!!";
};

const Superman = new Heroi("Superman", 10000, 5000, 7500);
Superman.podeVoar = 1;
Superman.visaoCalor = () => {
    return "Soltando raio dos zóio!!!!!";
};

const Batman = new Heroi("Batman", 250, 25, 10);
Batman.esconder = 1;
Batman.investigar = () => {
    return "Está investigando algo!!";
};


// ===== Exibindo alguns atributos e métodos ===== //
document.write(`
    O herói ${HomemAranha.nome}, usou seu sentido aranha e ${HomemAranha.sentidoAranha()}<br>
    O herói ${Superman.nome}, usou sua visao de calor e ${Superman.visaoCalor()}<br>
    O herói ${Batman.nome}, com seu status de esconder em ${Batman.esconder}  ${Batman.investigar()}
`);