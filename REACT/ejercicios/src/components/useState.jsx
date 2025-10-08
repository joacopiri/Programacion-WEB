import { useState } from 'react'

function Texto() {
  const [texto, setTexto] = useState(''); // Inicializamos el estado con un valor vacío

  // Función para manejar el cambio de valor en el input
  const manejarCambio = (event) => {
    setTexto(event.target.value); // Actualizamos el estado con el nuevo valor del input
  };

  return (
    <div>
      <input
        type="text"
        value={texto} // El valor del input está vinculado al estado
        onChange={manejarCambio}  // Cuando el valor cambia, se ejecuta manejarCambio
      />
      <p>Escribime: {texto}</p>
    </div>
  );
}

export default Texto;