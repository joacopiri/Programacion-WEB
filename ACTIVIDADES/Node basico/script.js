/*------------------------------------------------------------------------------------*/
//IF
const num = 0; //prompt("ingrese un numero menor al 0, Luego un 0 y por ultimo uno mayor al 0");
if (num < 0) {
  console.log("Negativo");
} else if (num == 0) {
  console.log("Cero");
} else if (num > 0) {
  console.log("Positivo");
}
/*------------------------------------------------------------------------------------*/
//FOR
const numerospares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumapar = 0;
for (let i = 0; i < numerospares.length; i++) {
  if (numerospares[i] % 2 === 0) {
    sumapar += numerospares[i];
    console.log(`${numerospares[i]}`);
  }
}
console.log(`la suma de los pares es: ${sumapar}`);
/*------------------------------------------------------------------------------------*/
//FOR (version intermedia)
const numerosmultiplo = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sumamultiplo = 0;
for (let i = 0; i < numerosmultiplo.length; i++) {
  if (numerosmultiplo[i] % 3 === 0 && numerosmultiplo[i] % 5 !== 0) {
    sumamultiplo += numerosmultiplo[i];
    console.log(`${numerosmultiplo[i]}`);
  }
}
console.log(`la suma de los multiplos de 3 es: ${sumamultiplo}`);
/*------------------------------------------------------------------------------------*/
