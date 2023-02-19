import React from "react";
import { useGuardar } from "./guardar";

const Contexto = React.createContext();

function useLeer(entrar){
    const [datoss, setDatoss]=React.useState([]);
    React.useEffect(
        ()=>{
           if(entrar){
            (async ()=>{
                try {
                    const enviar = await fetch('http://localhost:3333/api/v1/informacion');
                    const mensaje = await enviar.json();
                    if(mensaje.statusCode===404){
                        throw {message:'No se obtuvieron datos'}
                    }
                    setDatoss(mensaje);
                } catch (error) {
                    alert(error.message);
                }
            })();
           }
        }
        ,[entrar]);
    return {datoss};
}
function Provedor({children}){
    const [busc, setBusc]=React.useState('');
    const {entrar, setGuardar} = useGuardar();
    const {datoss}=useLeer(entrar);
    let datos=[];
    if(busc===''){
        datos=datoss;
    }else{
        let nose = datoss;
        let indice = nose.filter(el=>{
            let texto = el.lista;
            return texto.includes(busc);
        });
        datos=indice;
    }
    return(
        <Contexto.Provider
        value={{
            datos,
            busc, 
            setBusc,
            entrar, 
            setGuardar
        }}
        >
            {children}
        </Contexto.Provider>
    );
}
const useCont=()=>{
    const valores = React.useContext(Contexto);
    return valores;
}
export{Provedor, useCont}