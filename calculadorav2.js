// Asignación de los eventos
document.getElementById("suma").addEventListener("click", sumar);
document.getElementById("resta").addEventListener("click", restar);
document.getElementById("multiplicacion").addEventListener("click", multiplicar);
document.getElementById("division").addEventListener("click", dividir);
 
// Funciones que implementan la lógica
function sumar() {
    // Obtengo los valores
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    // Los sumo
    let suma = Number(numero1.value) + Number(numero2.value);
    // Muestro el valor
    let resultado = document.getElementById("resultado");
    resultado.value = suma;
}
 
function restar () {
    // Obtengo los valores
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    // Los sumo
    let suma = Number(numero1.value) - Number(numero2.value);
    // Muestro el valor
    let resultado = document.getElementById("resultado");
    resultado.value = suma;
}
 
function multiplicar () {
    // Obtengo los valores
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    // Los sumo
    let suma = Number(numero1.value) * Number(numero2.value);
    // Muestro el valor
    let resultado = document.getElementById("resultado");
    resultado.value = suma;
}
 
 
 function dividir() {
    // Obtengo los valores
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    // Los sumo
    let suma = Number(numero1.value) / Number(numero2.value);
    // Muestro el valor
    let resultado = document.getElementById("resultado");
    resultado.value = suma;
}