let player1 = {name: "player1", rollValue: [], result: []};
let player2 = {name: "player2", rollValue: [], result: []};

let dice = {rollDice () {return Math.floor(Math.random() * 6)+1}};

function diceGame(roundPlay){
    for(let i=0; i<roundPlay; i++){
        console.log(`---round ${i+1}---`);
        play(i);
    }
    console.log(`---result---`);
    console.log(whoWin());
};

function play(index){
    player1.rollValue[index] = dice.rollDice();
    player2.rollValue[index] = dice.rollDice();
    console.log(compare(index));
};

function compare(index){
    if(player1["rollValue"][index] > player2["rollValue"][index]){
        player1.result[index] = "win";
        player2.result[index] = "lose";
        return `${player1.name} is win`;
    }else if(player1["rollValue"][index] < player2["rollValue"][index]){
        player1.result[index] = "lose";
        player2.result[index] = "win";
        return `${player2.name} is win`;
    }else{
        player1.result[index] = "Draw";
        player2.result[index] = "Draw";
        return "Draw!";
    }
};

function whoWin(){
    let player1_score = 0;
    let player2_score = 0;

    for(let result of player1.result){
        if(result == "win"){
            player1_score++;
        }else if(result == "lose"){
            player2_score++;
        }
    }

    console.log(`${player1.name} Score = ${player1_score}`);
    console.log(`${player2.name} Score = ${player2_score}`);

    if(player1_score > player2_score){
        return `${player1.name} is the winner of this game`;
    }else if(player1_score < player2_score){
        return `${player2.name} is the winner of this game`;
    }else{
        return "ํYou two are Draw!";
    }
};

diceGame(5);
console.log("");
console.log("---Check Answer---");
console.log(`${player1.name} Dice Roll = ${player1.rollValue}`);
console.log(`${player2.name} Dice Roll = ${player2.rollValue}`);
console.log(`${player1.name} Result = ${player1.result}`);
console.log(`${player2.name} Result = ${player2.result}`);