// Write a method that takes in a string. Return the longest word in
// the string. You may assume that the string contains only letters and
// spaces.
//
// You may use the String `split` method to aid you in your quest.
//
// Difficulty: easy.

function longest_word(sentence) {

	var my_array = sentence.split(" ");
	var var_longest = "";

	for(var i=0; i<=my_array.length-1; i++)
	{
		if(var_longest.length < my_array[i].length)
			var_longest = my_array[i];
	}
	return var_longest;

}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( longest_word( 'short longest' ) === 'longest' )
console.log( longest_word( 'one' ) === 'one' )
console.log( longest_word( 'abc def abcde' ) === 'abcde' )
