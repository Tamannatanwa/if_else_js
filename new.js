
var a=require("readline-sync")
a=a.question("enter the number")
var r=parseInt(a)
var i=0;
var x=''
while (i<a.length){
    s=r%10
    v=s*s
    x+=v
    r=parseInt(r/10)
    i++
}console.log(x)
