document.write(
  "<h2>Hey i am kaviya i connect this by using external js file</h2>"
);
// this is the instructions to the browser from js
document.write(
  "<h4>Try to seperate by semicolon that avoid many problems..</h4>"
);
// js is loosely typed  or not strictly typed programming language
// js is dynamically typed scripting variable
var num = 10;
console.log(num);
// here we no need to tell the datatype its automatically assigned
// depending upon value the data type is changed
num = "kaviya";
// here u can see line no 6 var num is an number type
// line no 10 we assign string to the same variable name of num
console.log("Yes ", num);

// Identifier rules
// only allowed letters a-z  or A-Z  , underscore and $ allowed ,Number is allowed in between not starting
//don't use reserved keyword as variable name for js
// var var=100;-----------------> this is reserved word

// assignment == right to left assigned
// using + sign mean it is left to right  assigned
// when one or more operators used mean it will work based on operator precedance BODMAS  rule

// js accept number string and boolean as a switch and casee values

// print the tables of 9
let nums = 9;
for (let index = 1; index <= 20; index++) {
  console.log(`${nums} * ${index} = ${nums * index}`);
}

// print first 5 even numbers

let count = 1;
while (count < 11) {
  if (count % 2 == 0) {
    console.log(count);
    count++;
  }
  count++;
}

//FUNCTIONS
/*
 set of statements that perform same task repeatedly
 insteaf  of writing thee same line of code multiple times
 we can include that set of code inside the function
 whenever u want next time just call that function to perform as many we want.
*/

function add(a, b) {
  return a + b;
}
console.log(add("Ram ", "Seetha"));
console.log(add(12, 65));

/*--------------------Local scope and global scope------
depending upon where u assigned a variable we can tell the scope of that variable
*/
var a = 90;
// above is global variable

function localscope() {
  console.log(a); // global variable of a can be accessed anywhere
  var b = 9;
  console.log(b);
}

localscope();
console.log(a);
// console.log(b);// this is local scope only the lifetime is within the function not outside the function

variable = "kaviya"; // by default it is global variable
function global() {
  console.log(variable);
}
global();

//Arrays in js
const array = ["pen", "pencil", "book", "note"];
console.table(array);

const array1 = [];
array1.push(90);
array1.push(45);
array1.push(78);
console.table(array1);

//javascript is an object oriented language
// it support inheritance class encapsulation but implementation is little bit different

//creating object using object literals or object constructor or object.create(prototype,properties) or class { constructor() ..}

const person = {
  firstname: "kaviya",
  age: 22,
  role: "FullStackDeveloper",
  salary: 45_000,
};
console.log(person);
console.table(person);

// we can also assign function inside the object that mean methods are allowed inside the object another name of fucntion is called behaviour

//object literals to create an object:
const student = {
  id: 20,
  strength: 56,
  score: 100,
  teach: function () {
    console.log("Teaching...");
  },
  schoolDetails: {
    schoolName: "JKS matric school",
    country: "india",
  },
};
console.log(student);
console.log("---------------------");
console.table(student);

//boolean number string date are objects only
// instead of using new keyword wee can use literals
// to avoid the execution speed of the browser

student.learn = "progress";
console.table(student);
// we can add any number of property even though after creating an object

//we can also change the value of particular property mentioned in the object
student.score = 98;
console.log(student);
