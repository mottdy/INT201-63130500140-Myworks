randomNum = (guessNum) => {
    let randomNum = Math.floor(Math.random()*10)+1;
    
    if(guessNum>10||guessNum<1){
        return "Your guess not in 1-10 Game Stop"
    }
    else if(randomNum<guessNum){
        console.log(`random num is ${randomNum}`);
        return "too high"
    }else if(randomNum>guessNum){
        console.log(`random num is ${randomNum}`);
        return "too low"
    }else{
        return "You win"
    }
}

console.log(randomNum(4));
