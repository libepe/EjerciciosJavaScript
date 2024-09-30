// Asigno el mismo evento a todos los botones
for (elemento of document.getElementsByTagName("button")) {
    elemento.addEventListener("click", operacion);
}
 
function operacion() {
    let operacion=this.innerHTML;
    let [numero1, numero2] = obtenerNumeros();
    let resultado=0;
    switch(operacion){
        case "+": resultado=numero1 + numero2;break;
        case "-": resultado=numero1 - numero2;break;
        case "*": resultado=numero1 * numero2;break;
        case "/": resultado=numero1 / numero2;break;
    }
    
    // Muestro el valor
    ponerNumero(resultado);
}
 
 
// Interacción con el HTML
function obtenerNumeros() {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    return [Number(numero1.value), Number(numero2.value)];
}
 
function ponerNumero(numero) {
    let resultado = document.getElementById("resultado");
    resultado.value = numero;
}