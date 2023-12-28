/*musica que da con el boton de play*/
function play(){
    let element = document.getElementById("miPlay")
    element.classList.toggle("active3");
}

function stop(){
    let element = document.getElementById("miPlay2")
    element.classList.toggle("active4");
}
function PlayAudio(){
    document.getElementById("musica1").play();
}
function pauseAudio() {
    document.getElementById("musica1").pause();
};


/*body saludo*/
function Entry(){
    document.getElementById("entrada").play();
};
