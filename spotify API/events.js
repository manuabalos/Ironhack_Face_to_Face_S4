$(document).ready(function(){
	function getAuthors(){
		author = $("#author").val();

		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=artist&query="+author,
			data: "",
			success: function(response){populate_ul(response)},
			error: function(){alert("Success: false");},
			dataType: "json"
		});
	}

	function populate_ul(autor){
		$("ul").empty(); // Limpiamos toda la lista
		 console.log(autor);

		
		for(var i=0; i<autor.artists.items.length; i++)
		{   //Añadimos los elementos enteros de nuevo
			$("ul").append("<p><b>" + autor.artists.items[i].name + "</b><p>");

			if(autor.artists.items[i].images[0]){
				$("ul").append("<p><a href='"+ autor.artists.items[i].external_urls.spotify +"' target='_blank'><img height='100px' width='100px' src='" + autor.artists.items[i].images[0].url + "'></a></p>");
			}else{
				$("ul").append("<p>No se ha encontrado imagen de este artista.</p>");
			}
			$("ul").append("<hr>");
		}
	}
	
	$("#search").on("click", getAuthors);
	$('#author').on('keypress', function(e) {
    	if(e.keyCode==13){
        	getAuthors();
    	}
	});
});