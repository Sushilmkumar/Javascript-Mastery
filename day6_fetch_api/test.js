var result1 = [];

for(var i = 0; i<5;i++){
    result1[i] = function(){
        return i;
    }
}

var result2 = [];

for(let i = 0; i<5;i++){
    result2[i] = function(){
        return i;
    }
}

console.log(result1[4]());
console.log(result2[4]());