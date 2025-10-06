// Importando o Express
import express from "express"
// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

// ROTA DE AERONAVES
router.get("/aeronaves", (req, res) => {
    const aeronaves = [
        {img: "/imgs/f22.png", fabricante: "Lockheed Martin (Skunk Works)", modelo: "F-22 Raptor", pais: "EUA"},
        {img: "/imgs/su57.png", fabricante: "Sukhoi", modelo: "Su-57 Felon", pais: "Rússia"},
        {img: "/imgs/f39.png", fabricante: "Saab", modelo: "F-39 Gripen E", pais: "Suécia"},
        {img: "/imgs/sr71.png", fabricante: "Lockheed (Skunk Works)", modelo: "SR-71 Blackbird", pais: "EUA"},
        {img: "/imgs/a10.png", fabricante: "Fairchild Republic", modelo: "A-10 Thunderbolt II", pais: "EUA"}
    ]
    res.render("aeronaves", {
        aeronaves : aeronaves
    }) 
});

// Exportando o objeto router
export default router;