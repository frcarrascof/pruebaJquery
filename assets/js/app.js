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
    // Al presionar el botón de "Escribir Mensaje" hace focus al textarea
    $('#btnEscribirMensaje').click(function(){
        $('#txtMensaje').focus();
    });

    // Cerrar elemento
    $('#listaTuits').on('click','.listaTuits__cerrarTuit', function(){
        console.log($(this).parents('.seccionLeerTuit--tuit'));
        $(this).parents('.seccionLeerTuit--tuit').fadeOut();
    });

    //Incrementar Likes
    /*var likes = parseInt($('#incrementarLikes').text());
    $('.seccionLeerTuit').on('click', '.seccionLeerTuit--heart' , function(evt){
        evt.stopPropagation();

        $(this).each(function(){
            likes = likes++;
            alert(likes);
        });
    });*/
    var count = 1;
    $('.seccionLeerTuit').on('click', '.seccionLeerTuit--heart' , function(evt){
        evt.stopPropagation();
        likes = count++;
       $("#incrementarLikes").append(" "+likes);
       $(".seccionLeerTuit--heart").css('color','#F0D967');
    });

    //Enviar
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
                  <i class="fas fa-heart seccionLeerTuit--heart"></i><b> 0 Likes</b>
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

