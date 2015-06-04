// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){

	$("#reload-button").on("click", function(){
		$.ajax({
			type: "GET",
			url: "http://localhost:3000/comments",
			data: "",
			success: function(response){populate_ul(response)},
			error: function(){alert("Success: false");},
			dataType: "json"
		});
	});

	function populate_ul(items){
		$("ul").empty(); // Limpiamos toda la lista
		for(var i=0; i<items.length; i++){ //Añadimos los elementos enteros de nuevo
			$("ul").append("<li>" + items[i].author + " says: " + items[i].text + "</li>");
		}
	}


	function sendInfo(){
		$author = $("#author").val();
		$text = $("#text").val();

		$sendFinal = { author: $author, text: $text};

			$.ajax({
				type: "POST",
				url: "http://localhost:3000/comments",
				data: $sendFinal,
				success: function(){console.log("SUCCESS");},
				error: function(){alert("Success: false");},
				dataType: "json"
			});
	}

	$("#button-send").on("click", sendInfo);


});


