// Asignación de los eventos
document.getElementById("suma").addEventListener("click", sumar);
document.getElementById("resta").addEventListener("click", restar);
document.getElementById("multiplicacion").addEventListener("click", multiplicar);
document.getElementById("division").addEventListener("click", dividir);
 
// Funciones que implementan la lógica
function sumar() {
    // Obtengo los valores
    let [numero1, numero2] = obtenerNumeros();
    // Los sumo
    let suma = numero1 + numero2;
    // Muestro el valor
   ponerNumero(suma);
}
 
function restar() {
    // Obtengo los valores
    let [numero1, numero2] = obtenerNumeros();  // Los sumo
    let resta = numero1 - numero2;
    // Muestro el valor
   ponerNumero(resta);
}
 
function multiplicar() {
    // Obtengo los valores
    let [numero1, numero2] = obtenerNumeros();  // Los sumo
    let multiplicacion = numero1 * numero2;
    // Muestro el valor
    ponerNumero(multiplicacion);
}
 
 
function dividir() {
    // Obtengo los valores
    let [numero1, numero2] = obtenerNumeros();  // Los sumo
    let division = numero1 / numero2;
    // Muestro el valor
    ponerNumero(division);
}
 
function obtenerNumeros() {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    return [Number(numero1.value), Number(numero2.value)];
}
 
function ponerNumero(numero) {
    let resultado = document.getElementById("resultado");
    resultado.value = numero;
}