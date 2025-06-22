function evenOddChecker(number){
    if(typeof number !== 'number')
        return "Input must be a number";
    return number % 2 === 0 ? 'Even Number' : 'Odd Number';
}

// Example usage:
console.log(evenOddChecker(10)); // Even Number
console.log(evenOddChecker(7)); // Odd Number
console.log(evenOddChecker('hello')); // Input must be a number

//bonus
function maxOfThree(a,b,c){
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return "All inputs must be numbers";
    }
    return Math.max(a, b, c);
}
// Example usage:
console.log(maxOfThree(10, 20, 30)); // 30