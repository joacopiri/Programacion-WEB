import { useState } from "react";

function Conceptos() {
  const [texto, setTexto] = useState("");
  const [textoB, setTextoB] = useState("Presioname");
  const [mostrar, setMostrar] = useState(false);
  const [bloqueado, setBloqueado] = useState(false); 

  const manejarCambio = (event) => {
    setTexto(event.target.value);
  };

  const mostrarNombre = () => {
    setMostrar(true);
  };

  
  const manejarClick = () => {
    if(bloqueado) return;
    setBloqueado(true);

    setTextoB("Gracias por presionar");
    console.log("Saludo actualizado");

    let contador = 4;
  
    const interval = setInterval(() => {
      contador--;
      console.log("contador", contador);
      setTextoB(contador);
      if (contador === 1) {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => {
      setTextoB("Presioname");
      setBloqueado(false);
      clearInterval(interval);
    }, 4000);
  };

  return (
    <div>
      <h3>ingresa tu nombre</h3>
      <div>
        <input type="text" value={texto} onChange={manejarCambio} />
      </div>
      <div>
        {mostrar === false ? <>Debe ingresar un nombre: {texto}</> : texto}
      </div>
      <div>
        <button onClick={manejarClick}>{textoB}</button>
      </div>
    </div>
  );
}

export default Conceptos;
