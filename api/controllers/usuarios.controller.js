/* Importado de Bibliotecas */
const usuariosModel = require("../models/usuarios.model");

/* Codificación de Funciones */
// GET ALL 
const getUsers = async (req, res) => {
    try {
        const data = await usuariosModel.find();
        res.send({error: false, data});
    } catch (err) {
        console.log(`[usuarios.controller | getUsers] ERROR: ${err}`);
        res.status(500).send({error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//GET BY ID
const getUserById = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await usuariosModel.findById(id);

        if (!data)
            return res.status(404).send({ error: true, message: "Usuario no encontrado"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[usuarios.controller | getUserById] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//CREATE
const createUser = async (req, res) => {
    try{
        const body = req.body;
        const data = await usuariosModel.create(body);
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[usuarios.controller | createUser] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//UPDATE
const updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const data = await usuariosModel.findByIdAndUpdate(id, body, {new: true});
        if (!data)
            return res.status(404).send({ error: true, message: "Usuario no encontrado"});
        res.send({ error: false, data});
    }catch (err) {
        console.log(`[usuarios.controller | updateUser] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

//DELETE
const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const data = await usuariosModel.deleteOne({_id: id});
        if (data.deletedCount === 0)
            return res.status(404).send({ error: true, message: "Usuario no encontrado"});
        res.send({ error: false, message: "Usuario eliminado correctamente"});
    }catch (err) {
        console.log(`[usuarios.controller | deleteUser] ERROR: ${err}`);
        res.status(500).send({ error: true, message: "INTERNAL SERVER ERROR"});
    }
};

/* Exportado de módulo */
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};