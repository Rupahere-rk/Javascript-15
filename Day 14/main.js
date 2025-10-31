 console.log("hii");

 function buymilk(){
    console.log("Go straight");
    console.log("turn left");
    console.log("Go straight");
    console.log("turn right");
    console.log("Go straight");
    console.log("Buy some milk");
    console.log("Go straight");
    console.log("turn left");
    console.log("Go straight");
    console.log("turn right");
    console.log("Go straight");
    console.log("reached home");
}
buymilk();
//Global scoped variable
let num =30;
console.log(num);


//local scope variable
function something(){
   if (true){
    var a = 10;    // var used because its function scope variable
}
console.log(a);
}
something();










    
 