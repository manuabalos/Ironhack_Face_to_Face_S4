// Change the width of the h1 element
// $("h1").width("300px");

// Change the font-size up to 120%
// $("*").css("font-size","120%");

// Add the hightlighted class to the elements that has the 'new' class
// $(".new").addClass("hightlighted");

// Remove the title class from h1
// $("h1").removeClass("title");

// Specify the age range in 20-30
// $("option[value=20-30]").prop("selected", true);

// Specify the age range in 20-30 using travesing filters
// $("option").eq(2).prop("selected", true);

// Uncheck the "I love learning" checkbox
// $("#love").prop("checked", false);

// Select yellow as a favourite color
// $("#color-yellow").prop("checked", true);

// Write the selected name of the input in the result div
// $name = $("input#name").val();
// $("div#result").text($name);

// Write the text of the selected age in the result div
// $age = $("#age-range option[selected='selected']").text();
// $("div#result").text($age);

// Writes the number of data likes of jquery-ui in the result div
// $likes = $("#jquery-ui").data("likes");
// $("div#result").text($likes);

// Adds 100 to the number of likes and show it in the result div
// $likes = $("#jquery-ui").data("likes");
// $("div#result").text($likes+100);

// Show the absolute position of result in the console
// $result = $("div#result").offset();

// Move the result to the position 100 top and 150 left
// $("div#result").css("top","100px");
// $("div#result").css("left","150px");

// Change the width and height of the result up to 300px
// $("div#result").width("300px");
// $("div#result").height("300px");

// Add "(User interface)" after "JQueryUI"
// $("#jquery-ui").append(" User Interface");

// Add a li element with the text "Future JQ" after jQueryUI
// $("#jquery-ui").after("<li>Future JQ</li>");

// Add div containers with the class bordered around every li
// $("li").append("<div class='bordered'>container bordered</div>");

// Add a div container with the class bordered around all li
// $("li").wrapAll("<div class='bordered'></div>");

// Remove the result div
// $("#result").remove();

/**
 *  Final round
 */

// Set the the names of the colours according to their color
/*var $size = $("input[type=radio").length;

	for(var i=0; i<=$size-1; i++)
	{
		$color = $("input[type=radio]").eq(i).val();
		$("input[type=radio]").eq(i).parent().css("color",$color);
	}
*/

// Add links to the li elements, the url is the name ended with .com
// $("li").append(".com");