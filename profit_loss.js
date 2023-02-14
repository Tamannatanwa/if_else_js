let amount=require("readline-sync");
amount=amount.questionInt("enter the number")
let selling=require("readline-sync");
selling=selling.questionInt("enter the number")
if (amount<=selling){
    console.log(selling-amount,"profit")
}
else{
    console.log(amount-selling,"loss")
}

