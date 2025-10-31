console.log("hi")


let num=1;
while(num<=10){
    console.log (num);
    num++
}
//print all even number from 1 to 20 using while loop
let number = 2;
while(num<=20){
  console.log(num);
  num=num+2;
}

//prite all the number 1 to10 using do while

let i = 1; 

do {
  console.log(i); 
  i++; 
} while (i <= 10); 


// print sum of given number 1 to 10
let Sum = 0;
let j=1;
do{
Sum +=j;
j++;
}while (j<=10);
   console.log(Sum);




let sum1 = 0;
let number1=1;

do{
sum1 +=number1;
number1++;
}while (number1<=100);
    console.log(sum1);

   let sum=0;
    let n=100;
    sum1 = n*(n+1)/2;
    console.log(sum1);

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
 } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
 } else {
    console.log(i);
  }
}


for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) { 
    console.log(i);
  }
}

let sumOfOdds = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) { 
    sumOfOdds += i; 
  }
}

console.log("The sum of odd numbers from 1 to 100 is:", sumOfOdds);







