var a,b;
a=require("readline-sync");
a=a.questionInt("enter the number:-");
b=require("readline-sync");
b=b.questionInt("enter the number:-");

if (b>a){
    console.log(b,"maximum number");
}
else{
    console.log(a,"is maximum number");
}

