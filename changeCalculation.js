exchange = (price,recieve) => {
    exchange = recieve-price;
    let exchangeMoney = {}
    if(exchange>500){
        exchangeMoney.B500 = Math.floor(exchange/500);
        exchange -= exchangeMoney.B500*500;
    }
    if(exchange>100){
        exchangeMoney.B100 = Math.floor(exchange/100)
        exchange -= exchangeMoney.B500*100;
    }
    if(exchange>50){
        exchangeMoney.B50 = Math.floor(exchange/50)
        exchange -= exchangeMoney.B500*50;
    }
    if(exchange>20){
        exchangeMoney.B20 = Math.floor(exchange/20)
        exchange -= exchangeMoney.B20*20;
    }
    if(exchange>10){
        exchangeMoney.B100 = Math.floor(exchange/10)
        exchange -= exchangeMoney.B100*10;
    }if(exchange>5){
        exchangeMoney.B5 = Math.floor(exchange/5)
        exchange -= exchangeMoney.B5*5;
    }if(exchange>2){
        exchangeMoney.B2 = Math.floor(exchange/2)
        exchange -= exchangeMoney.B2*2;
    }if(exchange>1){
        exchangeMoney.B1 = Math.floor(exchange/1)
        exchange -= exchangeMoney.B1*1;
    }

    return exchangeMoney;
};

console.log(exchange(800,500));