import { useState, useEffect } from "react";
import "./App.css";
import Detalles from "./components/detalles/Detalles";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [detalles, setDetalles] = useState(false)

  useEffect(() => {
    if (input.trim() === "") return;
    fetch(`https://www.omdbapi.com/?s=${input}&page=1&apikey=f0ef6fdc`)
      .then((data) => data.json())
      .then((response) => {
        setPeliculas(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, [input]);

  const handleClick = () => {
    setInput(text);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const verDetalles = () => {
    setDetalles(true);
  }; 

  return (
    <>
      <div>
        <h2>Buscador de Peliculas</h2>
      </div>

      <div className="div">
        <input value={text} onChange={handleInput} />
      </div>

      <div className="div">
        <button onClick={handleClick}>buscar</button>
      </div>
      
      {peliculas.Response === "True" ? (
        <div className="catalogo">
         {peliculas.Search.map((pelicula, index) => (
                <div>
                  <div key={index} className="tarjetas">
                    
                    <img className="contenedor-imagen" src={pelicula.Poster} alt={pelicula.Title} />

                    <div className="informacion">
                      <h3>
                        {pelicula.Title} "{pelicula.Year}"
                      </h3>

                      <button hidden={detalles === true} onClick={verDetalles}>Ver detalles</button>
                      
                      {detalles === true && (
                        <Detalles
                          Type={pelicula.Type}
                          imdbID={pelicula.imdbID}
                        />
                      )}  
                    </div>
                  </div>
                </div>
              ))}
        </div>
        ) : peliculas.Response === "False" && (
          <div className="catalogo">
            <h3>No se encontraron peliculas...</h3>
          </div>
          )}
    </>
  );
}

export default App;
