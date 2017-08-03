

$(document).ready(function(){
	$("#form-tw").on('submit', function(event){
		var text = $("#area-texto").val()
		event.preventDefault();
		$("#comentarios").append(
		'<div class="cont_coment">'
		+'<div class="coment">'
		+ text
		+'</div>'
		+'<i class="col-md-1 likeable fa-heart" aria-hidden="true">'
		+'</i>'
		+'<p class="likep">'
		+'0'
		+'</p>'
		+'<div class="col-md-6 trash">'
		+'<img src="img/trash.png">'
		+'</div>'
		+'</div>')

	});

	$('#comentarios').on('click', '.trash', function(){
		$(this).parent().fadeOut(400);
	});

	$('#comentarios').on('click', '.likeable', function(){
		$(this).toggleClass('likeable2')

	$(this).siblings('.likep').html(parseInt($(this).siblings('.likep').html()) + 1)



 	});


});

	


		/*
		var like = 0

		function like(){
			$('.likep').html=likes;
			likes=likes+1;
		} 

----------------------------------------

    	var contador = 0;
		$('#comentarios').on('click', '.likep' function(){
		contador++;
	}
}
------------------------------------------
		
   		var contador = 0;
		$('#comentarios').click('.likep'function() {
  		contador++;
		});
-------------------------------------------
		var likes = 0;
		
	   $("#comentarios").click(function(){
      	likes++;
		$(".likep").html();

		*/