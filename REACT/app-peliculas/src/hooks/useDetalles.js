import { useState } from "react";

function useDetalles() {
  const [detalles, setDetalles] = useState(true);
  const [detallePelicula, setDetallesPelicula] = useState({});

  const verDetalles = () => {
    setDetalles((prevDetalle) => !prevDetalle); // Alternar el valor de detalles
  };

  const verDetallePelicula = () => {
    setDetallesPelicula();
  };

  return {
    verDetalles,
    verDetallePelicula,
    detalles,
    detallePelicula,
  };
}

export default useDetalles;
