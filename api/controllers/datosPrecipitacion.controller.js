/* Importado de Bibliotecas */
const datosPrecipitacionModel = require("../models/datosPrecipitacion.models");

/* Codificación de Funciones */
// GET ALL 
const getPrecipitaciones = async (req, res) => {
    try {
        //Filtro por sonda
        const filter = {};
        if (req.query.sonda) filter.sonda = req.query.sonda;
        if (req.query.tipoPreipitacion) filter.tipoPrecipitacion = req.query.tipoPreipitacion;

        const data = await datosPrecipitacionModel.find(filter).populate('sonda');
        res.send({error: false, data});
    } catch (err) {
        console.log(`[datosPrecipitacion.controller | getPrecipitaciones] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getPrecipitacionById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await datosPrecipitacionModel.findById(id).populate('sonda');

        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosPrecipitacion.controller | getPrecipitacionById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createPrecipitacion = async (req, res) => {
    try{
        const body = req.body;
        const data = await datosPrecipitacionModel.create(body);
        await data.populate('sonda');
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosPrecipitacion.controller | createPrecipitacion] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updatePrecipitacion = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await datosPrecipitacionModel.findByIdAndUpdate(id, body, {new: true}).populate('sonda');
        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosPrecipitacion.controller | updatePrecipitacion] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deletePrecipitacion = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await datosPrecipitacionModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, message: "Medición eliminada correctamente"});
    }catch (err) {
        console.log(`[datosPrecipitacion.controller | deletePrecipitacion] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getPrecipitaciones,
    getPrecipitacionById,
    createPrecipitacion,
    updatePrecipitacion,
    deletePrecipitacion
};