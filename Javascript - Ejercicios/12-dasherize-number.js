// Write a method that takes in a number and returns a string, placing
// a single dash before and after each odd digit. There is one
// exception: don't start or end the string with a dash.
//
// You may wish to use the `%` modulo operation; you can see if a number
// is even if it has zero remainder when divided by two.
//
// Difficulty: medium.

function dasherize_number(num) {

	var my_num = num.toString();
	var my_string = ""
	for(i=0;i<=my_num.length-1;i++)
	{
		if(parseInt(my_num[i])%2 !== 0 && i!==my_num.length-1)
			my_string += my_num[i]+"-";
		else if(parseInt(my_num[i])%2 !== 0 && i===my_num.length-1 && my_string[my_string.length-1]!=="-")
			my_string += "-"+my_num[i];
		else if(parseInt(my_num[i])%2 === 0 || my_string[my_string.length-1]==="-")
			my_string += my_num[i];
	}
	console.log(my_string);
	return my_string;

}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( dasherize_number(203) === '20-3' );
console.log( dasherize_number(303) === '3-0-3' );
console.log( dasherize_number(333) === '3-3-3' );
console.log( dasherize_number(3223) === '3-22-3' );
