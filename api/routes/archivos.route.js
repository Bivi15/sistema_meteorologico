/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getArchivos,
    getArchivoById,
    createArchivo,
    updateArchivo,
    deleteArchivo
} = require("../controllers/archivos.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getArchivos);

//GET BY ID
router.get("/:id", getArchivoById);

//CREATE
router.post("/", createArchivo);

//UPDATE
router.put("/:id", updateArchivo);

//DELETE
router.delete("/:id", deleteArchivo);

/* Exportado de Módulo */
module.exports = router;