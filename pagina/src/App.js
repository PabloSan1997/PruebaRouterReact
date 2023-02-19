import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provedor } from "./contexto";
import { Listas } from "./Listas";
import { Loguear } from "./Login";

function App() {
  
  return (
    <HashRouter>
      <Provedor>
        <Routes>
          <Route path="/" element={<Loguear/>} />
          <Route path="/lista" element={<Listas/>} />
          <Route path="*" element={<p>404 No se encontró pagina</p>}/>
        </Routes>
      </Provedor>
    </HashRouter>
  );
}

export default App;
