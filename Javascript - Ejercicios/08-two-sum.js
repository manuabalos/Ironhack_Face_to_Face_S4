// Write a method that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `null`.
//
// Difficulty: medium.

function two_sum( nums ) {
	var my_array = [];
	var my_sum = 0;

	for(i=0; i<=nums.length-1; i++)
	{
		for(j=0; j<=nums.length-1; j++)
		{
			if(i !== j && (nums[i]+nums[j] === 0))
			{
				my_array[0] = i;
				my_array[1] = j;
				console.log(my_array[0]+","+my_array[1])
				return my_array;
			}
		}
	}
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log( two_sum([1, 3, 5, -3]) === [1, 3] )
console.log( two_sum([1, 3, 5, -3]) === [1, 3] )
console.log( two_sum([1, 3, 0, 0]) === [2, 3] )
console.log( two_sum([1, 3, 0, 6]) === null )
console.log( two_sum([1, 3, 5]) === null)
