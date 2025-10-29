import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [peliculas, setPeliculas] = useState({});

  const [text, setText] = useState("");

  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.trim() === "") return; // evita llamar la API si está vacío
    fetch(`https://www.omdbapi.com/?t=${input}&apikey=f0ef6fdc`)
      .then((data) => data.json())
      .then((response) => setPeliculas(response));
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
        <input value={text} onChange={handleInput}></input>
      </div>
      <div className="div">
        <button onClick={handleClick}>buscar</button>
      </div>
    </>
  );
}

export default App;
