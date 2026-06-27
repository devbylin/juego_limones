let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ALTURA_LIMON = 20;
const ANCHO_LIMON = 20;

let personajeX = canvas.width/2;
let personajeY = canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE);
let limonX = canvas.width / 2;
let limonY = 5;

function iniciar() {
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

function dibujarSuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "red";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}
    // HACER UN COMIT 
function moverIzquierda(){
    personajeX = personajeX-10;
    actualizarPantalla();
    deteectarColision();
}
function moverDerecha(){
    personajeX = personajeX+10;
    actualizarPantalla();
    deteectarColision();

}

function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
  
}
function dibujarLimon() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(limonX, limonY,ALTURA_LIMON, ANCHO_LIMON);
}
function bajarLimon(){
    limonY = limonY + 10;
    dibujarLimon();
    actualizarPantalla();
}
function deteectarColision(){
    if (limonX + ANCHO_LIMON > personajeX && limonX < personajeX + ANCHO_PERSONAJE &&
    limonY + ALTURA_LIMON > personajeY && limonY < personajeY + ALTURA_PERSONAJE ){
        alert("ATRAPADO!!!")

    }
}