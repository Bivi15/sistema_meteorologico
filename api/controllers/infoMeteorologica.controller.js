/* Importado de Bibliotecas */
const infoMeteorologicaModel = require("../models/infoMeteorologica.models");

/* Codificación de Funciones */
// GET ALL 
const getInfo = async (req, res) => {
    try {
        //Filtro por sonda
        const filter = {};
        if (req.query.sonda) filter.sonda = req.query.sonda;

        const data = await infoMeteorologicaModel.find(filter).populate('sonda');
        res.send({error: false, data});
    } catch (err) {
        console.log(`[infoMeteorologica.controller | getInfo] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getInfoById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await infoMeteorologicaModel.findById(id).populate('sonda');

        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[infoMeteorologica.controller | getInfoById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createInfo = async (req, res) => {
    try{
        const body = req.body;
        const data = await infoMeteorologicaModel.create(body);
        await data.populate('sonda');
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[infoMeteorologica.controller | createInfo] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateInfo = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await infoMeteorologicaModel.findByIdAndUpdate(id, body, {new: true}).populate('sonda');
        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[infoMeteorologica.controller | updateInfo] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteInfo = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await infoMeteorologicaModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, message: "Medición eliminada correctamente"});
    }catch (err) {
        console.log(`[infoMeteorologica.controller | deleteInfo] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getInfo,
    getInfoById,
    createInfo,
    updateInfo,
    deleteInfo
};