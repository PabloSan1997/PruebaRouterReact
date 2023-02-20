import React from "react";

function useGuardar(){
    const [entrar, setEntrar]=React.useState(false);
    React.useEffect(
        ()=>{
            if(!localStorage.entrar){
                localStorage.entrar='no';
            }
            if(!localStorage.infor){
                localStorage.infor=JSON.stringify({usuario:false, superUsuario:false, nombre:""});
            }
            setEntrar(localStorage.entrar==='si');
        }
        ,[]);
        const setGuardar = (nom)=>{
            localStorage.entrar=nom;
            setEntrar(nom==='si');
        }
        const guardarv=(mira)=>{
            localStorage.infor=JSON.stringify(mira);
        }
        const generar = ()=>{
            return JSON.parse(localStorage.infor);
        }
        return {entrar, setGuardar, guardarv, generar};
}

export{useGuardar}