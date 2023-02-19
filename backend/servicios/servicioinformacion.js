const { datos, actualizar } = require("../datos/datos")
const boom = require('@hapi/boom');
class ServicioInformacion{
    constructor(){
        this.datos=datos;
    }
    async leer(){
        if(this.datos.infor.length===0){
            throw boom.notFound('No se encontraron datos');
        }
        return this.datos.infor;
    }
    async agregar(cuerpo){
        let num=1;
        if(this.datos.infor.length!==0){
            num+=this.datos.infor[this.datos.infor.length-1].id;
        }
        if(!cuerpo['lista'] || Object.keys(cuerpo).length!==1){
            throw boom.badRequest('No deje campos vacios');
        }
        let obeto = {
            id:num,
            ...cuerpo
        }
        this.datos.infor.push(obeto);
        actualizar(this.datos);
        return{message:"Dato agregado"}
    }
    async borrar(num){
        if(this.datos.infor.length===0){
            throw boom.notFound("no se encontraron elementos");
        }
        let indice = this.datos.infor.findIndex(elemento=>elemento.id==num);
        if(indice===-1){
            throw boom.notFound("no se encontró elemto");
        }
        this.datos.infor.splice(indice, 1);
        actualizar(this.datos);
        return {message:`Elemento ${num} borrado con exito`}
    }
}

module.exports={ServicioInformacion}