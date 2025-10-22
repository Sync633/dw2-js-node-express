import express from "express";
import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";
const router = express.Router();
// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  // Realiza ambas as consulta em paralelo em uma Promessa
  Promise.all([
    Pedido.findAll({
      // Fazendo um INNER JOIN com a tabela de Clientes
      include: [
        {
          model : Cliente, // Inclui o modelo Cliente que está relacionado
          required: true, // Garante que somente pedidos com clientes sejam retornados
        }
      ]
    }),
    Cliente.findAll(),
  ])
    .then(([pedidos, clientes]) => {
      res.render("pedidos", {
        pedidos: pedidos,
        clientes: clientes,
      });
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  const cliente_id = req.body.cliente_id
  Pedido.create({
    numero: numero,
    valor: valor,
    cliente_id: cliente_id
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

// ROTA DE EXCLUSÃO DE CLIENTES
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {id: id}
  }).then(() => {
      res.redirect("/pedidos");
    }).catch((err) => {
      console.log(err);
    });
});

export default router;
