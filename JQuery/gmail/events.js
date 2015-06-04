function hideBox(){
	$("#box-send").hide();

}

function showWindowSend(){
	$("#box-send").show();
	$("#box-send").css("position", "fixed");

}

$(document).ready(hideBox);
$(".button-aside-redactar").on("click", showWindowSend);

function minWindow(){
	//alert("ENTRO");
	$("#box-send").animate({
		width: "300px",
		right: '-=50px',
	   	bottom: '-=340px'
  }, 1 );
}

function maxWindow(){
	//alert("ENTRO");
	$("#box-send").animate({
		width: "500px",
		right: '+=50px',
	   	bottom: '+=340px'
  }, 1 );
}


$("#minimizar").on("click", minWindow);
$("#maximizar").on("click", maxWindow);
$("#cerrar").on("click", hideBox);


