import { useEffect, useState } from "react";

function useListas() {
  const [peliculas, setPeliculas] = useState({});
  const [text, setText] = useState("");
  const [input, setInput] = useState("");

  const handleClick = () => {
    setInput(text);
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  useEffect(() => {
    if (input.trim() === "") return;
    fetch(`https://www.omdbapi.com/?s=${input}&page=1&apikey=${OMDB_API_KEY}`)
      .then((data) => data.json())
      .then((response) => {
        console.log("Respuesta API", response);
        setPeliculas(response);
      })
      .catch((err) => console.error("Error", err));
  }, [input]);

  return {
    handleClick,
    handleInput,
    peliculas,
    text,
  };
}

export default useListas;
