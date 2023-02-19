import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div>hola</div>}/>
         <Route path="/nose" element={<div>mira</div>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
