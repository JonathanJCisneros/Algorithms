/* 
Recursive Factorial
Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) {
    if (n == 0){
        return 1;
    } else {
        n = Math.floor(n);
        return n * factorial(n - 1);
    }
}


/* 
Return the fibonacci number at the nth position, recursively.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
The next number is found by adding up the two numbers before it,
starting with 0 and 1 as the first two numbers of the sequence.
*/

const twoNum1 = 0;
const twoExpected1 = 0;

const twoNum2 = 1;
const twoExpected2 = 1;

const twoNum3 = 2;
const twoExpected3 = 1;

const twoNum4 = 3;
const twoExpected4 = 2;

const twoNum5 = 4;
const twoExpected5 = 3;

const twoNum6 = 8;
const twoExpected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
function fibonacci(num) {
    if (num == 0){
        return 0;
    // change num each iteration - 1
    } else if (num == 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}