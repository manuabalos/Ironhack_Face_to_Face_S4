// Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.

function most_common_letter(string) {
	var my_array = [];
	var my_vowels={
		a: 0,
		b: 0,
		c: 0
	}

	for(i=0; i<=string.length-1; i++)
	{
		console.log(string[i]);
		my_vowels[string[i]]++;
	}

	keysSorted = Object.keys(my_vowels).sort(function(a,b){return my_vowels[a]-my_vowels[b]})
	console.log("-------------");
	console.log(keysSorted[2]);



	/*
		var my_array = [];
	var my_vowels=[["a",0],["b",0],["c",0]];

	for(i=0; i<=string.length-1; i++)
	{
		switch(string[i])
		{
			case "a":
				my_vowels[0][1] += 1;
				break;
			case "b":
				my_vowels[1][1] += 1;
				break;
			case "c":
				my_vowels[2][1] += 1;
				break;
		}
	}
	console.log(my_vowels);
	*/
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( most_common_letter('abca') === ['a', 2] );
console.log( most_common_letter('abbab') === ['b', 3] );
