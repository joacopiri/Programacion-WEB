/*------------------------------------------------------------------------------------*/
// (1)
let boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    let checkbox = document.createElement("input")
    let container = document.getElementById("container");
    let text = document.getElementById("text").value;
    let li = document.createElement("li")
    let obj = {task: text, complete: checkbox.value}

    checkbox.type = "checkbox"
    li.textContent = obj.task;
    li.append(checkbox);  
    container.append(li);

    checkbox.addEventListener("change", function(){
        if (checkbox.checked) {
            li.remove()
        }
    });
});
/*------------------------------------------------------------------------------------*/
// (2)

/*------------------------------------------------------------------------------------*/
// (3)

/*------------------------------------------------------------------------------------*/
// (4)