const btn = document.getElementById("btn");
const box = document.querySelector(".box");

box.onmouseover = handleMouseOver;
box.onmouseleave = handleMouseLeave;
box.onmouseover = handleRightClick;


box.addEventListener("contextmenu", handleRightClick);
box.addEventListener("keydown",handlekeyDown);


document.addEventListener("mousemove",handleMouseMove);
document.addEventListener("scroll",handlescroll);
console.log(document.body.clientHeight)

function handlescroll(event){
    console.log(event);
}

function handlescroll(event){
    console.log("position X is", event.clientX)
    console.log("position y is",event.clientY)
}

function handleMouseMove(event){
    console.log(event.clientX)
    console.log(event.clientY)
    console.log("position y is",event.clientY)
    console.log("mouse is moving");
}
function handlekeyDown(event){
    console.log(event);
    console.log("some key is pressed");
}
function handlekeyDown(event){
    console.log(event);
    console.log("pressed key is",event.key);
}




function handleRightClick(){
    console.log("Right clicked on box");

}

function handleMouseOver(){
    box.style.backgroundcolor ="red";
    console.log("mouse is over a box");

}
function handleMouseLeave(){
box.style.backgroundcolor ="aqua";
}




//2nd way
btn.onclick=dosomething;

//3rd way
btn.addEventListener("click",dosomething);

function dosomething(){
    console.log("doing something");

}

function handlescroll(){
    console.log("scrolling page")
}