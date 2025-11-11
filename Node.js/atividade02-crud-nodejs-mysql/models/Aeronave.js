import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Aeronave = connection.define("aeronave", {
  urlFoto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fabricante: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pais: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Aeronave.sync({ force: false });

export default Aeronave;
