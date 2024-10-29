//CREATING AND ACCESSING PROPERTIES
// - Create an object called `car` with properties: `make`, `model`, `year`, and `color`.
//- Access and log the `make` and `year` of the `car` object to the console.
const car = {make: "1930", model: "2021", year: "2024", color: "Black"} //Array making {}
console.log("Making of car:",car.make) //Accesing array (dot notation (.))
console.log("Year of car:",car['year']) //Accesing array (square notation [])


//MODIFYING PROPERTIES / UPDATE
//- Create an object called `restaurant` with properties: `name`, `location`, `cuisine`, and `rating`.
//- Update the `rating` of the `restaurant` object, then log the entire object to see the updated rating.
const restaurant = {name: 'KFC', location: 'Bahria Town' , cuisine: 'Fast Food' , rating: '4 stars'} 
console.log(restaurant['rating'] ='5 stars') 
console.log(restaurant)


//ADDING NEW PROPERTIES
//- Create an object `game` with properties: `title`, `genre`, and `platform`.
//- Add a new property called `releaseYear` to the `game` object and set it to the current year. Then log the updated object.
const game = {title : "COD" , genre : "military first-person shooter video game", platform : 'PlayStation'}
game.releaseYear = '2003'
console.log(game)


//DELETING PROPERTIES
//- Create an object `employee` with properties: `name`, `position`, `department`, and `salary`.
//- Delete the `salary` property from the `employee` object and log the object to confirm the property was removed.
const employee = {name : 'Fatima', position:'Intern', department: 'IT', salary : '0' }
console.log(employee)
const result = delete employee.salary
console.log(employee)


//CALLING METHODS
//- Create an object `person` with properties `name`, `age`, and a method `greet` that logs `"Hello, my name is [name]"`.
//- Set the `name` property and call the `greet` method to see the output in the console.
const person = {
  name: "Fatima",
  age: 23,
  greet: function() {
    console.log("Hello my name is, " + this.name);
  }
  
};
  person.greet();


//USING 'this' IN METHODS
//- Create an object `player` with properties `username` and `score` and a method `showScore` that logs `"Score for [username] is [score]"`.
//- Set values for `username` and `score`, then call `showScore` to test how `this` works.
const player = {username: "Kazmi" , score: "96" , showScore : function() { console.log("Score for", this.username , "is" , this.score); } };
player.showScore();


//LOOPING THROUGHT PROPERTIES 
//- Create an object `house` with properties `rooms`, `bathrooms`, `garage`, and `yard`.
//- Use a `for...in` loop to log each property name and value in the `house` object.
const house = {rooms: '5', bathrooms: '6', garage: '2', yard : '3'}
for (const property in house) {
  console.log(property + ': ' + house[property]);
}
