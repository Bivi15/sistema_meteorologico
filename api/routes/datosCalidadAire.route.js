/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getCalidades,
    getCalidadById,
    createCalidad,
    updateCalidad,
    deleteCalidad
} = require("../controllers/datosCalidadAire.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getCalidades);

//GET BY ID
router.get("/:id", getCalidadById);

//CREATE
router.post("/", createCalidad);

//UPDATE
router.put("/:id", updateCalidad);

//DELETE
router.delete("/:id", deleteCalidad);

/* Exportado de Módulo */
module.exports = router;