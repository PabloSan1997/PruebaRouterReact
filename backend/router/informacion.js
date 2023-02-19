const express = require('express');
const { ServicioInformacion } = require('../servicios/servicioinformacion');
const servicio = new ServicioInformacion();
const infor = express.Router();   

infor.get('/', async (req, res, next)=>{
    try {
        const recibir = await servicio.leer();
        res.json(recibir);
    } catch (error) {
        next(error);
    }
});
infor.post('/', async(req, res, next)=>{
    const cuerpo = req.body;
    try {
        const enviar = await servicio.agregar(cuerpo);
        res.status(201).json(enviar);
    } catch (error) {
        next(error);
    }
});
infor.delete('/:numero',async(req, res, next)=>{
    try {
        const enviar = await servicio.borrar(req.params.numero);
        res.status(201).json(enviar);
    } catch (error) {
        next(error);
    }
});
module.exports={infor}