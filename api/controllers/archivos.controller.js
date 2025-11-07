/* Importado de Bibliotecas */
const archivosModel = require("../models/archivos.models");

/* Codificación de Funciones */
// GET ALL 
const getArchivos = async (req, res) => {
    try {
        const filter = {};
        if (req.query.localizacion) filter.localizacion = req.query.localizacion;
        if (req.query.sonda) filter.sonda = req.query.sonda;

        const data = await archivosModel.find(filter);
        res.send({error: false, data});
    } catch (err) {
        console.log(`[archivos.controller | getArchivos] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getArchivoById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await archivosModel.findById(id);

        if (!data)
            return res.status(404).send({ error: true, message: "Archivo no encontrado"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[archivos.controller | getArchivoById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createArchivo = async (req, res) => {
    try{
        const body = req.body;
        const data = await archivosModel.create(body);
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[archivos.controller | createArchivo] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateArchivo = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await archivosModel.findByIdAndUpdate(id, body, {new: true});
        if (!data)
            return res.status(404).send({ error: true, message: "Archivo no encontrado"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[archivos.controller | updateArchivo] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteArchivo = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await archivosModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Archivo no encontrado"});
        res.send({ error: false, message: "Archivo eliminado correctamente"});
    }catch (err) {
        console.log(`[archivos.controller | deleteArchivo] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getArchivos,
    getArchivoById,
    createArchivo,
    updateArchivo,
    deleteArchivo
};