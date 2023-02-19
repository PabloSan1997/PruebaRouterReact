import React from "react";

function Loguear() {
    const [entrada1, setEtrada1]=React.useState('');
    const [entrada2, setEtrada2]=React.useState('');
  const eventoSumbint = (e) => {
    e.preventDefault();
  };
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
}
export { Loguear };
