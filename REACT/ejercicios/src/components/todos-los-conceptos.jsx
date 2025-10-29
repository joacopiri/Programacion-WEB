import { useState } from "react";

function Conceptos() {
  const [texto, setTexto] = useState("");
  const [textoB, setTextoB] = useState("Presioname");
  const [mostrar, setMostrar] = useState(false);

  const manejarCambio = (event) => {
    setTexto(event.target.value);
  };
  const mostrarNombre = () => {
    setMostrar(true);
  };

  let contador = 4;
  const manejarClick = () => {
    setTextoB("Gracias por presionar");
    console.log("Saludo actualizado");
    const interval = setInterval(() => {
      contador--;
      console.log("contador", contador);
      setTextoB(contador);
      if (contador === 1) {
        return;
      }
    }, 1000);
    setTimeout(() => {
      setTextoB("Presioname");
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
