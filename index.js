// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
	"Please enter some integers separated by commas.",
	"1,2,3,4,5"
);
console.log(`Input count: ${userInputString.split(",").length}`);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",").map((e) => {
	const str = new String(e).trim();
	const num = parseInt(e);
	if (num) {
		return num;
	}
});

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
	const str = stringArray[i];
	const number = parseInt(str);
	if (number) numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
	let length = 0;
	for (let i = 0; i < numbers.length; i++) {
		length += 1;
	}
	return length;
	// my solution >>
	return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
	// my solution >>
	return numbers.reduce((n, v) => n + v);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
function getMean(numbers) {
	return getSum(numbers) / getLength(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
function getMin(numbers) {
	let min = undefined;
	for (let i = 0; i < numbers.length; i++) {
		if (min === undefined || numbers[i] < min) {
			min = numbers[i];
		}
	}
	return min;
	// my solution >>
	return numbers.reduce((c, v) => Math.min(c, v));
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
function getMax(numbers) {
	let max = undefined;
	for (let i = 0; i < numbers.length; i++) {
		if (max == undefined || max < numbers[i]) {
			max = numbers[i];
		}
	}
	return max;
	//my solution (so nice :)
	return numbers.reduce((c, v) => Math.max(c, v));
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
function getRange(numbers) {
	return getMax(numbers) - getMin(numbers);
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
function getEvens(numbers) {
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		if (0 == numbers[i] % 2) {
			result.push(numbers[i]);
		}
	} // while i personally prefer while(i) loops
	return result;
	// my solution
	numbers.forEach((n) => {
		if (n % 2 == 0) {
			result.push(n);
		}
	});
	return result;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
function getOdds(numbers) {
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		if (0 < numbers[i] % 2) {
			result.push(numbers[i]);
		}
	} // while i personally prefer while(i) loops
	return result;
	// my solution
	numbers.forEach((n) => {
		if (0 < n % 2) {
			result.push(n);
		}
	});
	return result;
}
