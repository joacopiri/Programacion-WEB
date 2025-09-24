/*Guardar la lista en localStorage para que no se borre al recargar.*/

let liTValue = 0 
let resultadoT = document.createElement("h3")
let containerT = document.getElementById("containerT")
containerT.append(resultadoT)
resultadoT.append(liTValue)

let liCValue = 0 
let resultadoC = document.createElement("h3")
let containerC = document.getElementById("containerC")
containerC.append(resultadoC)
resultadoC.append(liCValue)

let boton = document.getElementById("boton")

boton.addEventListener("click", function(){
    let botonC = document.createElement("button")
        botonC.textContent = "Comprado"  
    let botonE = document.createElement("button")
        botonE.textContent = "Eliminar"  
    let li = document.createElement("li")
    let container = document.getElementById("container")
    let text = document.getElementById("text").value
    let obj = {elemento: text}

    li.textContent = obj.elemento
    li.append(botonC)
    li.append(botonE)
    container.append(li)

    liTValue += 1
    resultadoT.textContent = liTValue
    localStorage.setItem("Productos totales", liTValue);

    botonC.addEventListener("click", function(){
        li.classList.toggle("tachado")
        if(li.classList == "tachado"){
            liCValue += 1 
            resultadoC.textContent = liCValue
            localStorage.setItem("Productos comprados", liCValue);
        }
        else if(li.classList == ("")){
            liCValue -= 1 
            resultadoC.textContent = liCValue
            localStorage.setItem("Productos comprados", liCValue);
        }
    })
    botonE.addEventListener("click", function(){
        li.remove()
        liTValue -= 1
        resultadoT.textContent = liTValue
        localStorage.setItem("Productos totales", liTValue);
        if(liCValue === 0){
            return 
        }
        liCValue -= 1
        resultadoC.textContent = liCValue
        localStorage.setItem("Productos comprados", liCValue);
    })
})

document.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        boton.click()
    }
})