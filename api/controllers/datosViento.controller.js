/* Importado de Bibliotecas */
const datosVientoModel = require("../models/datosViento.models");

/* Codificación de Funciones */
// GET ALL 
const getVientos = async (req, res) => {
    try {
        //Filtro por sonda
        const filter = {};
        if (req.query.sonda) filter.sonda = req.query.sonda;
        if (req.query.direccionViento) filter.direccionViento = req.query.direccionViento;

        const data = await datosVientoModel.find(filter).populate('sonda');
        res.send({error: false, data});
    } catch (err) {
        console.log(`[datosViento.controller | getVientos] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getVientoById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await datosVientoModel.findById(id).populate('sonda');

        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosViento.controller | getVientoById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createViento = async (req, res) => {
    try{
        const body = req.body;
        const created = await datosVientoModel.create(body);
        const data = await datosVientoModel.findById(created._id).populate('sonda');
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosViento.controller | createViento] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateViento = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await datosVientoModel.findByIdAndUpdate(id, body, {new: true}).populate('sonda');
        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosViento.controller | updateViento] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteViento = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await datosVientoModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, message: "Medición eliminada correctamente"});
    }catch (err) {
        console.log(`[datosViento.controller | deleteViento] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getVientos,
    getVientoById,
    createViento,
    updateViento,
    deleteViento
};