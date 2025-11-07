/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getHumedades,
    getHumedadById,
    createHumedad,
    updateHumedad,
    deleteHumedad
} = require("../controllers/datosHumedad.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getHumedades);

//GET BY ID
router.get("/:id", getHumedadById);

//CREATE
router.post("/", createHumedad);

//UPDATE
router.put("/:id", updateHumedad);

//DELETE
router.delete("/:id", deleteHumedad);

/* Exportado de Módulo */
module.exports = router;