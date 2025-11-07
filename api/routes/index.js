/* Importado de Bibliotecas */
// Bibliotecas externas
const express = require("express");
const fs = require("fs");

/* Declaraciones Globales */
// Constantes
const router = express.Router();

/* Codificación de Funciones */
const removeFileExtension = (fileName) => {

    // Devolvemos la primera parte (antes del punto)
    return fileName.split('.').shift();
}

/* Ejecición Principal */
// Recorremos todas las rutas y las vamos añadiendo
fs.readdirSync(__dirname).filter((file) => {

    // Variables necesarias
    const name = removeFileExtension(file);

    // Si no es el fichero filter añadimos la ruta
    if(name !== 'index')
        router.use("/" + name, require('./' + name + '.route'))
});

/* Exportado de módulo */
module.exports = router;