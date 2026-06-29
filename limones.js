let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
//constantes 
const ALTURA_SUELO = 20;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ALTURA_LIMON = 20;
const ANCHO_LIMON = 20;
//variables 
let personajeX = canvas.width/2;
let personajeY = canvas.height - (ALTURA_SUELO + ALTURA_PERSONAJE);
let limonX = canvas.width / 2;
let limonY = 5;
let puntaje = 0;
let vidas = 3;
let intervalo;
let juegoActivo = true;
let velocidadCaida = 200; //velocidad inicial
let juegoPausado = false;

function iniciar() {
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();

    if(intervalo) clearInterval(intervalo);
    intervalo = setInterval(bajarLimon,velocidadCaida);
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
    personajeX = personajeX-20;
    actualizarPantalla();   
}
function moverDerecha(){
    personajeX = personajeX+20;
    actualizarPantalla();
    
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
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();

}
function detectarAtrapado() {
    if (limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE) {
        aparecerLimon();
        puntaje = puntaje + 1;
        mostrarEnSpan("txtPuntaje", puntaje);

                  // a) Si puntaje es 3: velocidad 150
        if (puntaje === 3) {
            velocidadCaida = 150;
            cambiarVelocidad();
        }
        if (puntaje === 6) {
            velocidadCaida = 100;
            cambiarVelocidad();
        }
        if (puntaje === 10) {
            juegoActivo = false;
            clearInterval(intervalo);
            
            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#FFD700";
            ctx.font = "bold 60px Arial";
            ctx.textAlign = "center";
            ctx.fillText("🍋 ¡GANADOR! 🍋", canvas.width / 2, canvas.height / 2 - 40);
            
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("TIENES LOS LIMONES,", canvas.width / 2, canvas.height / 2 + 30);
            ctx.fillText("AHORA TE FALTA SAL Y TEQUILA 🥃", canvas.width / 2, canvas.height / 2 + 80);
            
            
        }
    }


}   
  
function detectarPiso(){
    if(limonY + ALTURA_LIMON == canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas = vidas - 1;
        mostrarEnSpan("txtVidas", vidas);
        if (vidas <= 0) {
            juegoActivo = false;
            clearInterval(intervalo);

            ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = "#ff2a00";
            ctx.font = "bold 60px Arial";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 40);
            
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("SUERTE PARA PROXIMA,", canvas.width / 2, canvas.height / 2 + 30);
            ctx.fillText("PILAS", canvas.width / 2, canvas.height / 2 + 80);
            
        
        }
        
    }
}
function aparecerLimon(){
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}
function reiniciarJuego(){
    vidas = 3;
    puntaje = 0;
    juegoActivo = true;
    velocidadCaida 
    mostrarEnSpan("txtVidas", vidas);
    mostrarEnSpan("txtPuntaje", puntaje);
    iniciar();
}
