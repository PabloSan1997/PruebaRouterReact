import React from "react";
import { useCont } from "../contexto";

function Cabeza(props) {
  const [confirmar, setConfirmar] = React.useState(false);
  const {setGuardar, setObjeto, objeto}=useCont();
  const quitar = ()=>{
    setGuardar('no');
    setObjeto({usuario:false, superUsuario:false, nombre:""});
  }
  return (
    <header className="titulo titulo2">
      <h1>{!objeto.superUsuario?'Mi lista':'Mi lista (Administrador)'}</h1>
      <div className="salir">
        <p>Perfil: {!!props.nombre && `${props.nombre}`}</p>
        {confirmar ? (
          <>
            <span className="uno" onClick={quitar}>Aceptar</span>
            <span className="dos" onClick={()=>setConfirmar(false)}>Cancelar</span>
          </>
        ) : (
          <span onClick={()=>setConfirmar(true)}>Logout</span>
        )}
      </div>
    </header>
  );
}
export { Cabeza };
