random = () => {
    return Math.floor(Math.random()*100)+1;
}

let randomNum1 = random();
let randomNum2 = random();
let randomNum3 = random();

findSum = () => {
    return randomNum1+randomNum2+randomNum3
}

findMax = () => {
    let maxNum = randomNum1;
    if(randomNum2>maxNum){
        maxNum = randomNum2;
    }else if(randomNum3>maxNum){
        maxNum = randomNum3;
    }
    return maxNum;
}

findMin = () => {
    let minNum = randomNum1;
    if(minNum>randomNum2){
        minNum = randomNum2;
    }else if(minNum>randomNum3){
        minNum = randomNum3;
    }
    return minNum;
}

console.log([randomNum1,randomNum2,randomNum3]);
console.log(findSum());
console.log(findMin());
console.log(findMax());
