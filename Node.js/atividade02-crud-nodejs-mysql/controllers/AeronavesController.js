// Importando o Express
import express from "express"
import multer from "multer";
import path from 'path';
import fs from 'fs';
import Aeronave from "../models/Aeronave.js";
// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()


const storage = multer.diskStorage({
    // Define o diretório de destino onde a imagem será salva
    destination: (req, file, cb) => {
        cb(null, "public/imgs"); 
    },
    // Define como o nome do arquivo será gerado
    filename: (req, file, cb) => {
        // 1. Pega a extensão do arquivo original (ex: .jpg, .png)
        const extensao = path.extname(file.originalname);
        
        const nomeArquivoBase = path.basename(file.originalname, extensao).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-*|-*$/g, '');

        const nomeFinalImagem = `${nomeArquivoBase}-${Date.now()}${extensao}`;
        
        cb(null, nomeFinalImagem);
    }
});

const upload = multer({ storage: storage });


// ROTA DE AERONAVES
router.get("/aeronaves", (req, res) => {
    Aeronave.findAll().then((aeronaves) => {
        res.render("aeronaves", {
            aeronaves: aeronaves
        });
    }).catch(error => {
        console.log(error);
    });
});

// ROTA DE CADASTRO DE AERONAVES
router.post("/aeronaves/new", upload.single('urlFoto'), (req, res) => {
  const { fabricante, modelo, pais } = req.body;

  const urlFotoAeronave = req.file ? `/imgs/${req.file.filename}` : null;

  Aeronave.create({
    urlFoto: urlFotoAeronave,
    fabricante: fabricante,
    modelo: modelo,
    pais: pais,
  }).then(() => {
    res.redirect("/aeronaves");
  }).catch((err) => {
    console.log(err);
  });

});


// ROTA DE DELETAR AERONAVES
router.get("/aeronaves/delete/:id", (req, res) => {
  const id = req.params.id;

  Aeronave.findByPk(id)
    .then(aeronave => {
    
    // Verifica se a aeronave e o url da Foto foi econtrada
    if (aeronave && aeronave.urlFoto) {

      // Tenta apagar a imagem que estava salva
        try {
          const caminhoFicheiro = path.join('public', aeronave.urlFoto);
          
          // Se encontrar o caminho da URL, apaga ela da pasta (/public/imgs)
          if (fs.existsSync(caminhoFicheiro)) {
            fs.unlinkSync(caminhoFicheiro);
          }
        } catch (err) {
          console.error("Erro ao apagar imagem do disco:", err);
        }
    }

    // Caso consiga apagar a imagem salva destroi o registro do banco de dados
    return Aeronave.destroy({
        where: { id: id }
    });
    })
    .then(() => {
        res.redirect("/aeronaves");
    })
    .catch(error => {
        console.log(error);
        res.redirect("/aeronaves");
    });
});


// ROTA DE EDITAR AERONAVES
router.get("/aeronaves/edit/:id", (req, res) =>{
    const id = req.params.id;
    Aeronave.findByPk(id).then(function (aeronave) {
    res.render("aeronaveEdit", {
      aeronave: aeronave,
    });
  }).catch((err) => {
    console.log(err);
  });
});


// ROTA DE EDITAR AERONAVES
router.post("/aeronaves/update/:id", upload.single('urlFoto'), (req, res) =>{
    const id = req.params.id;
    const urlFotoAntiga = req.body.urlFotoAntiga;
    const fabricante = req.body.fabricante;
    const modelo = req.body.modelo;
    const pais = req.body.pais;

    let urlFotoFinal;

    if (req.file) {
      
        urlFotoFinal = `/imgs/${req.file.filename}`;

        try {
            const nomeFicheiroAntigo = path.basename(urlFotoAntiga);
            const caminhoFicheiroAntigo = path.join('public', 'imgs', nomeFicheiroAntigo);

            if (fs.existsSync(caminhoFicheiroAntigo)) {
                fs.unlinkSync(caminhoFicheiroAntigo);
                console.log("Ficheiro antigo substituído:", caminhoFicheiroAntigo);
            }
        } catch (err) {
            console.error("Erro ao apagar ficheiro antigo:", err);
        }

    } else {
        urlFotoFinal = urlFotoAntiga;
    }

    Aeronave.update({
        urlFoto: urlFotoFinal, // Contém o caminho novo OU o antigo
        fabricante: fabricante,
        modelo: modelo,
        pais: pais
    }, {
        where: { id: id }
    }).then(() => {
        res.redirect("/aeronaves");
    }).catch((err) => {
        console.log(err);
    });
});



// Exportando o objeto router
export default router;