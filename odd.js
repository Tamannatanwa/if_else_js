let a=require("readline-sync");
a=a.questionInt("enter the number")
let b=require("readline-sync");
b=b.questionInt("enter the number")
let c=require("readline-sync");
let total =a+b
if (total%2!=0){
    console.log(total,"odd")
}
else{
    console.log(total,"not odd")
}
