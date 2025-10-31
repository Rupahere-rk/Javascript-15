 //1. Sum of Two Numbers**

function addNumbers(a, b) {
return a + b;
}
let result = addNumbers(3, 5);
console.log("Sum:", result); 



 //2. Even or Odd Checker 
     let n = 4;
function checkOddOrEven(n) {
    if (n % 2 == 0) {
        return "Number is even";
    }
   return "Number is even";
}

console.log(checkOddOrEven(4));
console.log(checkOddOrEven(4));


// 3.Compare the three numbers using conditional statements and return the maximum.


function findMaximum(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
   return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

const number1 = 4;
const number2 = 7;
const number3 = 9;

const maximumNumber = findMaximum(number1, number2, number3);
console.log(`The maximum number among ${number1}, ${number2}, and ${number3} is: ${maximumNumber}`);

//4.simple calculator
function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    
  const result = simpleCalculator(8, 2, "/");
}
}
console.log(result); 


//5 print number using a loop
let count = 1;


while (count <= 10) {

  console.log(count);
  
  count++;
}

 //6 Multiplication table Generator
function generateMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
generateMultiplicationTable(5);

// 7. **Celsius to Fahrenheit Converter**
    
   function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}
const celsiusInput = 0;
const fahrenheitOutput = celsiusToFahrenheit(celsiusInput);

console.log(`Celsius: ${celsiusInput}`);
console.log(`Fahrenheit: ${fahrenheitOutput}`); 

// 8.find the remainder

function findRemainder(dividend, divisor) {
  return dividend % divisor;
}
const num1 = 10;
const num2 = 3;
const remainder = findRemainder(num1, num2);
console.log(`The remainder of ${num1} divided by ${num2} is: ${remainder}`);

