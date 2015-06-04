function bestPart(){
	$("video").eq(0).prop("src","Bee.mp4#t=10,15");
}

function loopTime(){
	$("video").eq(0).prop("loop",true);
}

function againAgain(){
	$("video").eq(0).prop("src","Bee.mp4#t=0");
}

$("#best").on("click",bestPart);
$("#loop").on("click",loopTime);
$("#reset").on("click",againAgain);