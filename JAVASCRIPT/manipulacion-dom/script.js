//Manipulacion del DOM
//Nos permite interactuar con un documento, modificar su estructura, estilo y contenido

//Seleccionar elementos del DOM:
//Por ID
//Obteniendo por ID la etiqueta "titulo"
//Nos permite acceder a todas sus propiedades
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.textContent, titulo.innerText);

titulo.textContent = "este es el nuevo titulo";

//Eventos(addEventListener, onClick, onChange)
let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    alert("este boton ha sido clickeado")

    let container = document.getElementById("container");
    let parrafo = document.createElement("p");
    parrafo.textContent ="este es le parrafo creado";
    container.append(parrafo);
});

