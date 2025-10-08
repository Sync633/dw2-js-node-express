import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //SEÇECT * FROM Clientes
  Cliente.findAll().then((clientes) => {
    // then = promessa bem sucessida
  res.render("clientes", {
    clientes: clientes,
  });
  // catch => falha na resolução da promessa
  }).catch(error => {
    console.log(error)
  });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
  // COLETANDO OS DADOS DO FORM
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;

  Cliente.create({
    // coluna : dado do form
    nome : nome,
    cpf : cpf,
    endereco : endereco
  }).then(()=> {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

// ROTA DE EXCLUSÃO DO CLIENTE
router.get("/clientes/delete/:id", (req, res) =>{
  // :id => Parâmetro obrigatório
  const id = req.params.id
  // .destroy() => Exclui um registro do Banco de Dados-
  Cliente.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
});

// ROTA DE EDIÇÂO DE CLIENTE
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id
  // Buscando o cliente pela ID
  // ;findByPk() => Busca um registro pela chave primária (pk)
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente : cliente
    });
  });
});

export default router;
