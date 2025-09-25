// ====== Importando o Express (Framework) ====== */
const express = require("express");
// ====== Iniciando o Express na variável "app" ====== */
const app = express();

// ====== Configurando o EJS ====== */
app.set('view engine', 'ejs')

// ====== Definindo a pasta PUBLIC para arquivos Estáticos
app.use(express.static("public"));

// Criando a primeira rota do site (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    res.render("index")
}); 

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
    // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

    const produtos = [
        {nome: "Celular", preco: 3000.00},
        {nome: "Computador", preco: 4000.00},
        {nome: "Tablet", preco: 2000.00},
        {nome: "Notebook", preco: 3800.00}
    ];
    res.render("produtos", {
        produtos : produtos
    })
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    const clientes = [
        {nome: "Ricardo", CPF: "123.465.789-00", endereco: "Rua das Flores, 34"},
        {nome: "Issac", CPF: "123.456.789-00", endereco: "Rua Diamante, 100"},
        {nome: "Ana Flávia", CPF: "123.465.789-00", endereco: "Rua Ceará, 30"},
        {nome: "Renan", CPF: "123.465.789-00", endereco: "Rua Curitiba, 22"},
    ]
    res.render("clientes", {
        clientes : clientes
    }) 
});

// ROTA DE PERFIL
// :user -> É um parâmetro da rota (OBRIGATÓRIO)
// :user? -> É um parâmetro da rota (OPCIONAL)
app.get("/perfil/:user", (req, res) => {
    const user = req.params.user

    res.render ("perfil", {
        // Enviando variáveis para a página .EJS (HTML)
        user : user,
    });
});

// ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
    const pedidos = [
        {num: 1, produto: "Celular", valor: 3000.00},
        {num: 2, produto: "Tablet", valor: 2000.00},
        {num: 3, produto: "Notebook", valor: 3800.00},
        {num: 4, produto: "Computador", valor: 4000.00},
    ]
    res.render("pedidos", {
        pedidos : pedidos
    }) 
});

// ====== Iniciando o Servidor HTTP ====== */
// Porta do Servidor 
const port = 8080; 

app.listen(port, (error) => {
    if (error) {
        console.log(`Não foi possível iniciar o servidor, ocorreu um erro! \n ERRO - ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});
