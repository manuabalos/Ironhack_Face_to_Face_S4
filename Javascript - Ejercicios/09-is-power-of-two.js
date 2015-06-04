// Write a method that takes in a number and returns true if it is a
// power of 2. Otherwise, return false.
//
// You may want to use the `%` modulo operation. `5 % 2` returns the
// remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
//
// Difficulty: medium.

function is_power_of_two(num) {

	dividiendo = num
	console.log("--------------------------");
	console.log("NUMERO QUE ENTRA --> "+num);
		
		do
		{
			console.log(dividiendo+"/2 = ")
			dividiendo = Math.floor(dividiendo/2);
			resto = dividiendo%2;

			console.log("result -> "+dividiendo+ " resto -> "+resto);
		}while(resto===0 && dividiendo > 2);

	console.log("* Final ->>>> "+resto);
		
		if(resto === 0 && num != 0)
			return true;
		else
			return false;

}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

//console.log( is_power_of_two(1) === true)
console.log( is_power_of_two(16) === true)
console.log( is_power_of_two(64) === true)
console.log( is_power_of_two(78) === false)
console.log( is_power_of_two(0) === false)

