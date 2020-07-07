function favoritar(seletor){

	$(seletor).html('<i class="fa fa-heart" aria-hidden="true"></i>');

}


                       $( window ).ready(function() {

                               var itensMesmoHorario = $('#itensMesmoHorario').owlCarousel({
                                        loop:false,
                                        margin:30,
                                        items: 5.5,
                                        autoplay: false,
                                        center: true,
                                        navText: [
                                            '<img src="images/esquerda.png" alt="Anterior">',
                                            '<img src="images/direita.png" alt="Próximo">'
                                        ], 
                                        navContainer: '.custom-nav-banner',
                                        autoplayTimeout:2500,
                                        startPosition:1,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                        responsive:{
                                            0:{
                                                loop:false,
		                                        margin:12,
		                                        items: 1.5,
		                                        autoplay: false,
		                                        center: true,
		                                        navText: [
		                                            '<img src="images/esquerda.png" alt="Anterior">',
		                                            '<img src="images/direita.png" alt="Próximo">'
		                                        ], 
		                                        navContainer: '.custom-nav-banner',
		                                        autoplayTimeout:2500,
		                                        startPosition:0,
		                                        //dotsContainer: '#carousel-custom-dots',
		                                        autoplayHoverPause:true,
                                            },
                                            600:{
                                                loop:false,
		                                        margin:12,
		                                        items: 2.5,
		                                        autoplay: false,
		                                        center: true,
		                                        navText: [
		                                            '<img src="images/esquerda.png" alt="Anterior">',
		                                            '<img src="images/direita.png" alt="Próximo">'
		                                        ], 
		                                        navContainer: '.custom-nav-banner',
		                                        autoplayTimeout:2500,
		                                        startPosition:0,
		                                        //dotsContainer: '#carousel-custom-dots',
		                                        autoplayHoverPause:true,
                                            },
                                            1000:{
                                                loop:false,
		                                        margin:12,
		                                        items: 3.5,
		                                        autoplay: false,
		                                        center: true,
		                                        navText: [
		                                            '<img src="images/esquerda.png" alt="Anterior">',
		                                            '<img src="images/direita.png" alt="Próximo">'
		                                        ], 
		                                        navContainer: '.custom-nav-banner',
		                                        autoplayTimeout:2500,
		                                        startPosition:1,
		                                        //dotsContainer: '#carousel-custom-dots',
		                                        autoplayHoverPause:true,
                                            },
                                            1200:{
                                                loop:false,
		                                        margin:30,
		                                        items: 5.5,
		                                        autoplay: false,
		                                        center: true,
		                                        navText: [
		                                            '<img src="images/esquerda.png" alt="Anterior">',
		                                            '<img src="images/direita.png" alt="Próximo">'
		                                        ], 
		                                        navContainer: '.custom-nav-banner',
		                                        autoplayTimeout:2500,
		                                        startPosition:1,
		                                        //dotsContainer: '#carousel-custom-dots',
		                                        autoplayHoverPause:true,
		                                        //animateIn: 'fadeIn', // add this
		                                        //animateOut: 'fadeOut', // and this
                                            }
                                        }
                                       
                                });

                               var saidasDeMergulho = $('#saidasDeMergulho').owlCarousel({
                                        loop:true,
                                        margin:15,
                                        items: 3,
                                        autoplay: true,
                                        center: true,
                                        navText: [
                                            '<img src="images/esquerda.png" alt="Banner anterior">',
                                            '<img src="images/direita.png" alt="Próximo Banner">'
                                        ], 
                                        navContainer: '.custom-nav-banner',
                                        autoplayTimeout:2500,
                                        //dotsContainer: '#carousel-custom-dots',
                                        autoplayHoverPause:true,
                                        //animateIn: 'fadeIn', // add this
                                        //animateOut: 'fadeOut', // and this
                                        responsive:{
                                            0:{
                                                items:1.5,
                                                margin:5,
                                                loop:true,
                                                autoplay:false,
                                                center:true
                                            },
                                            600:{
                                                items:1.5
                                            },
                                            1000:{
                                                items:1.5
                                            },
                                            1200:{
                                                items:3
                                            }
                                        }
                                       
                                });

                       });




function sendComentarios(){

  var comentario = $("#comentario").val();
  var nome = "Diogenes";
  var sobrenome = "Junior";

  if(comentario!=""){

  $("#comentario").val("");

              

                  $("#caixaDasMensagensInternas").append('<div class="row linha-comentario comentario-ident-18"> <div class="col-3"> <div class="foto-perfil-comentario" style="background:url(\'images/perfil.png\') #000 no-repeat;background-size:cover;background-position:center center;">&nbsp;</div></div><div class="col-9"> <div class="balao-comentario"><b>'+nome+' '+sobrenome+'</b><br>'+comentario+'</div><div class="meta-comentario text-right"></div></div></div>')
                  // FORÇAR A DIV DAS MENSAGENS A FICAR NA PARTE DE BAIXO
                  var objDiv = document.getElementById("caixaDasMensagensInternas");
                  objDiv.scrollTop = objDiv.scrollHeight;


            
  }

}



 function sortear(){
           $(".word").hide(0);
           $(".vencedor").fadeIn("500");
           $("#sort").hide();
           $("#continuar").fadeIn();
         }

         function continuar(){
          location.reload();
         }
              
                    setInterval(function(){
                       shuffle();
                    }, 1500);

              function shuffle(){
                  $(".content-shuffle").each(function(){
                      var divs = $(this).find('.word');
                      for(var i = 0; i < divs.length; i++) $(divs[i]).remove();            
                      //the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
                      var i = divs.length;
                      if ( i == 0 ) return false;
                      while ( --i ) {
                         var j = Math.floor( Math.random() * ( i + 1 ) );
                         var tempi = divs[i];
                         var tempj = divs[j];
                         divs[i] = tempj;
                         divs[j] = tempi;
                       }
                      for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
                  });                    
              }