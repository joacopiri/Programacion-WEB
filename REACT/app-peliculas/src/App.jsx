import "./App.css";
import Buscador from "./components/buscador/Buscador";
import useListas from "./hooks/useLista";
import useDetalles from "./hooks/useDetalles";
import Peliculas from "./components/peliculas/Peliculas";

function App() {
  const { handleClick, handleInput, text, peliculas } = useListas();
  const { verDetalles, detalles } = useDetalles();

  return (
    <>
      <div>
        <h2>Buscador de Peliculas</h2>
      </div>

      <Buscador
        handleClick={handleClick}
        handleInput={handleInput}
        text={text}
      />

      <Peliculas
        verDetalles={verDetalles}
        detalles={detalles}
        peliculas={peliculas}
      />
    </>
  );
}

export default App;
