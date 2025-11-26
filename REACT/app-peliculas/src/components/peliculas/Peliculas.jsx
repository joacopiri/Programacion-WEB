import Detalles from "../detalles/Detalles";

function Peliculas({ verDetalles, detalles, peliculas }) {
  return (
    <>
      {peliculas.Response === "True" ? (
        <div className="catalogo">
          {peliculas.Search.map((pelicula, index) => (
            <div key={index}>
              <div className="tarjetas">
                <img
                  className="contenedor-imagen"
                  src={pelicula.Poster}
                  alt={pelicula.Title}
                />

                <div className="informacion">
                  <h3>
                    {pelicula.Title} "{pelicula.Year}"
                  </h3>

                  {detalles === true && (
                    <Detalles Type={pelicula.Type} imdbID={pelicula.imdbID} />
                  )}

                  <button
                    onClick={() => {
                      verDetalles({
                        tipo: pelicula.Type,
                        imdbID: pelicula.imdbID,
                      });
                    }}
                  >
                    {detalles ? "Ocultar detalles" : "Ver detalles"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        peliculas.Response === "False" && (
          <div className="catalogo">
            <h3>No se encontraron peliculas...</h3>
          </div>
        )
      )}
    </>
  );
}
export default Peliculas;
