//imgE1=document.getElementById("my-img");

const myImage = document.getElementById("myImage");
const toggleButton = document.getElementById("toggleButton");

let isFirstImage = true;
toggleButton.addEventListener("click", function() {
    if (isFirstImage) {
        myImage.src = "https://www.architecturaldigest.com/story/i-test-drove-lamborghinis-dollar600000-car-heres-what-i-thought-of-their-most-powerful-car-ever";
    } else {
        myImage.src = "https://www.carscoops.com/wp-content/uploads/2020/07/2021-Lamborghini-Huracan-EVO-Spyder-1.jpg";
    }
});
    isFirstImage = !isFirstImage;
    

imgE1.getAttribute();
imgE1.setAttribute();
imgE1.removeAttribute();

const width= imgE1.getAttribute("Width");
debugger;
console.log("width of the image is", width);

imgE1.removeAttribute("class");
imgE1.setAttribute("class","BMW");
console.log(imgE1.id); 
imgE1.id="";


function changeImg(){
imgE1.setAttribute("src","https://www.architecturaldigest.com/story/i-test-drove-lamborghinis-dollar600000-car-heres-what-i-thought-of-their-most-powerful-car-ever");
console.log(changeImg);
}



const paragraph = document.getElementById("para");

function greetMessage(){
    //ask user for his name
    const name=prompt("Enter your name");
    //add that name with some message to your para
    console.log("Good morning" + name);
   paragraph.innerText="good morning" + name;

}


















