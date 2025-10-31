console.log("Hii");

var userName ="Rupali";
console.log(userName);

userName = 34;
console.log(userName);

var userName = "Rupali";
console.log(userName);

const userName1 = "Anjali";
console.log(userName1);

//declaration
let userName2;
console.log(userName2);

//initialization

userName2 = "Rupali";
console.log(userName2);

//hoisting

var age =34;
console.log(age);
let age1 = 45;
console.log(age1);
const age2 = 56;
console.log(age2);

//data types

let n = 12;
console.log(typeof n);

let n1 = "Rupali";
console.log(typeof n1);

let n2 = true;
console.log(typeof n2);

let n3 = null;
console.log(typeof n3);

let n4 = undefined;
console.log(typeof n4);

let n5 = Symbol("This is symbol");
console.log(typeof n5);

let n6 = BigInt("567");
console.log(typeof n6);

//operators

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a ** b);

//comparison operators

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

//logical operators

console.log(a > b && a == 10);
console.log(a < b || a == 10);
console.log(!(a > b));

//conditional statements

let age3 = 18;
if (age3 >= 18) {
  console.log("You are eligible to vote");
}
else {
  console.log("You are not eligible to vote");
}

//loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

//functions

function greet(name) {
  console.log("Hello " + name);
}

greet("Rupali");
greet("Anjali");

//arrays

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);


arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(0);
console.log(arr);



//objects

let person = {
    name: "Rupali",
    age: 21,
    city: "Pune"
};

console.log(person);

console.log(person.name);
console.log(person["age"]);
person.age = 22;
console.log(person.age);
person.country = "India";
console.log(person);

//date and time

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log(date.getDay());
console.log(date.getTime());
console.log(Date.now());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());

//error handling
try {
  console.log(x);
}
//catch block
catch (error) {
  console.log("Error occurred: " + error.message);
}

finally {
  console.log("Finally block executed");
}

//strict mode
"use strict";
x = 3.14;
console.log(x); // This will cause an error because x is not declared

//string
let str = "Hello World";
console.log(str);
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("World"));
console.log(str.slice(0, 5));
console.log(str.replace("World", "JavaScript"));
console.log(str.split(" "));

//template literals
let name = "Rupali";
let age4 = 21;
let city = "Pune";

let message = `My name is ${name}. I am ${age4} years old and I live in ${city}.`;
console.log(message);

//arrow functions
const add = (x, y) => {
  return x + y;
};

console.log(add(5, 10));

const multiply = (x, y) => x * y;
console.log(multiply(5, 10));












