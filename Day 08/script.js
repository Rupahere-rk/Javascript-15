//condition ? task a : task b
let age = 17;
age >= 18 ? console.log("you can vote") : console.log("you can't vote");

// print if it
// print even if num is even
//print odd if num is odd
let num = 10;
num % 2 == 0 ? console.log("even") : console.log("odd");
num % 2 === 0 ? console.log("even") : console.log("odd");



// suppose you have a variable num
//check if num is positive or negative

let number = -5;
number > 0 ? console.log("positive") : console.log("negative");

let message = number > 0 ? "positive" : "negative";
console.log(message);

let age1 = 24;
age >= 18 ?  console.log(true) : console.log(false);

if (age > 18) {
    console.log("you can vote");
}

else {
    console.log("you can't vote");
}
console.log("Hi");


console.log(age >= 18 ? "you can vote" : "you can't vote");

let israining = true;
if (israining) {
    // this will execute only condition is true 
    console.log ("carry umbrella");
}else {
    console.log("no need to carry umbrella");
}

let israining2 = false;
if (israining) {
    // this will execute only condition is true 
    console.log ("carry umbrella");
}else {
    console.log("no need to carry umbrella");
}


// you have given two variable num1 and num2
// you have to check which one is greater and print that num

let num3 =12;
let num4 = 34;

 console.log(num3 > num4);

 let num5 =122;
 let num6 =1345;
 console.log(num5 > num6);

 if (num5> num6)
 {
    console.log("num5 is greater ");

 }
else {
    console.log("num6 is greater");
}
let time = ("morning");
if (time === "morning"){
    console.log(" good morning");
}
else{
    console.log("good afternoon");

}

let  num7= 21212;
const lastDigit =num%10;
console.log(lastDigit);
if (lastDigit%2===0){
console.log("last digit is even");
}
else{
console.log("last digit is odd");
}

//second last digit

let num8 =2111;
const secondlastDigit= Math.floor (num8 /10) %10;
console.log(secondlastDigit);
if(secondlastDigit%2===0){
    console.log("second last digit is even");
}
else {
    console.log("second last digit is odd");
}

let num9 =1234;
const thirdlastDigit = Math.floor(num9/10)%10;
console.log(thirdlastDigit);
if(thirdlastDigit%2===0){
    console.log("Third last Digit is even");
}
else{
    console.log("Third last Digit is odd");
}













