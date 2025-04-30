/*--------------TIPOS DE DEFINICIONES-------------------*/
var MiVariable = "Contenido de la variable"; //no se usa

//let -> solamente vive en el scrope declarado o en sus hijos
let MiVarible2 = "Pueden ser reescritos sus valores";
MiVarible2 = 9; //reasignacion del valor

//const -> variable constante no son reasignables los valores
const MiVariable3 = 10;
/*--------------TIPOS DE DEFINICIONES-------------------*/

/*-----------------TIPOS DE DATOS-----------------------*/
const text = "string";
const number = 2; //number
const booleanos = true; //boolean
//undefined -> valor no definido
//null -> vacio
/*-----------------TIPOS DE DATOS-----------------------*/

/*-------------------OPERADORES-------------------------*/
//aristmeticos: son todos los de matematicas + - / % *
//comparacion:
// == doble igual compara el valor del dato
// === compara el valor y el tipo de dato
// != distinto el valor
// !== distinto el valor y el tipo
// > < mayor, menor
// >= <= mayor o igual, menor o igual
/*-------------------OPERADORES-------------------------*/

/*-----------------CONDICIONALES------------------------*/
//if:
const edad = 20;
if (edad > 18) {
  console.log("sos mayor de edad"); //console.log = print "en pyton"
} else {
  console.log("sos menor de edad");
}
/*-----------------CONDICIONALES------------------------*/

/*--------------------SWITCH----------------------------*/
const dia = 1;
//switch:
switch (dia) {
  case 1:
    console.log("dia lunes");
    break;
  case 2:
    console.log("dia martes");
    break;
  default:
    console.log("dia no registrado");
}
/*--------------------SWITCH----------------------------*/

/*-------------------FUNCIONES--------------------------*/
//declaracion funcion clasica:
function saludar(nombre) {
  return `hola ${nombre}`;
}
console.log(saludar("Joaco"));

//arrow fuction:
//return explicito
const saludo = (nombre) => {
  return `hola ${nombre}`;
};
//return implicito
const saludo2 = (nombre) => `hola ${nombre}`;
//si el return implicito tiene mas de una linea va a estar entre parentesis
/*-------------------FUNCIONES--------------------------*/

/*--------------------ARREGLOS--------------------------*/
//Lista
const MiArreglo = [1, 2, "naranja", true];
console.log(MiArreglo[2]);

//Diccionario
const MiObjeto = {
  clave: "valor",
  nombre: "Joaquin",
  edad: 29,
  naranja2: "naranja2",
};
console.log(MiObjeto.naranja2);

//iteamos una lista con for
for (let i = 0; i < MiArreglo.length; i++) {
  console.log(MiArreglo[i]); //imprimi en pantalla el arreglo con su pocision
}
/*--------------------ARREGLOS--------------------------*/
