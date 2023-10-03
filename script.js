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
  

function funtion(){
    let element = document.getElementById("list1");
    element.classList.toggle("act_style");
}

function funcion(){
    let element = document.getElementById("list2");
    element.classList.toggle("act_style");
}



