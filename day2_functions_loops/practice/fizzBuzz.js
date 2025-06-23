function fizzBuzz(num){
    if (typeof num !== 'number' || num <= 0) {
        return "Input must be a positive number";
    }
    let i = 1;
    while(i<=num){
        if(i%3 === 0 && i%5 === 0)
            console.log('FizzBuzz');
        else if(i%3 === 0)
            console.log("Fizz");
        else if(i%5 === 0)
            console.log("Buzz");
        else
            console.log(i);
        i++;
    }
}

// Example usage:
fizzBuzz(50);