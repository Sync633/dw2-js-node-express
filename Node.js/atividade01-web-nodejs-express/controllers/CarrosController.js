import express from "express";

const router = express.Router();

// ROTA DE CARROS
router.get("/carros", (req, res) => {
    const carros = [
        {img: "/imgs/ferrari458.png", fabricante: "Ferrari", modelo: "458 Italia", pais: "Itália"},
        {img: "/imgs/challengerhellcat.png", fabricante: "Dodge", modelo: "Challenger SRT Hellcat", pais: "EUA"},
        {img: "/imgs/lamborghiniveneno.png", fabricante: "Lamborghini", modelo: "Veneno", pais: "Itália"},
        {img: "/imgs/nissangtr.png", fabricante: "Nissan", modelo: "GT-R", pais: "Japão"},
        {img: "/imgs/astonvulcan.png", fabricante: "Aston Martin", modelo: "Vulcan", pais: "Reino Unido"}
    ];
    
    res.render("carros", {
        carros : carros
    }); 
});

export default router;