import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

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

      <div className="div">
        {peliculas.Response === "True"
          ? peliculas.Search.map((pelicula, index) => (
              <div key={index} className="peliculas">
                <img
                  src={pelicula.Poster}
                  alt={pelicula.Title}
                  style={{ width: "100px", height: "auto" }}
                />
                <div style={{ marginLeft: "20px" }}>
                  <h3>
                    {pelicula.Title} "{pelicula.Year}"
                  </h3>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
}

export default App;
