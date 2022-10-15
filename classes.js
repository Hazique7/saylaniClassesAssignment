// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense,
//  accountInfo, addIncome, addExpense and accountBalance
//  methods. Incomes is an array of objects income and its description and expenses is also an array of objects having
//   expense and its description.


class personalAccount{
 constructor(firstname,lastname,incomes,expenses){
     this.firstname = firstname;
     this.lastname = lastname;
     this.incomes = incomes;
     this.expenses = expenses;
 }
 totalIncome(){
     return this.incomes;
 }
 totalExpense(){
     return this.expenses;
 }
     accountInfo(){
         return this.firstname , this.lastname;
         
     }  
    //  addIncome(){

    //  }
    //  addExpense(){

    //  }
     accountBalance(){
         return this.incomes-this.expenses;
     }
}
const personalAccount1 = new personalAccount("hazique","ahmed khan",6000,200)
console.log(personalAccount1.accountBalance());
