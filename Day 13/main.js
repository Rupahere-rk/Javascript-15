console.log("hii");

//sum of digit 1234
let num = 1234;
let sum =0;
while(num>0){
   const digit =num % 10;
   sum = sum + digit;
   num = Math.floor(num/10);

}
console.log("sum of digit of number",num,"is",sum);


// Reverse num 123 -321
        let Number =123; 
        let revNum = 0;
        while(Number > 0)
       {
           const digit = Number % 10;
           revNum = revNum * 10 + digit;
           Number = Math.floor(Number / 10);
       }

   console.log("reverseDigits","is",(revNum));

// find factorial of a number
let n = 5;
let factorial = 1;

while (n > 0) {
  factorial *= n;
  n--;
}

console.log("The factorial of 5 is:", factorial);

// check if a number is a palindrome n =123 not palindrome
let num1 = 123;
if(num1 === true){
    console.log("given number is palindrome");
}else {
    console.log("given number is not palindrome");

}

//calculate sum of digit number
let number= 435;
let Sum =0;
while(number > 0){
const digit = number % 10; //5
Sum = Sum+digit;
number=Math.floor(number/10);
}

 
let Num1 = 10;
while (true) {
if ( Num1 % 2==0 && 
        Num1 % 3==0 && 
        Num1 % 4==0 &&
        Num1 % 5==0 && 
        Num1 % 6==0 && 
        Num1 % 7==0 &&
        Num1 % 8==0 && 
        Num1 % 9==0 &&
       Num1 % 10==0 
        
){
    console.log("number is" ,Num1);
    break;
}
    Num1++;
}

// check it number given is krishamurty num
let  sum1 = 0;
  let number1 = 145;
let copy = number;
while (number > 0) {
    let digit = number % 10;
    sum1 = sum1 + digit;


    //find its fctorial
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }
    //update sum
    Sum = Sum + fact;
    //number = Math.floor(number / 10);
}
if (copy === Sum) {
    console.log("given number is krishanamurty number");
}
else {
   console.log("given number is not krishnamurty number");
}


console.log((145));

// count the number of digit in given number
  
  let count = 0;
  let number2 = 12345;
  while (number2 > 0) {
    number2 = Math.floor(number2 / 10);
    count++;
  }
  console.log("count of digit in number", 12345, "is", count);


const userName = "Rupali";
console.log("good Morning" + userName);