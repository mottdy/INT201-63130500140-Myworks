class Customer{
    constructor(firstname,lastname){
        this._firstname = firstname;
        this._lastname = lastname;
    }
}

let account = 1001;
class BankAccount{
    constructor(Customer){
        this._balance = 0;
        this._customer = Customer;
        this._AccountID = account;
        account+=1;
    }


    deposit(money){
        this._balance += money;
        return "Deposit successful";
    }

    withdraw(money){
        if(this._balance<money){
            return "Not enough" ;
        }else{
            this._balance -= money;
            return "withdraw successful";
        }
    }
    
    getBalance(){
        return this._balance;
    }
}

let c1 = new Customer("chananya", "Sinphichit");
let b = new BankAccount(c1);

console.log(b.deposit(1000));
console.log(b.withdraw(30));
console.log(b.getBalance());
console.log(b._AccountID);
console.log(b._customer);