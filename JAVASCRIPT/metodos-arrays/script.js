//array lista ne python
const arreglo = [1,2,3];

//objetos como un diccinario python
//compuesto por clave y valor
const objeto = {
    name: "Joaquin",
    age: 17
};
console.log(arreglo[0]);
console.log("edad =",objeto.age);

//metodos de arreglos
//length -> longitud de arreglo
const longitud = arreglo.length;
console.log(longitud);

//push (valor) -> agrega un elemento al final
//equivalente al append de python
arreglo.push("Joaquin");
console.log("cadena =", arreglo);

//pop() elimina el ultimo elemento de un arrgelo
// si queremos lo podemos guardar en una variable
const ultimo = arreglo.pop();
console.log("ultimo =", ultimo);

//unshift (valor) -> agrega un elemento al principio del arreglo
arreglo.unshift("Joaquin");
console.log(arreglo);

//shift() elimina el primer valor de un arreglo, tambien lo guarda
const primero = arreglo.shift();
console.log("primero =", primero);

//.forEach(() => {})
//SOLO RECORRE, no guarda los valores en ningun lado
arreglo.forEach( (item, index, arregloEntero) => {
    console.log("elemento =", item, "index =", index)
} );

//.map(() => {}) 
//recorre el arrgelo, lo modifica con una funcion y nos devuelve uno nuevo
const nuevoArreglo = arreglo.map((item, index) => {
    const num = 2;
    console.log("index",index, "item =", item);
    return (item += num);
});
console.log("nuevo arreglo =",nuevoArreglo);

//.filter(() => {}) 
//crea un nuevo array a partir de los elementos que cumplen cierta condicion
const arregloNum = [2,4,5,6];
const nuevoArregloNum = arregloNum.filter((item) => item % 2 === 0);
console.log("arregloNum",arregloNum);
console.log("nuevo arreglo num =",nuevoArregloNum);
