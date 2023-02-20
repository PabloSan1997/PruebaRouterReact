import React from "react";
import { useGuardar } from "./guardar";

const Contexto = React.createContext();

function useLeer(entrar, callback) {
  const [datoss, setDatoss] = React.useState([]);
  const [error, setError]=React.useState({estado:false, message:""});
  React.useEffect(() => {
    if (entrar) {
      (async () => {
        try {
          const enviar = await fetch(
            "http://localhost:3333/api/v1/informacion"
          );
          const mensaje = await enviar.json();
          if (mensaje.statusCode === 404) {
            throw { message: "No se obtuvieron datos" };
          }
          setDatoss(mensaje);
          setError({message:"", estado:false});
        } catch (error) {
          setError({message:error.message, estado:true});
          callback({usuario:false, superUsuario:false, nombre:""});
        }
      })();
    }
  }, [entrar]);
  return { datoss, error };
}
function Provedor({ children }) {
  const [busc, setBusc] = React.useState("");
  const { entrar, setGuardar, guardarv, generar } = useGuardar();
  const [objeto, setObjeto] = React.useState();
  const [nose, setNose] = React.useState(false);
  const [entrada1, setEtrada1] = React.useState("");
  const [entrada2, setEtrada2] = React.useState("");
  const { datoss, error } = useLeer(entrar, guardarv);
  let datos = [];
  if (busc === "") {
    datos = datoss;
  } else {
    let nose = datoss;
    let indice = nose.filter((el) => {
      let texto = el.lista;
      return texto.includes(busc);
    });
    datos = indice;
  }
  React.useEffect(() => {
    setObjeto(generar());
    if (nose) {
      (async () => {
        try {
          const hola = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nombre: entrada1,
              contra: entrada2
            }),
          };
          console.log(hola);
          const enviar = await fetch(
            "http://localhost:3333/api/v1/validar",
            hola
          );
          const mensaje = await enviar.json();
          setNose(false);
          if (!enviar.ok) {
            throw "Contraseña o usuario incorrecto";
          }
          setObjeto(mensaje);
          setGuardar("si");
          guardarv(mensaje);
        } catch (error) {
          alert(error);
          setObjeto({usuario:false, superUsuario:false, nombre:""});
          setNose(false);
          guardarv({usuario:false, superUsuario:false, nombre:""});
        }
      })();
    }
  }, [nose]);
  return (
    <Contexto.Provider
      value={{
        datos,
        busc,
        setBusc,
        entrar,
        setGuardar,
        objeto,
        setObjeto,
        setNose,
        entrada1,
        setEtrada1,
        entrada2,
        setEtrada2,
        guardarv,
        error
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
const useCont = () => {
  const valores = React.useContext(Contexto);
  return valores;
};
export { Provedor, useCont };
