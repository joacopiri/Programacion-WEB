/*------------------------------------------------------------------------------------*/
// (1)
const productos=[]
productos.push(
    {nombre:"Naranja", precio:100,categoria:"fruta" },
    {nombre:"Banana",precio:50,categoria:"fruta"},
    {nombre:"Frutilla",precio:10,categoria:"fruta"},
    {nombre:"Lechuga",precio:40,categoria:"verdura"}
);
console.log(productos);
/*------------------------------------------------------------------------------------*/
// (2)
productos.forEach( (item, index) => {
    console.log("elemento =", item, "index =", index)
} );
/*------------------------------------------------------------------------------------*/
// (3)
const arrgeloProductos = productos.filter((item) => item.categoria === "fruta");
console.log("arrgeloProductos = ",arrgeloProductos);
/*------------------------------------------------------------------------------------*/
// (4)
const nombreProductos = productos.map((item) => {return item.nombre});
console.log(nombreProductos);
/*------------------------------------------------------------------------------------*/

