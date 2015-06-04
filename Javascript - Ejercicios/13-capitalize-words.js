// Write a method that takes in a string of lowercase letters and
// spaces, producing a new string that capitalizes the first letter of
// each word.
//
// You'll want to use the `split` and `join` methods. Also, the String
// method `upcase`, which converts a string to all upper case will be
// helpful.
//
// Difficulty: medium.

function capitalize_words(string) {

	var my_array = string.split(" ");
	var final_string = "";
	for(var i=0;i<=my_array.length-1;i++)
	{
		final_string += my_array[i].charAt(0).toUpperCase() + my_array[i].slice(1).toLowerCase();
		if(i!==my_array.length-1)
			final_string += " ";
	}
	console.log(final_string);
	return final_string;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( capitalize_words("this is a sentence") === "This Is A Sentence");
console.log( capitalize_words("mike bloomfield") === "Mike Bloomfield");
