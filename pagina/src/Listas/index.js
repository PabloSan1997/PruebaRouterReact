import React from "react";
import { Navigate } from "react-router-dom";
import { useCont } from "../contexto";
import { Cabeza } from "./cabeza";
import { agregar } from "./mandar";

function Listas(){
    const {datos, busc, setBusc, entrar, objeto}=useCont();
    const [escribir, setEscribir]=React.useState('');
    const mandar=(e)=>{
        e.preventDefault();
        agregar({"lista":escribir});
    }
    if(entrar){
        return(
            <>
             <Cabeza nombre={objeto.nombre}/>
             {objeto.superUsuario && (
                <form className="formularios" onSubmit={mandar}>
                <div className="fila">
                    <label>Agregar a la lista</label>
                    <input 
                    className="enviar" 
                    placeholder="Escribir"
                    value={escribir}
                    onChange={(e)=>setEscribir(e.target.value)}
                    />
                    <div className="area-boton">
                        <button type="submit">Enviar</button>
                    </div>
                </div>
             </form>
             )}
             <div className="contenedor contenedor2">
                <div className="buscar">
                    <p>Buscador</p>
                    <input className="buscar" 
                    placeholder="Escribir" 
                    value={busc} 
                    onChange={(e)=>setBusc(e.target.value)}/>
                </div>
                {datos.map(elem=>(
                    <Fila 
                    key={elem.id}
                    lista={elem.lista}
                    num={elem.id}
                    objeto={objeto}
                    />
                ))}
             </div>
            </>
            );
    }else{
        return <Navigate to='/'/>
    }
}

function Fila({lista, num, objeto}){
    
    return(
        <div className="fila">
            <p>{num}.- {lista}</p>
            {objeto.superUsuario && <button className="boton">X</button>}
        </div>
    );
}

export{Listas}