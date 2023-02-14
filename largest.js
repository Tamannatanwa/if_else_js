let a,b,c;
a=require("readline-sync");
a=a.questionInt("enter the number:-");
b=require("readline-sync");
b=b.questionInt("enter the number:-");
c=require("readline-sync");
c=c.questionInt("enter the number:-");
if (a>b && a>c){
    console.log(a,"is greater than")
}
else if (b>a && b>c){
    console.log(b,"is greater than")
}
else{
    console.log(c,"is greater than")
}