const express = require('express');
const { BuscarServicio } = require('../servicios/usuarioservicio');
const validar = express.Router();
const servicio = new BuscarServicio();
let permisos=false;
validar.get('/',async(req, res, next)=>{
    try {
        const enviar = await servicio.validar(req.body);
        res.json(enviar);
    } catch (error) {
        next(error);
    }
});

module.exports={validar, permisos}