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


/*languaje*/
document.addEventListener('DOMContentLoaded', function () {
    // Activa la bandera de Japón por defecto en todos los capítulos
    activateDefaultFlags();
});

function activateDefaultFlags() {
    // Recorre todos los contenedores de capítulos
    document.querySelectorAll('.contenedor1__reproductor').forEach(chapterContainer => {
        // Encuentra la bandera de Japón en el contenedor
        let defaultFlag = chapterContainer.querySelector('.bandera.japan');

        // Ajusta la opacidad de la bandera
        defaultFlag.classList.add("active_country");

        // Encuentra la otra bandera y ajusta su opacidad
        let otherFlag = chapterContainer.querySelector('.bandera.mexico');
        otherFlag.classList.remove("active_country");

        // Agrega el evento clic a las banderas
        defaultFlag.addEventListener('click', function () {
            toggleOpacity(this, 'mexico');
        });

        otherFlag.addEventListener('click', function () {
            toggleOpacity(this, 'japan');
        });
    });
}

function toggleOpacity(clickedElement, otherElementClass) {
    // Encuentra el contenedor del capítulo clicado
    let chapterContainer = clickedElement.closest('.contenedor1__reproductor');

    // Recorre las banderas dentro del contenedor y ajusta la opacidad
    chapterContainer.querySelectorAll('.bandera').forEach(flag => {
        if (flag === clickedElement) {
            flag.classList.add("active_country");
        } else {
            flag.classList.remove("active_country");
        }
    });

    // Recorre las otras banderas dentro del contenedor y ajusta la opacidad
    chapterContainer.querySelectorAll('.' + otherElementClass).forEach(otherFlag => {
        otherFlag.classList.remove("active_country");
    });
}


/*activar*/
let bloqueActivo = null;

function cambiarmx(elemento){
    if (bloqueActivo !== null) {
        bloqueActivo.classList.remove('contenedor1_jpn', 'contenedor1_mx');
        bloqueActivo.style.display = 'none';
    }

    if (elemento.classList.contains('contenedor1_jpn')) 
    {
        elemento.classList.remove('contenedor1_jpn');
        elemento.classList.add('contenedor1_mx');
    } 
    else if (elemento.classList.contains('contenedor1_mx')){
        elemento.classList.remove('contenedor1_mx');
        elemento.classList.add('contenedor1_jpn')
    }

    bloqueActivo = elemento;
}

function activarDesactivar(boton){
    const bloque1 = document.querySelector('contenedor1_jpn');
    const bloque2 = document.querySelector('contenedor1_mx');
    if (boton === 'boton1'){
        bloque1.style.display = 'flex';
        bloque2.style.display = 'none';
        
        bloque1.removeEventListener('click', cambiar2);
        bloque2.addEventListener('click', cambiar2);
    }

    else if (boton === 'boton2'){
        bloque1.style.display = 'none';
        bloque2.style.display = 'flex';

        bloque2.removeEventListener('click', cambiar2);
        bloque1.addEventListener('click', cambiar2);

    }
}


/*languaje*/



function main() {
    let element = document.getElementById("principal")
    element.classList.toggle("active_principal");
}
function episodes() {
    let element = document.getElementById("episodes")
    element.classList.toggle("active_episodes");
}
function lateralimg(){
    let element = document.getElementById("lateral")
    element.classList.toggle("block_lateral");
}
function lateralimg(){
    let element = document.getElementById("lateral")
    element.classList.toggle("block_lateral");
}
function anime(){
    let element = document.getElementById("titulo_anime")
    element.classList.toggle("modi_title-anime");
}
function buttonr(){
    let element = document.getElementById("miCheckbox")
    element.classList.toggle("active1");
}

function buttons(){
    let element = document.getElementById("miCheckbox2")
    element.classList.toggle("active2");
}


/*imagen ge tu zoinanime*/
function sun(){
    let element = document.getElementById("activetu")
    element.classList.toggle("zonanime3");
}
function nigth(){
    let element = document.getElementById("activeti")
    element.classList.toggle("zonanime1");
}
/*imagen ge tu zoinanime*/


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