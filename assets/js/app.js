//Cambio de imagen al seleccionarla
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgCargada')
            .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function(){
// Focus al textarea
    $('#btnEscribirMensaje').click(function(){
        $('#txtMensaje').focus();
    });

// Cerrar elemento
    $('#listaTuits').on('click','.listaTuits__cerrarTuit', function(){
        console.log($(this).parents('.seccionLeerTuit--tuit'));
        $(this).parents('.seccionLeerTuit--tuit').fadeOut();
    });

//Incrementa número de likes y cambia de color el corazón
    $('.seccionLeerTuit').on('click', '.seccionLeerTuit--heart' , function(evt){
       evt.preventDefault();
       var texto = $(this).parent().find('.incrementarLikes');
       var likes = parseInt(texto.text());
       texto.text(likes+1);
       $(this).parent().find('.seccionLeerTuit--heart').css('color','#F0D967');
    });

//Enviar mensaje
    $('#btnEnviarMensaje').click(function(evt){
        evt.preventDefault();
        evt.stopPropagation();

// Guarda valores de imagen
        var imgCargada =  $('#imgCargada').attr('src');
//Guarda texto
        var txtMensaje = $('#txtMensaje').val(); 

        if (txtMensaje != '' && imgCargada != 'assets/images/PollitoBN.png') {
            var tuit = `<div class="row seccionLeerTuit--tuit p-2 mb-2">
                <div class="col-lg-12">
                <i class="float-right fas fa-times-circle listaTuits__cerrarTuit"></i>
                </div>
                <div class="col-lg-4 ">
                  <img src="${ imgCargada }" alt="Avatar Tuit" class="seccionLeerTuit--avatar">
                </div>
                <div class="col-lg-8">
                  <p class="seccionLeerTuit--parrafo">${ txtMensaje }</p>
                </div>
                <div class="col-lg-12 text-right">
                  <i class="fas fa-heart seccionLeerTuit--heart"></i> <b class="incrementarLikes">0</b><b> Likes</b>
                </div>
              </div>`;

//Agregar tuit con variable que contiene la información
            $(tuit).hide().prependTo("#listaTuits").fadeIn("slow");

//Esconder alerta de validaciones
            $('.seccionEscribirTuit__alerta').css('display','none');
        }
        else{
//Mostrar alerta de validaciones
            $('.seccionEscribirTuit__alerta').css('display','inline-block');
        }
    });
});

