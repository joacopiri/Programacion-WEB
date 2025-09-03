/*Guardar la lista en localStorage para que no se borre al recargar.

Mostrar cuántos productos hay en total y cuántos ya se compraron.*/


let boton = document.getElementById("boton")

boton.addEventListener("click", function(){
    let button1 = document.createElement("button")
        button1.textContent = "Comprado"  
    let button2 = document.createElement("button")
        button2.textContent = "Eliminar"  
    let li = document.createElement("li")

    let container = document.getElementById("container")
    let text = document.getElementById("text").value
    let obj = {elemento: text}

    li.textContent = obj.elemento;
    li.append(button1)
    li.append(button2)
    container.append(li)

    button1.addEventListener("click", function(){
        li.classList.toggle("tachado")
    })
    button2.addEventListener("click", function(){
        li.remove()
    })
})

document.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        boton.click()
    }
})