let a=require("readline-sync");
a=a.questionInt("enter the number")
if (a>0){
    console.log(a,"is positive number")
}
else if (a<0){
    console.log(a,"is nagative number")
}
else{
    console.log(a,"is zero")
}