function hamburguesa() {
    let element = document.getElementById("deslizar")
    element.classList.toggle("menuamborguesa");
}

function flechas() {
    let element = document.getElementById("flecha")
    element.classList.toggle("active_flechas");
}
function episodios() {
    let element = document.getElementById("capitulos")
    element.classList.toggle("active_capitulos");
}

function background() {
    let element = document.getElementById("body")
    element.classList.toggle("active_background");
}

function footer() {
    let element = document.getElementById("footers")
    element.classList.toggle("active_footers");
}

function laterals() {
    let element = document.getElementById("lateral")
    element.classList.toggle("active_lateral");
}
function main() {
    let element = document.getElementById("principal")
    element.classList.toggle("active_principal");
}
function episodes() {
    let element = document.getElementById("episodes")
    element.classList.toggle("active_episodes");
}

/*function cap1(){
    let element = document.getElementById("capitulo1")
    element.classList.toggle("repro_capitulos");
}*/
function mostrarReproductor(capituloId) {
    // Obtén el elemento de reproducción del capítulo actual
    let element = document.getElementById(capituloId);
    
    // Obtén todos los elementos con la clase "contenedor1__reproductor"
    let reproductores = document.querySelectorAll(".contenedor1__reproductor");
    
    // Oculta todos los elementos de reproducción
    reproductores.forEach((reproductor) => {
        reproductor.classList.remove("repro_capitulos");
    });
    
    // Muestra el elemento de reproducción del capítulo seleccionado
    element.classList.add("repro_capitulos");
}

let episodioSeleccionado = null;

function agregarHoverList(element) {
    // Verifica si hay un elemento de la lista seleccionado previamente
    if (episodioSeleccionado !== null) {
        // Quita la clase "hoverlist" del elemento previamente seleccionado
        episodioSeleccionado.classList.remove("hoverlist");
    }

    // Agrega la clase "hoverlist" al elemento de la lista actual
    element.classList.add("hoverlist");

    // Establece el elemento de la lista actual como el seleccionado
    episodioSeleccionado = element;
}