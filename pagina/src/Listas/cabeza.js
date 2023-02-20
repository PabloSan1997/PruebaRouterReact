import React from "react";
import { useCont } from "../contexto";

function Cabeza(props) {
  const [confirmar, setConfirmar] = React.useState(false);
  const {setGuardar, setObjeto}=useCont();
  const quitar = ()=>{
    setGuardar('no');
    setObjeto({usuario:false, superUsuario:false, nombre:""});
  }
  return (
    <header className="titulo titulo2">
      <h1>Mi Lista</h1>
      <div className="salir">
        <p>Perfil {!!props.nombre && `${props.nombre}`}</p>
        {confirmar ? (
          <>
            <span onClick={quitar}>Aceptar</span>
            <span onClick={()=>setConfirmar(false)}>Cancelar</span>
          </>
        ) : (
          <span onClick={()=>setConfirmar(true)}>Logout</span>
        )}
      </div>
    </header>
  );
}
export { Cabeza };
