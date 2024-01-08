/*musica que da con el boton de play*/
function play() {
    let element = document.getElementById("miPlay");
    element.classList.toggle("active3");
}

function stop() {
    let element = document.getElementById("miPlay2");
    element.classList.toggle("active4");
}

function PlayAudio() {
    let audio = document.getElementById("musica1");
    audio.play();

    // Agregar un evento para detectar cuando la reproducción ha terminado
    audio.addEventListener("ended", function () {
        // Quitar las clases al finalizar la reproducción
        document.getElementById("miPlay").classList.remove("active3");
        document.getElementById("miPlay2").classList.remove("active4");
    });
}

function pauseAudio() {
    document.getElementById("musica1").pause();
}
/*body saludo*/
function Entry(){
    document.getElementById("entrada").play();
};
