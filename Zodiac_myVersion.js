// เเบบที่1 ใช้ switch-case
let year = 2002;
let zodiac;

switch(year % 12) {    
    case 0 : zodiac = 'monkey';
    break;
    case 1 : zodiac = 'rooster';
    break;
    case 2 : zodiac = 'dog';
    break;
    case 3 : zodiac = 'pig';
    break;
    case 4 : zodiac = 'rat';
    break;
    case 5 : zodiac = 'ox';
    break;
    case 6 : zodiac = 'tiger';
    break;
    case 7 : zodiac = 'rabbit';
    break;
    case 8 : zodiac = 'dragon';
    break;
    case 9 : zodiac = 'snake';
    break;
    case 10 : zodiac = 'horse';
    break;
    case 11 : zodiac = 'sheep';
    break;
}

console.log(`My zodiac is ${zodiac}`)


//เเบบที่2 

function zodiac(year) {
        let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horse','sheep']
        return zodiac[year%12];
    }
console.log(`My zodiac is ${zodiac(2002)}`);


//เเบบที่ 3 ใช้ if-else

let year = 2002;

if(year % 12 == 0){
    zodiac = "monkey";
}else if(year % 12 == 1){
    zodiac = "rooster";
}else if(year % 12 == 2){
    zodiac = "dog";
}else if(year % 12 == 3){
    zodiac = "pig";
}else if(year % 12 == 4){
    zodiac = "rat";
}else if(year % 12 == 5){
    zodiac = "ox";
}else if(year % 12 == 6){
    zodiac = "tiger";
}else if(year % 12 == 7){
    zodiac = "rabbit";
}else if(year % 12 == 8){
    zodiac = "dragon";
}else if(year % 12 == 9){
    zodiac = "snake";
}else if(year % 12 == 10){
    zodiac = "horse";
}else if(year % 12 == 11){
    zodiac = "sheep";
}

console.log(`My zodiac is ${zodiac}`)