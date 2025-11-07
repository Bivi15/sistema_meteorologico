/* Importado de Bibliotecas */
const datosAvanzadosModel = require("../models/datosAvanzados.models");

/* Codificación de Funciones */
// GET ALL 
const getDatosAvanzados = async (req, res) => {
    try {
        //Filtro por sonda
        const filter = {};
        if (req.query.sonda) filter.sonda = req.query.sonda;

        const data = await datosAvanzadosModel.find(filter).populate('sonda');
        res.send({error: false, data});
    } catch (err) {
        console.log(`[datosAvanzados.controller | getDatosAvanzados] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getDatosAvanzadosById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await datosAvanzadosModel.findById(id).populate('sonda');

        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosAvanzados.controller | getDatosAvanzadosById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createDatosAvanzados = async (req, res) => {
    try{
        const body = req.body;
        const created = await datosAvanzadosModel.create(body);
        const data = await datosAvanzadosModel.findById(created._id).populate('sonda');
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosHumedad.controller | createHumedad] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateDatosAvanzados = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await datosAvanzadosModel.findByIdAndUpdate(id, body, {new: true}).populate('sonda');
        if (!data)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[datosAvanzados.controller | updateDatosAvanzados] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteDatosAvanzados = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await datosAvanzadosModel.deleteOne({_id: id});
        if (result.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Medición no encontrada"});
        res.send({ error: false, message: "Medición eliminada correctamente"});
    }catch (err) {
        console.log(`[datosAvanzados.controller | deleteDatosAvanzados] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getDatosAvanzados,
    getDatosAvanzadosById,
    createDatosAvanzados,
    updateDatosAvanzados,
    deleteDatosAvanzados
};