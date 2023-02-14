let a=require("readline-sync");
a=a.questionInt("enter the number")
let b=require("readline-sync");
b=b.questionInt("enter the number")
let c=require("readline-sync");
c=c.questionInt("enter the number")
let d=require("readline-sync");
d=d.questionInt("enter the number")
let e=require("readline-sync");
e=e.questionInt("enter the number")
let total=(a+b+c+d+e)/5
if (total>=90){
    console.log(total,"A")
}
else if (total>=80){
    console.log(total,"B")
}
else if (total>=70){
    console.log(total,"C")
}
else if (total>=60){
    console.log(total,"D")
}
else if (total>=40){
    console.log(total,"E")
}
else if (total<40){
    console.log(total,"F")
}


