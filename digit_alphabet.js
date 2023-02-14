let a=require("readline-sync")
a=a.question("enter here anything")
if (a>="a" && a<="z" || a>="A" && a<="Z"){
    console.log("alphabet")
}    
else if (a>="0" && a<="9"){
    console.log("digit")
}
else{
    console.log("special character")
}
      
