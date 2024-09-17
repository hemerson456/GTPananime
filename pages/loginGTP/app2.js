function PlayAudio(){
    document.getElementById("musica1").play();
}

function habilitarBoton() {
    let inputCorreo = document.querySelector('.bloq-correo-form-email');
    let inputPassword = document.getElementById('password');
    let inputPassword2 = document.getElementById('password2');
    let checkbox = document.getElementById('checkbox');
    let botonIr = document.querySelector('.bloq-submit');
    let passwordError = document.getElementById('password-error');

    // Verifica que las contraseñas coincidan
    if (inputPassword.value !== inputPassword2.value) {
        passwordError.style.display = 'block'; // Muestra el error si no coinciden
    } else {
        passwordError.style.display = 'none'; // Oculta el error si coinciden
    }

    // Verifica si el correo tiene una "@" y los passwords no están vacíos, además que el checkbox esté marcado
    if (inputCorreo.value.includes('@') && inputPassword.value.trim() !== '' && inputPassword2.value.trim() !== '' && inputPassword.value === inputPassword2.value && checkbox.checked) {
        botonIr.removeAttribute('disabled');
        botonIr.classList.add('color-blue');
    } else {
        botonIr.setAttribute('disabled', '');
        botonIr.classList.remove('color-blue');
    }
}

function validarContraseña() {
    let inputPassword = document.getElementById('password');
    let inputPassword2 = document.getElementById('password2');
    let passwordError = document.getElementById('password-error');

    // Si las contraseñas no coinciden, muestra la advertencia
    if (inputPassword.value !== inputPassword2.value) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

function verificarEnter(event) {
    if (event.key === 'Enter') {
        let checkbox = document.getElementById('checkbox');
        let checkboxError = document.getElementById('checkbox-error');

        // Si el checkbox no está marcado, evita el envío y muestra el error
        if (!checkbox.checked) {
            event.preventDefault();
            checkboxError.style.display = 'block';
        } else {
            checkboxError.style.display = 'none';
        }
    }
}



function redirigir() {
    // Verifica si el botón está habilitado antes de proceder
    let botonIr = document.querySelector('.bloq-submit');

    if (!botonIr.hasAttribute('disabled')) {
        // Redirige a la página users.html
        window.location.href = 'users.html';
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




