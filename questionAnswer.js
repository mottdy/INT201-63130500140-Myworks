let q1 = {
    question: "what is the result of 20*20",
    choice: {a: 300, b:400, c:500, d:600},
    answer: b
}

let q2 = {
    question: "what is the result of 5+5*5",
    choice: {a: 30, b:40, c:500, d:60},
    answer: a
}

let q3 = {
    question: "what is the result of 200*6",
    choice: {a: 1000, b:1100, c:1200, d:1300},
    answer: c
}

let q4 = {
    question: "what is the result of 2^10",
    choice: {a: 1000, b:1024, c:1048, d:1096},
    answer: b
}

let q5 = {
    question: "what is the result of 6^2",
    choice: {a: 34, b:36, c:38, d:40},
    answer: b
}

let player = {
    name : "",
    questionNum : [q1,q2,q3],
    score: 0
}

playGame = (name,ques) =>{
    player.name = name;
    console.log(ques.question);
}

console.log(playgame("chananya",q2));
