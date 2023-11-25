function hamburguesa(){
    let element = document.getElementById("deslizar");
    element.classList.toggle("header__nav-ul3");
}

document.addEventListener("DOMContentLoaded", function () {
    const rotacionImage = document.querySelector(".rotacion-image");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function moveToIndex(index) {
        currentIndex = index;
        rotacionImage.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 7;
        moveToIndex(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 7) % 7;
        moveToIndex(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    const interval = setInterval(nextSlide, 6000);//6000 es los milisegundos osea 6s equivale a 6000ms

    // Detener el intervalo al pasar el ratón sobre el carrusel
    rotacion.addEventListener("mouseenter", () => clearInterval(interval));

    // Reanudar el intervalo al retirar el ratón del carrusel
    rotacion.addEventListener("mouseleave", () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 6000);//6000 es los milisegundos osea 6s equivale a 6000ms
    });
});


$(document).ready(function(){
    
    // Agregar clase active
    $('.etiquetas_list .category_item[category="all"]').addClass('ct_item-active');

    // Filtrar
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // Agregar clase active a la categoría seleccionada
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // Ocultar productos
        $('.anime-li').css('transform', 'scale(0)');
        function hideProduct(){
            $('.anime-li').hide();
        }
        setTimeout(hideProduct, 400);

        // Mostrar productos correspondientes a las categorías seleccionadas
        function showProduct(){
            if (catProduct === 'all') {
                $('.anime-li').show();
                $('.anime-li').css('transform', 'scale(1)');
            } else {
                // Separa las categorías por comas y las convierte en un arreglo
                var categories = catProduct.split(',');
                for (var i = 0; i < categories.length; i++) {
                    var category = categories[i].trim(); // Elimina espacios en blanco
                    $('.anime-li[category*="'+category+'"]').show();
                    $('.anime-li[category*="'+category+'"]').css('transform', 'scale(1)');
                }
            }
        }
        setTimeout(showProduct, 400);
    });

    // Hacer que la categoría "all" muestre todos los productos
    $('.category_item[category="all"]').click(function(){
        $('.anime-li').show();
        $('.anime-li').css('transform', 'scale(1)');
    });

});
  

function flechas(){
    let element = document.getElementById("flechas");
    element.classList.toggle("arrow");
}


function funcion(){
    let element = document.getElementById("list1");
    element.classList.toggle("act_style");
}


function buscado(){
    let element = document.getElementById("buscadores");
    element.classList.toggle("act_buscador");
}

function centrado(){
    let element = document.getElementById("centrado-bot");
    element.classList.toggle("act_centrar");
}


//buscador operando
document.addEventListener("DOMContentLoaded", function () {
    const buscadorInput = document.getElementById("buscadores");
  
    buscadorInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const filtro = buscadorInput.value.toLowerCase();
        const listaItems = document.querySelectorAll(".anime-ul li a"); // Cambia el selector a ID
  
        listaItems.forEach(function (item) {
          const textoItem = item.textContent.toLowerCase();
          const itemPadre = item.parentNode;
  
          if (textoItem.includes(filtro) || filtro.trim() === "") {
            itemPadre.style.transform = "scale(1)";
            itemPadre.style.transition = "transform 400ms";
            itemPadre.style.display = "block";
          } else {
            itemPadre.style.display = "none";
            itemPadre.style.transform = "scale(0)";
            itemPadre.style.transition = "transform 400ms";
          }
        });
      }
    });
});
  