// -------------Task 1 -------------

var friends = ["Mohamed", "Ali", "Abdullah", "Anas", "Mustafa"];

var friend0 = {
  name: "Mohamed",
  age: 26,
  address: "cairo",
  child1: "shady",
  child1_age: 7,
  child2: "faddy",
  child2_age: 2,
  job: "engineer",
  Qualification: " Master's in Engineering 👷‍♂️👷‍♂️",
};
console.log(friend0);

var friend1 = {
  name: "Ali",
  age: 35,
  address: "Alex",
  child1: "Hossam",
  child1_age: 10,
  child2: "Malak",
  child2_age: 4,
  job: "Programmer",
  Qualification: " Frontend React Developer 💻💻 ",
};
console.log(friend1);

var friend2 = {
  name: "Abdullah",
  age: 44,
  address: "Giza",
  child1: "Mohaned",
  child1_age: 16,
  child2: "Fareda",
  child2_age: 12,
  job: "Doctor",
  Qualification: " Master's And PH.D Degree 👨‍⚕️👨‍⚕️",
};
console.log(friend2);

var friend3 = {
  name: "Anas",
  age: 50,
  address: "Port Said",
  child1: "Ali",
  child1_age: 22,
  child2: "yamen",
  child2_age: 15,
  job: "Political analyst",
  Qualification: " Best Political analyst in Egypt  ",
};
console.log(friend0);

var friend4 = {
  name: "Mustafa",
  age: 55,
  address: "cairo",
  child1: "Ahmed",
  child1_age: 28,
  child2: "Ashraf",
  child2_age: 35,
  job: "judge",
  Qualification: " Master's degree in judiciary 👨‍⚖️👨‍⚖️ ",
};
console.log(friend4); 

// -------------Task 2 -------------

document.write(friend0.child1); //shady

var break_line = document.createElement("br");
document.body.appendChild(break_line);

// -------------Task 3 ------------

document.write("Welcome" + friend0.child1_age + friend0.child2); //Welcome7faddy

var break_line = document.createElement("br");
document.body.appendChild(break_line);

// -------------Task 4 ------------

console.log(friend3.job); //Political analyst

// -------------Task 5 ------------

document.write(friend2.name + friend2.age + friend2.Qualification); //AnasAli22
 
var break_line = document.createElement("br");
document.body.appendChild(break_line);

// -------------Task 6 ------------

console.log(friend3.name + friend3.child1 + friend3.child1_age); //Political analyst

// -------------Task 7 ------------

console.log(friend0.child1_age + friend0.child2 + "Welcome"); //7faddyWelcome

// -------------Task 8 ------------

console.log(friend3.job); // Political analyst

// -------------Task 9 ------------

document.write(friend2.name + friend2.age + friend2.Qualification); //Abdullah44Master's And PH.D Degree 👨‍⚕️👨‍⚕️

var break_line = document.createElement("br");
document.body.appendChild(break_line);

// -------------Task 10 ------------


console.log(friend3.name + friend3.child1 + friend3.child1_age); // name: "Anas", child1: "Ali", child1_age: 22, //result :::::: AnasAli22
// 


console.log(friend3.name + friend3.child2 + friend3.child2_age); //name: "Anas", child1: "yamen", child1_age: 15, //result :::::: Anasyamen15