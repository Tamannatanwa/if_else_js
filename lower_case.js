var a=require("readline-sync")
a=a.question("enter the later:-")
if (a>="A" && a<="Z"){
    console.log(a,"is upper case")
}
else{
    console.log(a,"is lower case")
}