let a,b,c;
a=require("readline-sync");
a=a.questionInt("enter the number")
b=require("readline-sync");
b=b.questionInt("enter the number")
c=require("readline-sync");
c=c.questionInt("enter the number")
let total=a+b+c;
if (total==180){
    console.log("valid tringle")
}
else{
    console.log("invalid tringle")
}
