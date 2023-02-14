let a=require("readline-sync")
a=a.questionInt("enter the number:-")
if (a%5==0 && a%11==0){
    console.log("divisible")
}
else{
    console.log("not divisible")
}
