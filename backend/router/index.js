const express = require('express');
const { infor } = require('./informacion');
const { validar } = require('./verUsuario');

const direccion = express.Router();

function crearApi(app){
    app.use('/api/v1', direccion);
    direccion.use('/informacion', infor);
    direccion.use('/validar', validar);
}
module.exports={crearApi}