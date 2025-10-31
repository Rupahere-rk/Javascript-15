console.log("hii");

const students =["Rupali","Purvi","Atharv","Gayatri"];
console.log(students);
console.log(typeof students);
console.log(Array.isArray(students));
console.log(students.length);

// To access elements
console.log(students[0]);

//array.at index
console.log(students[10]);
console.log(students.at[-1]);
console.log(students. lastIndexOf ("Rupali"));
console.log(students.at(-1));

//How to add/update elements in an array
students[2]="Rupali kher";
console.log(students[2]);
students[4]="Supriya";
console.log(students[4])
students[10]="supriya";
console.log(students); // empty*6


//push
students.push("Rupa");
console.log(students);

//unshift
students.unshift("Tejal");
console.log(students);

//deleting Elements
students.pop();
console.log(students);

//start
students.shift();
console.log(students);

students.unshift("Raja");
console.log(students);

students.splice(1,2);
console.log(students);

students.splice(1,2,"Rupa","Rama");
console.log(students);


const person ={
    userName: "Rupa",
    age:55,


}
console.log(person);
person.userName ="Anju";

console.log(person);



