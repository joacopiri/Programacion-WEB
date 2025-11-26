import "./Buscador.css";

function Buscador({handleClick, handleInput, text}) {
  return (
    <>
      <div className="div">
        <input value={text} onChange={handleInput} />
      </div>

      <div className="div">
        <button onClick={handleClick}>buscar</button>
      </div>
    </>
  );
}

export default Buscador;
