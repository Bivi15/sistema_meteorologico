/* Importado de Bibliotecas */
const datosCalidadAireModel = require("../models/datosCalidadAire.models");

/* Codificación de Funciones */
// GET ALL 
const getCalidades = async (req, res) => {
    try {
        //Filtro por sonda
        const filter = {};
        if (req.query.sonda) filter.sonda = req.query.sonda;

        const data = await datosCalidadAireModel.find(filter).populate('sonda');
        res.send({error: false, data});
    } catch (err) {
        console.log(`[datosCalidadAire.controller | getCalidades] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getCalidadById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await datosCalidadAireModel.findById(id).populate('sonda');

        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosCalidadAire.controller | getCalidadById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createCalidad = async (req, res) => {
    try{
        const body = req.body;
        const created = await datosCalidadAireModel.create(body);
        const data = await datosCalidadAireModel.findById(created._id).populate('sonda');
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosCalidadAire.controller | createCalidad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateCalidad = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await datosCalidadAireModel.findByIdAndUpdate(id, body, {new: true}).populate('sonda');
        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosCalidadAire.controller | updateCalidad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteCalidad = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await datosCalidadAireModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, message: "Medición eliminada correctamente"});
    }catch (err) {
        console.log(`[datosCalidadAire.controller | deleteCalidad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getCalidades,
    getCalidadById,
    createCalidad,
    updateCalidad,
    deleteCalidad
};