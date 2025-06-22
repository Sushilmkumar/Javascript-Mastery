let num = 0; // Change this value to test different conditions

if(num>0){
    console.log("Positive Number");
}
else if(num<0){
    console.log("Negative Number");
}else console.log("Zero");

let day = 3;
switch(day){
    case 1:
        console.log("Sunday");
        break; 
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
}

let age = 29;
let hasId = false;

if(age >= 18){
    if(hasId){
        console.log("You can enter the club.");
    } else {
        console.log("You need an ID to enter the club.");
    }
}