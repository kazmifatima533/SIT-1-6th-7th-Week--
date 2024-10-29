//INTRO TO OBJ = KEY - VALUE PAIR & Using Function INSIDE OBJECT
const car = {
  color: "red",
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {  //start is a function that represents an action the car can perform.
    console.log("Car is starting...");
    return this; // 'this' refers to the car object
  }
};
// Example usage:
console.log(car.start()); // function call


//CREATING AN OBJECT : USING CURLY BRACES {}
const person = {
  name: "Fatima",
  age: 23,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};


//ACCESSING OBJ : DOT OR BRACKET NOTATION
//DOT NOTATION (.)
console.log(person.name);
//BRACKET NOTATION ([])
console.log(person['age']);


//MODIFYING / UPDATING PROPERTIES
console.log(person.age = 26); // Changes age to 26
console.log(person["name"] = "Syeda"); // Changes name to Syeda


//ADDING NEW PROPERTIES
person.gender = "female";
console.log(person.gender); // Output: female


//DELETING PROPERTIES USING delete keyword
delete person.age;
console.log(person.age); // Output: undefined


//CALLING METHODS (Use dot notation with parentheses () )
person.greet(); // Output: Hello, Syeda


//LOOPING THROUGH PROPERTIES (for...in loop to iterate over all properties in an object.)
for (let key in person) {
  console.log(key + ": " + person[key]);
}


  