const a=require("readline-sync")
b=a.questionInt("enter the number;-")
if (b%2==0){
    console.log(b,"is even number")
}
else{
    console.log(b,"is odd number:-")
}