// Write a method that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

function nearby_az( string ){

	var my_validate = false;

	for(i=0; i<=1; i++)
	{
		if(string[i] === "a")
		{
			if(i === 0 && (string[1] === "z" || string[2] === "z" || string[3] == "z"))
				my_validate = true;
			else if(i === 1 && (string[2] === "z"))
				my_validate = true;
		}
	}

	return my_validate;

}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( nearby_az('a') === false )
console.log( nearby_az('z') === false )
console.log( nearby_az('za') === false )
console.log( nearby_az('baz') === true )
console.log( nearby_az('abz') === true )
console.log( nearby_az('abcz') === true )
console.log( nearby_az('abcdz') === false )
