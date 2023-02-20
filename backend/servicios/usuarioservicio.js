const boom = require('@hapi/boom');
require('dotenv').config();
class BuscarServicio{
    constructor(){
        this.usuarios = JSON.parse(process.env.USUARIOS);
    }
    async validar(cuerpo){
        let indice = this.usuarios.findIndex(elemento=>elemento.nombre===cuerpo.nombre && elemento.contra===cuerpo.contra);
        if(indice===-1){
            throw boom.notAcceptable('Contraseña y/o usuario incorrecto');
        }
       let hola = {
            nombre:this.usuarios[indice].nombre,
            superUsuario:this.usuarios[indice].superUsuario,
            usuario:this.usuarios[indice].usuario
        }
        return hola;
    }
}
module.exports={BuscarServicio}