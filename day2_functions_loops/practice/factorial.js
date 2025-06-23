const factorial = function(n){
    if (typeof n !== 'number' || n < 0) {
        return "Input must be a non-negative number";
    }
    return n === 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

const factorialWithLoop = function(n){
    if (typeof n !== 'number' || n < 0) {
        return "Input must be a non-negative number";
    }
    let result = 1;
    for(let i = n; i>1;i--){
        result *= i;
    }
    return result;
}

console.log(factorialWithLoop(5)); // 120
console.log(factorialWithLoop(0)); // 1