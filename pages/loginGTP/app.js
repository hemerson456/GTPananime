function PlayAudio(){
    document.getElementById("musica1").play();
}

function habilitarBoton() {
    let inputCorreo = document.querySelector('.bloq-correo-form-email');
    let inputPassword = document.querySelector('.bloq-correo-form-password');
    let checkbox = document.getElementById('checkbox');
    let botonIr = document.querySelector('.bloq-submit');
    let checkboxError = document.getElementById('checkbox-error');

    // Verifica si el correo tiene una "@" y el password tiene contenido, además de si el checkbox está marcado
    if (inputCorreo.value.includes('@') && inputPassword.value.trim() !== '' && checkbox.checked) {
        botonIr.removeAttribute('disabled');
        botonIr.classList.add('color-blue'); // Agrega la clase cuando todos los campos están completos
        checkboxError.style.display = 'none'; // Oculta el mensaje de error si está marcado
    } else {
        botonIr.setAttribute('disabled', '');
        botonIr.classList.remove('color-blue'); // Elimina la clase cuando los campos no cumplen con los requisitos
    }
}

function verificarCheckbox() {
    let checkbox = document.getElementById('checkbox');
    let checkboxError = document.getElementById('checkbox-error');

    // Si el checkbox no está marcado, muestra el mensaje de error
    if (!checkbox.checked) {
        checkboxError.style.display = 'block'; // Muestra la advertencia
    } else {
        checkboxError.style.display = 'none'; // Oculta la advertencia
    }
}

// Función para manejar la tecla Enter y enviar el formulario si está habilitado
function verificarEnter(event) {
    let botonIr = document.querySelector('.bloq-submit');
    let checkbox = document.getElementById('checkbox');
    let checkboxError = document.getElementById('checkbox-error');

    // Verifica si se presiona la tecla Enter y si el botón está habilitado
    if (event.key === 'Enter') {
        event.preventDefault();  // Evita que se recargue la página
        if (!checkbox.checked) {
            checkboxError.style.display = 'block'; // Muestra la advertencia si el checkbox no está marcado
        } else if (!botonIr.disabled) {
            botonIr.click();  // Simula el click del botón si el botón no está deshabilitado
        }
    }
}



function redirigir() {
    // Verifica si el botón está habilitado antes de proceder
    let botonIr = document.querySelector('.bloq-submit');

    if (!botonIr.hasAttribute('disabled')) {
        // Redirige a la página users.html
        window.location.href = '../../index.html';
    }
}
//let inputCorreo = document.querySelector('.bloq-correo-form-email');


//inputCorreo.addEventListener('input', habilitarBoton)




function activaDay(){
    let ide = document.getElementById("bton-dia");
    ide.classList.toggle("active1")
}

function activaNigth(){
    let noch = document.getElementById("bton-noche");
    noch.classList.toggle("active2")
}

function bodys(){
    let bodys = document.getElementById("style2");
    bodys.classList.toggle("bodys2")
}

function globa2(){
    let desactivar = document.getElementById("globals");
    desactivar.classList.toggle("globales_")
}

function box_color(){
    let desactivar = document.getElementById("mod-night");
    desactivar.classList.toggle("box_night")
}




