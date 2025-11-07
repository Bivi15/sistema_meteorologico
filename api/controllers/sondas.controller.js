/* Importado de Bibliotecas */
const sondasModel = require("../models/sondas.models");

/* Codificación de Funciones */
// GET ALL 
const getSondas = async (req, res) => {
    try {
        const data = await sondasModel.find();
        res.send({error: false, data});
    } catch (err) {
        console.log(`[sondas.controller | getSondas] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getSondaById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await sondasModel.findById(id);

        if (!data)
            return res.status(404).send({ error: true, message: "Sonda no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[sondas.controller | getSondaById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createSonda = async (req, res) => {
    try{
        const body = req.body;
        const data = await sondasModel.create(body);
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[sondas.controller | createSonda] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateSonda = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await sondasModel.findByIdAndUpdate(id, body, {new: true});
        if (!data)
            return res.status(404).send({ error: true, message: "Sonda no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[sondas.controller | updateSonda] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteSonda = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await sondasModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Sonda no encontrada"});
        res.send({ error: false, message: "Sonda eliminada correctamente"});
    }catch (err) {
        console.log(`[sondas.controller | deleteSonda] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getSondas,
    getSondaById,
    createSonda,
    updateSonda,
    deleteSonda
};