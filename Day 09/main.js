
 let dayNumber = 3; // You can change this number to test different days
if (dayNumber === 1) 
 {
  console.log("Monday");
 } else if (dayNumber === 2) {
  console.log("Tuesday");
 } else if (dayNumber === 3) {
  console.log("Wednesday");
} else if (dayNumber === 4) {
  console.log("Thursday");
 } else if (dayNumber === 5) {
  console.log("Friday");
 } else if (dayNumber === 6) {
 console.log("Saturday");
 } else if (dayNumber === 7) {
  console.log("Sunday");
 } else {
  console.log("Invalid day Number");
} 

//Given a number print fizz if it is divisible by 3
//print Buzz if number is divisible by 5
// print fizzBuzz if number is divisible by both 3 and 5
let number = 15;
if  (number % 3 == 0 && number % 5 == 0) {

    console.log("BuzzFizz"); 
}

else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (num%5 == 0){
    console.log("Buzz")
  }
  else{
    console.log("invalid input")
  }
 let Number =15;
if(Number%15==0){

    console.log("BuzzFizz");
}

  else if (Number % 3 == 0) {
    console.log("Fizz");
  } else if (Number % 5 == 0){
    console.log("Buzz")
  }
  else{
    console.log("invalid input")
  }
   
 //Given two number find largest of them 
  let num1 = 12;
let num2 = 23;

if (num1 > num2) {
 console.log(num1); 
} else {
  console.log(num2);
}

const num8 = 12;
const num9 = 23;
const num10 = 100;

const largestNumber = Math.max(num1, num2, num3);

console.log("The largest number is: " + largestNumber);

let Num1 = 12;
let Num2 = 23;
let Num3 = 100;
let largest;

if (Num1 >= Num2 && Num1 >= Num3) {
    largest = Num1;
  } else if (Num2 >= Num1 && Num2 >= Num3) {
   largest = Num2;
} else {
    largest = Num3;
}

console.log("The largest number is " + largest);

let DayNumber =6;
switch(DayNumber){
case 1:
        console.log("Monday");
case 2:
        console.log("Tuesday");
case 3:
        console.log("Wednesday");
case 4:
        console.log("Thursday");
case 5:
        console.log("Friday");
case 6:
        console.log("Saturday");
    default:
        console.log("Invalid input");


}

let time ="Night";
if(time =="Morning"){
   console.log("good Morning");
} else if(time=="afternoon"){
console.log("good afternoon");
} else if(time =="evening"){
    console.log("good evening");
} else if(time =="Night"){
    console.log("good night");
}


//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/

function gradeFromScore(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) {
    throw new TypeError('score must be a number');
  }
  if (score < 0 || score > 100) {
    throw new RangeError('score must be between 0 and 100');
  }
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

console.log(gradeFromScore(72)); // C

let number1 = 120;
let number2 = 23;
let number3 = 1000;
let number4 = 100;

const max = Math.max(number1, number2, number3, number4);
const min = Math.min(number1, number2, number3, number4);
console.log(max,"is the largest number");
console.log(min,"is the smallest number");






