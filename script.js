/***************** 
var firstname = "Anton";
var age = "19";
console.log(firstname + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
//type coercion
console.log(
  firstname +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he married? " +
    isMarried
);
//veriable mutation
age = "twenty eight";
job = "driver";

alert(
  firstname +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he married? " +
    isMarried
);
var lastname = prompt("What os his last Name");
console.log(firstname + " " + lastname);

//basic operators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//Math operators
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators

var JohnOlder = ageJohn < ageMark;
console.log(JohnOlder);

//typeof operator
console.log(typeof JohnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//mULTIPLE operator
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
//grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//muliple assignment
var x, y;
x = y = (3 + 5) * 4 - 6; //8*4 -6//32-64//26
console.log(x, y);

//more opearors
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

var massJohn = 92;
var heightJohn = 1.95;
var massMark = 78;
var heightMark = 1.69;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}
//John's age 
var firstname = "John";
var age = 29;

if (age < 13) {
  console.log(firstname + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstname + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstname + " is a young man");
} else {
  console.log(firstname + " is a man");
}
*/

var firstname = "John";
var age = 16;
age >= 18
  ? console.log(firstname + " drinks beer.")
  : console.log(firstname + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}

console.log("test"); // to be removed
