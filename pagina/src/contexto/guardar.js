import React from "react";

function useGuardar(){
    const [entrar, setEntrar]=React.useState(false);
    React.useEffect(
        ()=>{
            if(!localStorage.entrar){
                localStorage.entrar='no';
            }
            setEntrar(localStorage.entrar==='si');
        }
        ,[]);
        const setGuardar = (nom)=>{
            localStorage.entrar=nom;
            setEntrar(nom==='si');
        }
        return {entrar, setGuardar};
}

export{useGuardar}