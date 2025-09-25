import express from "express";

const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
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

export default router;