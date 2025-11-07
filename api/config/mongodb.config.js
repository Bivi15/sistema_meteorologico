/* Importado de Bibliotecas */
// Bibliotecas externas
const mongoose = require("mongoose");

/* Declaraciones Constantes */
const DB_URI = process.env.DB_URI;

/* Codificación de Funciones */
const connectToMongoDB = async () => {

    // Inicializamos la conexión
    console.log("[MongoDB Config] Inicializando la conexión con la base de datos...")
    try{
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("[MongoDB Config] Conexión con la base de datos inicializada con éxito.");
    } catch(err){
        console.log("[MongoDB Config] No se ha podido establecer conexión con la base de datos, error:\n" + err);
        process.exit(1);
    }
}

/* Exportado de Módulo */
module.exports = connectToMongoDB;