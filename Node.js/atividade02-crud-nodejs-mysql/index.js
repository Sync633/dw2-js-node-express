// ====== Importando o Express (Framework) ====== */
// const express = require("express"); -> CommonJS Modules
import express from "express"; // ES6 Modules
// ====== Iniciando o Express na variável "app" ====== */
const app = express();

// ====== Importa a Conexao com o Banco de Dados ====== //
import connection from "./config/sequelize-config.js";

// ====== Importa o encode para requisicoes ====== //
app.use(express.urlencoded({ extended: true }));

// Importando os Controllers
import AeronavesController from "./controllers/AeronavesController.js";
import CarrosController from "./controllers/CarrosController.js";
import JogosController from "./controllers/JogosController.js";

// ====== Configurando o EJS ====== */
app.set('view engine', 'ejs')

// ====== Definindo a pasta PUBLIC para arquivos Estáticos
app.use(express.static("public"));

// ====== Definindo o uso das rotas que estão nos controllers
app.use("/", AeronavesController);
app.use("/", CarrosController);
app.use("/", JogosController);

connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso");
  })
  .catch((error) => {
    console.log(error);
});


// Criando a primeira rota do site (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    res.render("index")
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
