// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.
//
// Difficulty: easy.

function time_conversion( minutes ) {

	var my_hours = Math.floor(minutes/60);
	var my_minutes = minutes % 60;

		if(my_minutes === 0)
			my_minutes = "00";

	var my_result = my_hours+":"+my_minutes;
	console.log(my_result);
	return my_result

}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( time_conversion(15) === '0:15' )
console.log( time_conversion(150) === '2:30' )
console.log( time_conversion(360) === '6:00' )
