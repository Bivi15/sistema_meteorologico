/* Importado de Bibliotecas */
//Bibliotecas externas
const express = require("express");

// Bibliotecas propias
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/usuarios.controller");

/* Declaraciones Constantes */
const router = express.Router();

/* Definición de rutas */
// GET ALL
router.get("/", getUsers);

//GET BY ID
router.get("/:id", getUserById);

//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

/* Exportado de Módulo */
module.exports = router;