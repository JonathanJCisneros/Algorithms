/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    coin_dict = {
        "quarter": 25,
        "dime": 10,
        "nickel": 5,
        "penny": 1
    };
    change = {};
    for (let keys in coin_dict) {
        let new_cents = cents % coin_dict[keys];
        if (cents - new_cents) {
            change[keys] = (cents - new_cents) / coin_dict[keys];
            cents = new_cents;
        }
    }
    return change;
}

console.log(fewestCoinChange(cents1))

/* 
Missing Value
You are given an array of length N that contains, in no particular order,
integers from 0 to N . One integer value is missing.
Quickly determine and return the missing value.
*/

const two_nums1 = [3, 0, 1];
const two_expected1 = 2;

const two_nums2 = [3, 0, 1, 2];
const two_expected2 = null;
// Explanation: nothing is missing

/* 
Bonus: now the lowest value can now be any integer (including negatives),
instead of always being 0. 
*/

const two_nums3 = [2, -4, 0, -3, -2, 1];
const two_expected3 = -1;

const two_nums4 = [5, 2, 7, 8, 4, 9, 3];
const two_expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */
function missingValue(unorderedNums) {
    if (unorderedNums.length < 1) {
        return null;
    }
    
    let min = unorderedNums[0];
    let max = unorderedNums[0];
    let sum = 0;
    let expectedSum = 0;
    
    for (const n of unorderedNums) {
        if (n < min) {
            min = n;
        }
        if (n > max) {
            max = n;
        }
        sum += n;
    }
    
    for (let i = min; i <= max; i++) {
        expectedSum += i;
    }
    return sum === expectedSum ? null : expectedSum - sum;
}