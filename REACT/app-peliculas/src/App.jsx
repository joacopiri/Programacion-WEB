import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [peliculas, setPeliculas] = useState({});
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.trim() === "") return;
    fetch(`https://www.omdbapi.com/?t=${input}&apikey=f0ef6fdc`)
      .then((data) => data.json())
      .then((response) => {
        setPeliculas(response);
        console.log(response);
      });
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
        <input 
          value={text} 
          onChange={handleInput}
        />
      </div>

      <div className="div">
        <button onClick={handleClick}>buscar</button>
      </div>

      <div className="div">
        {peliculas.Response === "True" ? 
          <div>
            <h3>{peliculas.Title} "{peliculas.Year}"</h3>
            <img src={peliculas.Poster}/>
          </div> : ""}
      </div>
    </>
  );
}

export default App;
