import React from "react";

function Cabeza(props) {
  const [confirmar, setConfirmar] = React.useState(false);
  return (
    <header className="titulo titulo2">
      <h1>Mi Lista</h1>
      <div className="salir">
        {confirmar ? (
          <>
            <span>Aceptar</span>
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
