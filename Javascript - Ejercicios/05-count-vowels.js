// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.
//
// Difficulty: easy.

function count_vowels(string) {
	
	var total_vowels = 0;
	var vowels = ["a","e","i","o","u"];

	for(i=0; i<=string.length-1;i++)
	{
		for(j=0;j<=vowels.length-1;j++)
		{
			if(string[i] === vowels[j])
				total_vowels += 1;
		}
	}

	return total_vowels;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( count_vowels('abcd') === 1 )
console.log( count_vowels('color') === 2 )
console.log( count_vowels('colour') === 3 )
console.log( count_vowels('cecilia') === 4 )
