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


// falsy values: undifined, null, 0, "", Nan
// truthy values: Not falsy values

var height = "";

if (height || height === 0) {
  console.log("Verible is defined ");
} else {
  console.log("Verible has NOT been defined");
}

//Equality operators
if (height == "23") {
  console.log("The == operator does type coercion! ");
}

var scoreJohn = (95 + 120 + 103) / 3;
console.log(scoreJohn);
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreMike);
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreMary);
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("Team John was win the game with " + scoreJohn + " points");
} else if (scoreMike > scoreMary && scoreMike > scoreJohn) {
  console.log("Team Mike was win the game with " + scoreMike + " points");
} else if (scoreMary > scoreMike && scoreMary > scoreJohn) {
  console.log("Team Mary was win the game with " + scoreMary + " points");
} else {
  console.log("There is a draw!!");
}


  if (scoreJohn > scoreMike) {
    console.log("Team John was win the game with " + scoreJohn + " points");
  } else if (scoreMike > scoreJohn) {
    console.log("Team Mike was win the game with " + scoreMike + " points");
  } else {
    console.log("There is a draw!!!");
  }
 

//Functions

function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retiment = 65 - age;

  if (retiment > 0) {
    console.log(firstName + " retires in " + retiment + " years");
  } else console.log(firstName + " already retired.");
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");


//Function Statements and Expressions

var whatDoYouDO = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teacher kids how to code";

    case "driver":
      return firstName + " drivers a cab in Lisbon ";

    case "designer":
      return firstName + " designs beautiful websites ";
    default:
      return firstName + " does something else ";
  }
};

console.log(whatDoYouDO("teacher", "John"));
console.log(whatDoYouDO("driver", "Jane"));
console.log(whatDoYouDO("designer", "Mark"));


//Arrays
//Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

//Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

//Different data types
var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John IS a designer";
console.log(isDesigner);



function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);

//Objects and properties
//Object literal
var john = {
  firstname: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};
console.log(john.firstname);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane.lastName = "Smith";
consloe.log(jane);



//Obhect and Methods

var john = {
  firstname: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = 2018 - this.birthYear;
  },
};
john.calcAge();
console.log(john);



let john = {
  firstName: "John",
  lastName: "Smith",
  mass: 70,
  height: 1.8,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
let mark = {
  firstName: "Mark",
  lastName: "Sheretov",
  mass: 98,
  height: 1.9,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    john.firstName + " " + john.lastName + " has a higher BMI of " + john.bmi
  );
} else if (john.calcBMI() < mark.calcBMI()) {
  console.log(
    mark.firstName + " " + mark.lastName + " has a higher BMI of " + mark.bmi
  );
} else {
  console.log("They have the same BMI");
}


//Loops and itaration

for (var i = 0; i < 10; i++) {
  console.log(i);
}
var john = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}

var john = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

var john = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}
*/
var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  },
};

var mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + this.tips[i];
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
