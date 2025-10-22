import { useState } from 'react'

function Conceptos() {
  const [texto, setTexto] = useState(''); 
  const [textoB, setTextoB] = useState('presioname');
  const [mostrar, setMostrar] = useState(false)
  
  const manejarCambio = (event) => {
    setTexto(event.target.value); 
  };
  const mostrarNombre = () => {
    setMostrar(true)
  };

  return (
    <div>
    <h3>ingresa tu nombre</h3>
    <div>
      <input
        type="text"
        value={texto} 
        onChange={manejarCambio}
      />
    </div>
    <div>
      {mostrar === false ? <>Debe ingresar un nombre: {texto}</> : texto}
    </div>
    <div>
      <button onClick={()=> setTextoB("Gracias por presionar"), console.log("Saludo actualizado")}>{textoB}</button>
    </div>
    </div>
  );
}

export default Conceptos;