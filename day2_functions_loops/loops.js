function testLoop(loopType, num){
    if(loopType == 'for'){
        for(let i = 0; i < num; i++){
            console.log("For loop iteration: " + i);
        }
    }
    else if(loopType == 'while'){
        let i = 0;
        while(i < num){
            console.log('while loop iteration: ', i);
            i++;
        }
    }
    else if(loopType == 'dowhile'){
        let i = 0;
        do {
            console.log('do while loop iteration: ' + i);
            i++;
        }while(i<num);
    }
    else {
        console.log('Invalid loop type');
    }
}

// Example usage:
testLoop('for', 5); // For loop iteration: 0, 1, 2, 3, 4
testLoop('while', 3); // while loop iteration: 0, 1, 2
testLoop('dowhile', 4); // do while loop iteration: 0, 1, 2, 3
testLoop('invalid', 2); // Invalid loop type

function sumOfNumbers(num){
    if(typeof num != 'number' || num < 0){
        return "Input must be a non-negative number";
    }
    let result = 0;
    for(let i = 0; i <= num; i++){
        result += i;
    }
    return result;
}

console.log(sumOfNumbers(5)); // 15