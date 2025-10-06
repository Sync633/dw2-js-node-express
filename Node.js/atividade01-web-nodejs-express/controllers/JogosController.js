import express from "express";

const router = express.Router();

// ROTA DE JOGOS
router.get("/jogos", (req, res) => {
    const jogos = [
        {img: "/imgs/ori.png", titulo: "Ori and the Blind Forest", desenvolvedora: "Moon Studios", ano: 2015},
        {img: "/imgs/gow.png", titulo: "God of War", desenvolvedora: "Santa Monica Studio", ano: 2018},
        {img: "/imgs/astroneer.png", titulo: "Astroneer", desenvolvedora: "System Era Softworks", ano: 2019},
        {img: "/imgs/bf1.png", titulo: "Battlefield 1", desenvolvedora: "DICE", ano: 2016}
    ];
    
    res.render("jogos", {
        jogos : jogos
    }); 
});

export default router;