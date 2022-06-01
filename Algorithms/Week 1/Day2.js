// Lesson 1

var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");

// Answer: 6, hello hello

// Lesson 2

for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

// Answer: 0,4,8, "outside of the loop 12"

// Lesson 3

function getTotal(arrayOfNumbers) {
    
    var sum = arrayOfNumbers[0];
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }
    console.log("the total is: " + sum);
}

getTotal([1, 3, 5]);

// Answer: the current sum is: 2, the current sum is: 5, the current sum is 10, the total is: 10
// code wasn't written properly, total is not 10. Fixed code below:

function getRealTotal(arrayOfNumbers) {
    
    var sum = 0;
    
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]; 
    }
    console.log("the total is: " + sum);
}

getRealTotal([1, 3, 5]);

// Answer: the total is: 10