// 9. campare two number is equal 
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is greater than ${num1}`);
  } else {
    console.log(`${num1} and ${num2} are equal`);
  }
}

compareNumbers(7, 7);  

// 10. positive Negative or Zero

function classifyNumber(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
  }
 
// 11. count number 1 to 100 using in loop

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 12. print  all even number between 1 to 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 13. sum of array elements
function sumArrayElements(array) {
  let sum = 0; 

  for (let i = 0; i < array.length; i++) {
    sum += array[i]; 
  

  return sum; 


const numbers = [1, 2, 3, 4, 5];
const result = sumArrayElements(numbers);
}
}
console.log(result); 




// 14. repeat a string
function repeatString(str, num) {

  if (num < 1) {
    return "";
  }
  return str.repeat(num);
}

console.log(repeatString("Hi", 3)); 

//  repeat string using loop
function repeatStringWithLoop(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}


console.log(repeatStringWithLoop("Hi", 3));

// 15. Greeting Message
function greet(name) {
  return `Hello, ${name}!`;
}

const greetingMessage = greet("Alice");
console.log(greetingMessage); 


//Intermediate level
//1.Factorial calculation

function factorialLoop(n) {
  if (n < 0) {
    return "";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}


console.log(factorialLoop(5)); 

//2.Febonacci  Generator
function generateFibonacci(n) {
  const fibonacciSequence = [0, 1];
    for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextNumber);
  }
    return fibonacciSequence;
}

console.log(generateFibonacci(7));



//3.String Reversal
    
  //Reverse the string using a loop, array methods, or recursion.   
  //recursion
  function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//loop
function reverseStringWithLoop(str) {
  let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
    return reversed;
}
console.log(reverseStringWithLoop("hello"));

//array methods
function reverseStringWithArrayMethods(str) {
  const charArray = str.split('');
    charArray.reverse();
    return charArray.join('');
}
console.log(reverseStringWithArrayMethods("hello"));


//4. **Prime Number Checker**
    
function isPrime(num) {
  if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 2 === 0) return false;
    }
    return true;
}

console.log(isPrime(11));


//5. **Sum of Digits**
    

function sumOfDigits(num) {
  let sum = 0;
    const numStr = num.toString();
    for (let char of numStr) {
    sum += parseInt(char);
  }
    return sum;
}
console.log(sumOfDigits(1234));

// 6.Vowel Counter

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
    }
    return count;
}
console.log(countVowels("JavaScript"));

//7. **Second Largest Number in an Array**
    
function secondLargestNumber(array) {
  let first = -Infinity;
  let second = -Infinity;
    for (let num of array) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
    }
    return second;
}
console.log(secondLargestNumber([4, 1, 9, 3, 7]));

//8. **Palindrome Checker**
    
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("radar"));

//9. **Filter Even Numbers from an Array**

function filterEvenNumbers(array) {
  const evenNumbers = [];
    for (let num of array) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
    }
    return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//10. **Simple Password Validator**
   
function validatePassword(password) {
  const minLength = 6;
  const hasDigit = /\d/;
    if (password.length < minLength) {
    return false;
    }
    if (!hasDigit.test(password)) {
    return false;
    }
    return true;
}
console.log(validatePassword("Pass123"));



//11. **Power Calculation Without Math.pow**
    

function powerCalculation(base, exponent) {
  let result = 1;
    for (let i = 0; i < exponent; i++) {
    result *= base;
    }
    return result;
}
console.log(powerCalculation(3, 3));

//12. **Count Occurrences in an Array**
    
function countOccurrences(array) {
  const occurrenceMap = {};
    for (let item of array) {
    if (occurrenceMap[item]) {
      occurrenceMap[item]++;
    } else {
      occurrenceMap[item] = 1;
    }
    }
    return occurrenceMap;
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3]));

//13. **Sum of Array Elements with For...of**
    
function sumArrayElements(array) {
  let sum = 0;
    for (let num of array) {
    sum += num;
    }
    return sum;
}
const numbers = [5, 10, 15];
console.log(sumArrayElements(numbers));

//14. **Merge Two Arrays**

function mergeArrays(array1, array2) {
  return array1.concat(array2);
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArrays(array1, array2)); 

//15. **Generate a Random Number in a Range**

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
console.log(generateRandomNumber(min, max));

// ## Advanced Level

//1. **Find the Largest Number in an Array**
    
function findLargestNumber(array) {
  let largest = -Infinity;
    for (let num of array) {
    if (num > largest) {
      largest = num;
    }
    }
    return largest;
}
console.log(findLargestNumber([5, 17, 9, 22, 3]));

//2. **Identify Duplicate Elements in an Array**


function findDuplicates(array) {
  const seen = new Set();
  const duplicates = new Set();
    for (let num of array) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
    }
    return Array.from(duplicates);
}
console.log(findDuplicates([1, 2, 3, 2, 4, 1]));

//3. **Array Sorting Without Built-In Methods**

function bubbleSort(array) {
  const n = array.length;
    for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
    }
    return array;
}
console.log(bubbleSort([5, 3, 8, 1, 2]));


// 4. **filter Unique Elements**
    
   
function filterUniqueElements(array) {
  const uniqueElements = [];
    for (let item of array) {
    if (!uniqueElements.includes(item)) {
      uniqueElements.push(item);
    }
    }
    return uniqueElements;
}
console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5]));





// 8. **Object Property Checker**
    
function hasProperty(obj, prop) {
  return prop in obj;
}

const person = { name: "Alice", age: 25 };
console.log(hasProperty(person, "age")); 

//9. **Word Counter**
    
  
function countWords(str) {
    const words = str.trim().split(/\s+/);
    return words.length;
}
console.log(countWords("Hello world, this is JavaScript"));


//10. **Convert Array of String s to Uppercase**
    
function convertToUppercase(array) {
  const uppercasedArray = [];
    for (let str of array) {
    uppercasedArray.push(str.toUpperCase());
    }
    return uppercasedArray;
}
console.log(convertToUppercase(["apple", "banana", "cherry"]));

//11. **Find Common Elements in Two Arrays**
    
function findCommonElementsLoop(arr1, arr2) {
  const commonElements = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonElements.push(arr1[i]);
        break; 
      }
    }
  }
  return commonElements;
}

const array3 = [1, 2, 3, 4];
const array4 = [3, 4, 5, 6];
const commonElementsLooped = findCommonElementsLoop(array3, array4);
console.log(commonElementsLooped); 

//12. sum of nested array elements

function sumNestedArrayLoops(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      totalSum += arr[i][j];
    }
  }
  return totalSum;
}


const input1 = [[1, 2], [3, 4], [5]];
console.log(sumNestedArrayLoops(input1));

