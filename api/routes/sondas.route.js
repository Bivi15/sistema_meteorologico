/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getSondas,
    getSondaById,
    createSonda,
    updateSonda,
    deleteSonda
} = require("../controllers/sondas.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getSondas);

//GET BY ID
router.get("/:id", getSondaById);

//CREATE
router.post("/", createSonda);

//UPDATE
router.put("/:id", updateSonda);

//DELETE
router.delete("/:id", deleteSonda);

/* Exportado de Módulo */
module.exports = router;