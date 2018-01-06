/*------------------------------ 
	menu-responsive
------------------------------*/
$(function(){
	
	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btnMenu'),
		icono = $('#btnMenu .icono'),
		enlaces_lateral_o = $('#enlaces_lateral_o'),
		desplazar = $('#desplazar');

	if (ancho < 700){
		enlaces.hide();
		icono.addClass('fa-bars');
	}

	/*btnMenu.on('click', function(e){
		enlaces.slideToggle();
		icono.toggleClass('fa-bars');
		icono.toggleClass('fa-times');	

	});*/

	$(window).on('resize', function(){
		if ($(this).width() > 700) {
			enlaces.show();
			icono.addClass('fa-times');
			icono.removeClass('fa-bars');
		}else{
			enlaces.hide();
			icono.addClass('fa-bars');
			icono.removeClass('fa-times');
		}
	});

});
/*------------------------------ 
	Fin menu-responsive
------------------------------*/

$(function(){
	
	var btnMenu = $('#btnMenu'),
		enlaces_lateral_o = $('#enlaces_lateral_o'),
		desplazar = $('#desplazar')
		cerrar_enlaces_lateral_o = $('#cerrar_enlaces_lateral_o');

	btnMenu.on('click', function(e){
		enlaces_lateral_o.removeClass('enlaces_lateral_o');
		enlaces_lateral_o.addClass('mostra_enlaces_lateral_o');
		
		desplazar.addClass('desplazar');
		
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";		
	});

	cerrar_enlaces_lateral_o.on('click', function(e){
		enlaces_lateral_o.removeClass('mostra_enlaces_lateral_o');
		enlaces_lateral_o.addClass('enlaces_lateral_o');

		desplazar.removeClass('desplazar');
		document.body.style.backgroundColor = "white";		
	});

	

});

$(function(){
	new WOW().init();
});

$(function(){
	smoothScroll.init({
		    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
		    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels

	});
});







/*-------------------------
	modalImagen
--------------------------*/
var modal = document.getElementById('modalImagen');

var modalImg = document.getElementById('contenidoModalImagen');
var captionText = document.getElementById('textoModalImagen');

function modalImagen(imagenes){
	var img = document.getElementById(imagenes); 
	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("cerrarModalImagen")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

modal.ondblclick  = function() { 
    modal.style.display = "none";
}

/*-------------------------------
	Fin modalImagen
--------------------------------*/
	
