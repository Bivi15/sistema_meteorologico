/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getVientos,
    getVientoById,
    createViento,
    updateViento,
    deleteViento
} = require("../controllers/datosViento.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getVientos);

//GET BY ID
router.get("/:id", getVientoById);

//CREATE
router.post("/", createViento);

//UPDATE
router.put("/:id", updateViento);

//DELETE
router.delete("/:id", deleteViento);

/* Exportado de Módulo */
module.exports = router;