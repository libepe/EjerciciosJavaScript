

let primero=document.getElementById("primero");

let segundo=document.getElementById("segundo");

let resultado=document.getElementById("resultado");

primero.onkeydown=function(evt){
    console.log(evt);
}
segundo.onkeydown=function(evt){
    console.log(evt);
}

let botonsuma=document.getElementById("suma");
suma.onfocus=function(){
    this.style.backgroundColor="green"
}
suma.onblur=function(){
    this.style.backgroundColor="white"
}
suma.onclick=function(){
    let primero=document.getElementById("primero");
    let segundo=document.getElementById("segundo");
    let suma=Number(primero.value)+Number(segundo.value);
    let resultado=document.getElementById("resultado");
    resultado.value=suma;
}

let botonresta=document.getElementById("resta");
resta.onfocus=function(){
    this.style.backgroundColor="red"
}
resta.onblur=function(){
    this.style.backgroundColor="white"
}
resta.onclick=function(){
    let primero=document.getElementById("primero");
    let segundo=document.getElementById("segundo");
    let suma=Number(primero.value)-Number(segundo.value);
    let resultado=document.getElementById("resultado");
    resultado.value=suma;
}

let botonmultiplica=document.getElementById("multiplica");
multiplica.onfocus=function(){
    this.style.backgroundColor="blue"
}
multiplica.onblur=function(){
    this.style.backgroundColor="white"
}
multiplica.onclick=function(){
    let primero=document.getElementById("primero");
    let segundo=document.getElementById("segundo");
    let suma=Number(primero.value)*Number(segundo.value);
    let resultado=document.getElementById("resultado");
    resultado.value=suma;
}

let botondivision=document.getElementById("division");
division.onfocus=function(){
    this.style.backgroundColor="yellow"
}
division.onblur=function(){
    this.style.backgroundColor="white"
}
division.onclick=function(){
    let primero=document.getElementById("primero");
    let segundo=document.getElementById("segundo");
    let suma=Number(primero.value)/Number(segundo.value);
    let resultado=document.getElementById("resultado");
    resultado.value=suma;
}

    



       









