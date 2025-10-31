
console.log("my-h1");
const headingE1 = document.getElementById("my-h1");
console.log(headingE1.textContent);

headingE1.textContent = "Hello this is my Page";

headingE1.innerText = "Hello this is my Page";

//headingE1 ={
//innerHtml : "Hii there";
//innerText : "Hii there";
//textContent :"Hii there";
//}

console.log(headingE1.innerHTML);
console.log(headingE1.innerText);
console.log(headingE1.textContent);

// we shound not use innerhtml --> security reasons
headingE1.innerHtml =`Hii there <span>how are you</span>`;

function changestyles(){
headingE1.style.backgroundColor="red";
headingE1.style.color="blue";
}



function changeContent(){
    headingE1.textcontent =`Hii there How are You`;
}
console.log(headingE1.textContent);

function togglevisibility(){
    //console.log(headingE1.style.display);
    const displayvalue = headingE1.style.display;
    console.log(displayvalue);
    if (displayvalue === "block"){
    headingE1.style.display="none";
} else {
    headingE1.style.display="block";
}
}

//write simple method
function togglevisibility(){
const displayvalue = headingE1.style.display;//none
headingE1.style.display = displayvalue ==="block" ? "none" :"block";
}


//el.className-- to get the className and replace it
//el.classlist.add()
//el.classlist.remove()
console.log(headingE1.classList);
headingE1.classList.add("abcd");
headingE1.classList.remove("headind-1");
console.log(headingE1.classList.contains("abcdefhg"));

function togglevisibility(){
    //console.log(headingE1.style.display);
    const displayvalue = headingE1.style.display;
    console.log(displayvalue);
    if (displayvalue === "block"){
    headingE1.style.display="none";
} else {
    headingE1.style.display="block";
}
}

function togglevisibility(){
    
    headingE1.classList.toggle("hide")
} 
function togglevisibility(){
    //console.log(headingE1.style.display);
    const ishidden =headingE1.classList.contains("hide");
    if (ishidden){
    headingE1.classList.remove("hide");
} else {
    headingE1.classList.add("hide");
}
}











