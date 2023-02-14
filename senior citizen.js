let a=require("readline-sync");
a=a.questionInt("enter the age ");
if (a>=60){
    console.log(a,"is senior citizen");
}
else{
    console.log(a,"is not senior citizen")
}