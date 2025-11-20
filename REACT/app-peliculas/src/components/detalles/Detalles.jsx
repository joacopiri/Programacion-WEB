import { useState, useEffect } from "react";
import "./Detalles.css";

function Detalles(props) {
  return (
    <>
      <div className="divDetalles">
        <p className="p">Tipo = {props.Type}</p>
        <p className="p">Imbd ID = {props.imdbID}</p>
      </div>
    </>
  );
}

export default Detalles;
