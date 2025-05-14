/*------------------------------------------------------------------------------------*/
// (1)
const peliculas=[
    {titulo:"La Leyenda", director:"Lian LEYENDA", año:"2007", genero:"Accion"},
    {titulo:"Fede Villano", director:"Joaquin Pirillo", año:"2025", genero:"Terror"},
    {titulo:"El patito feo", director:"Thomas Avila", año:"2004", genero:"Infantil"},
]
console.log(peliculas);
/*------------------------------------------------------------------------------------*/
// (2)
const peliculasNuevas = peliculas.unshift(
    {titulo:"YOU",director:"Christofer Nollan", año:"2017", genero:"Suspenso"},
);
console.log("Nueva pelicula =", peliculas);
/*------------------------------------------------------------------------------------*/
// (3)
const peliculasViejas = peliculas.shift();
/*------------------------------------------------------------------------------------*/
// (4)
console.log("Peliculas Viejas =", peliculas);
/*------------------------------------------------------------------------------------*/
