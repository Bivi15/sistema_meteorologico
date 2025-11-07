/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getPrecipitaciones,
    getPrecipitacionById,
    createPrecipitacion,
    updatePrecipitacion,
    deletePrecipitacion
} = require("../controllers/datosPrecipitacion.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getPrecipitaciones);

//GET BY ID
router.get("/:id", getPrecipitacionById);

//CREATE
router.post("/", createPrecipitacion);

//UPDATE
router.put("/:id", updatePrecipitacion);

//DELETE
router.delete("/:id", deletePrecipitacion);

/* Exportado de Módulo */
module.exports = router;