/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getDatosAvanzados,
    getDatosAvanzadosById,
    createDatosAvanzados,
    updateDatosAvanzados,
    deleteDatosAvanzados
} = require("../controllers/datosAvanzados.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getDatosAvanzados);

//GET BY ID
router.get("/:id", getDatosAvanzadosById);

//CREATE
router.post("/", createDatosAvanzados);

//UPDATE
router.put("/:id", updateDatosAvanzados);

//DELETE
router.delete("/:id", deleteDatosAvanzados);

/* Exportado de Módulo */
module.exports = router;