import React from "react";
import { Navigate } from "react-router-dom";
import { useCont } from "../contexto";



function Loguear() {
    const {entrar, setNose, entrada1, setEtrada1, entrada2, setEtrada2} = useCont();
  const eventoSumbint = (e) => {
    e.preventDefault();
    setNose(true);
  };
  if(!entrar){
    return (
      <>
        <header className="titulo titulo1">
          <h1>Mi Lista</h1>
        </header>
        <div className="contenedor contenedor1">
          <div className="caja">
            <p className="texto">
              Pagina para que sepas las listas que hay que hacer
            </p>
            <p>Así que aprendetelas bien</p>
          </div>
          <div className="caja">
            <h2 className="titulos">Entra a ver</h2>
            <form onSubmit={eventoSumbint}>
              <div className="fila">
                <label>Usuario</label>
                <input className="entrada" placeholder="Escribir" 
                onChange={(e)=>setEtrada1(e.target.value)}
                value={entrada1}
                />
              </div>
              <div className="fila">
                <label>Contraseña</label>
                <input className="entrada" placeholder="Escribir" 
                onChange={(e)=>setEtrada2(e.target.value)}
                value={entrada2}
                type="password"
                />
              </div>
              <div className="area-boton">
                  <button className="boton" type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }else{
    return <Navigate to="/lista"/>
  }
}
export { Loguear };

