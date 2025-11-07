/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getInfo,
    getInfoById,
    createInfo,
    updateInfo,
    deleteInfo
} = require("../controllers/infoMeteorologica.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getInfo);

//GET BY ID
router.get("/:id", getInfoById);

//CREATE
router.post("/", createInfo);

//UPDATE
router.put("/:id", updateInfo);

//DELETE
router.delete("/:id", deleteInfo);

/* Exportado de Módulo */
module.exports = router;