/* Importado de Bibliotecas */
const datosHumedadModel = require("../models/datosHumedad.models");

/* Codificación de Funciones */
// GET ALL 
const getHumedades = async (req, res) => {
    try {
        //Filtro por sonda
        const filter = {};
        if (req.query.sonda) filter.sonda = req.query.sonda;

        const data = await datosHumedadModel.find(filter).populate('sonda');
        res.send({error: false, data});
    } catch (err) {
        console.log(`[datosHumedad.controller | getHumedades] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getHumedadById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await datosHumedadModel.findById(id).populate('sonda');

        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosHumedad.controller | getHumedadById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createHumedad = async (req, res) => {
    try{
        const body = req.body;
        const created = await datosHumedadModel.create(body);
        const data = await datosHumedadModel.findById(created._id).populate('sonda');
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosHumedad.controller | createHumedad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateHumedad = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await datosHumedadModel.findByIdAndUpdate(id, body, {new: true}).populate('sonda');
        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosHumedad.controller | updateHumedad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteHumedad = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await datosHumedadModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, message: "Medición eliminada correctamente"});
    }catch (err) {
        console.log(`[datosHumedad.controller | deleteHumedad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getHumedades,
    getHumedadById,
    createHumedad,
    updateHumedad,
    deleteHumedad
};