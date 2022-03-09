// Tu código aquí.

let botonRestar = document.querySelector("#restar")
botonRestar.onclick = restar

let botonSumar = document.querySelector("#sumar")
botonSumar.onclick = sumar

let contador
contador = document.querySelector("#counter").textContent;
let estilo


function restar(contador){

    console.log("resto")
    contador = document.querySelector("#counter").textContent;
    
    contador = contador - 1
 
    document.querySelector("#counter").textContent = contador;
    estilo = document.querySelector("#counter");

    
    if (contador < 0) {
        estilo.style.color = "red"
    }
    

}
function sumar(contador){

    console.log("sumo")
    contador = document.querySelector("#counter").textContent;
    contador = Math.floor(contador)
    console.log(typeof(contador))

    contador = contador + 1
 
    document.querySelector("#counter").textContent = contador;
    estilo = document.querySelector("#counter");
    
    if (contador > 0) {
        estilo.style.color = "blue"
    }
    
    }