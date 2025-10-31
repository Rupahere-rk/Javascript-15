const h1E1 = document.createElement("h1");
const containerE1=document.getElementById("container");
const para = document.createElement("p");

para.innerText = "I'm p1 created using js Para";

//<h1> I"m h1 created using js</h1>

h1E1.innerText = "I'm h1 created using js";


//Adding e1 -- append
//function
//where
//container.append(el1 el2 el3 el4)
//container.appendchild(el)

//document.body.append(h1E1);
//containerE1.append(h1E1);
//divE1.append(h1E1);

containerE1.appendChild(h1E1,para);

function removepara(){
    console.log(containerE1.childNodes);
    console.log(containerE1.children);
    console.log(containerE1.nextSibling);
    console.log(containerE1.childElementCount);
}



// el remove
