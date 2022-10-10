// Linear time

const sumUp = (n) => {
    let result = 0;
    for(let i = 1; i <= n; i++){
        result += i
    }
    return result
}

// console.log(sumUp(3))
// console.log(sumUp(4))

// Constant time

const sumUpFast = (n) => {
    return (n/2) * (1 + n);
}

// console.log(sumUpFast(3))
// console.log(sumUpFast(200))

const arraySum = (n) => {
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        sum += n[i];
    }
    return sum
}

// Time complexity: 0(n)

console.log(arraySum([1,2,3]))
console.log(arraySum([1,5,7,12]))
console.log(arraySum([1,3,10]))