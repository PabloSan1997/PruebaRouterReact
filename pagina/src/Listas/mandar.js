async function agregar(cuerpo){
    try {
        let objeto = {
            method:'POST',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(cuerpo)
        }
        const enviar = await fetch('http://localhost:3333/api/v1/informacion', objeto);
        const mensaje = await enviar.json();
        if(mensaje.statusCode===400){
            throw mensaje.message
        }
        window.location.reload();
    } catch (error) {
        alert(error);
    }
}
async function eliminar(num){
    try {
        let objeto={
            method:'DELETE',
            headers:{ "Content-Type": "application/json" }
        }
        const enviar = await fetch(`http://localhost:3333/api/v1/informacion/${num}`, objeto);
        const mensaje = await enviar.json();
        window.location.reload();
    } catch (error) {
        
    }
}
export{agregar, eliminar}