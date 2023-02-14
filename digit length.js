var i="123";
var c=i.length
var b=''
while(i<c){
    console.log(c)
    i++
    var r=i%10
    s=r**2
    b+=toString(s)
    i=parseInt(i/10)
}
console.log(b)
