const datos = require('./datos.json');
const fs = require('fs');
async function actualizar(dato){
    fs.writeFile('./datos/datos.json',JSON.stringify(dato), (error)=>{
        if(error){
            console.log(error);
        }
    });
}
module.exports={actualizar, datos}