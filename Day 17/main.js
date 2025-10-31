// how to access /select elements

//1.getElementById("id")

//2.getElementsByClassName("class")

//3.getElementsByTagName("tag")



console.log(document.title);

const headingE1 = document.getElementById("my-h1");
const headingE2 = document.getElementsByClassName("my-h2");

//className
const els = document.getElementsByClassName("my-h2");
console.log(els);
console.log(els.length);
console.log(els[0]); //First Element
console.log(els[1]);

console.log(headingE1);
console.log(headingE2);

console.log(headingE1.innerText);
headingE1.innerText = "Hello World!";

console.log(headingE2[0].innerText);
headingE2[0].innerText = "Hello from Class";

headingE1.style.color = "blue";
headingE1.style.backgroundColor = "yellow";
headingE1.style.padding = "10px";

headingE2[0].style.color = "green";

//const userName = "Rupali";
//headingE1.innerText = `Hello ${userName}, Welcome to DOM Manipulation`;

//How to access/select elements

//1.getelementById("id")
document.getElementById

//2. getElementsByClassName("classes")
//-->it will return you HTMLCollection-which is array like object

const elements= document.getElementsByClassName("my-h1");
console.log(elements[1].innerText);
console.log(elements[2].innerText);


//3.tagName

const headings1 = document.getElementsByTagName("a");
console.log(headings1);

//4. queryselector("cssselector")

const headings= document.querySelectorAll(".my-h1");
console.log(headings);
// it will return you Node.jd-which is array like object

const aTag = document.querySelectorAll("a");

console.log(aTag[0]);
console.log(aTag[1]);
console.log(aTag[2]);



console.log(aTag);

const atag= Documentgueryselector("#home-link");



















