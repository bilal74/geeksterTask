// Closures

// -> retain access to variable

// afun para: first
// sfun para: second
// return first + second;

// function first(a) {
//   return function second(s) {
//     return a + s;
//   };
// }

// var firstfun = first(5)(3);

// console.log(firstfun);

// var awFunc = function (first) {
//   //
//   var someFunc = function (second) {
//     return first + second;
//   };
//   return someFunc;
// };

// var someMoreFunc = awFunc("awe"); // someMoreFunc: parameter, is a func  // someMoreFunc = someFunc()

// console.log(someMoreFunc("some"));

// function User() Object: name, age

// getProfile: printing the name
// return another func: printing the age
// create a new use

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getProfile = function () {
//     // outer function context
//     console.log(this.name);
//     // return function func(){
//     return () => {
//       //inner function context
//       console.log(this.name);
//       console.log("I'm " + this.name + " " + this.age + " yrs old");
//     };
//   };
// }

// var user = new User("Manish", 25);
// var profile = user.getProfile();
// profile();

// var user = {
//   name: "Manish",
//   age: 25,
//   getProfile: function () {
//     var age = this.age;
//     console.log(this.name);
//     return function func() {
//       console.log(age);
//     };
//   },
// };
// var anon = user.getProfile();
// anon();

/** @call, @apply, @bind
 * 
 * 1. Call invokes the function and allows you to pass in arguments one by one.
   2. Apply invokes the function and allows you to pass in arguments as an array.
   3. Bind returns a new function, allowing you to pass in a this array and any number of arguments.  
 */

//    Apply vs. Call vs. Bind Examples
// @Call

var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.call(person1, "Hello"); // Hello Jon Kuperman
say.call(person2, "Hello"); // Hello Kelly King

// @Apply

var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.apply(person1, ["Hello"]); // Hello Jon Kuperman
say.apply(person2, ["Hello"]); // Hello Kelly King

// @Bind

var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say() {
  console.log("Hello " + this.firstName + " " + this.lastName);
}

var sayHelloJon = say.bind(person1);
var sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King


// two person property - favourite food

var person1 = { food1: "apple", food2: "orange" };
var person2 = { food1: "banana", food2: "guava"};

function func(greeting) { console.log(greeting + " " + this.food1 + ' ' + this.food2) }

// var fc = func;
func.call(person1 , "Favorite");
func.call(person2 , "Good one");

func.apply(person1, ["bit"]);
func.apply(person2, ["bit"]);

var newfunc1 = func.bind(person1);
newfunc1("Hii");
var newfunc2 = func.bind(person2);
newfunc2("Bye");


// two person property - favourite food
// func (eatAction, afterEatAction)

var john = {
    favouriteFood: 'pizza'
}

var bob = {
    favouriteFood: 'pasta'
}

var favFood = function (eatAction, afterEatAction) {
    console.log("Before, I was " + eatAction + " but after eating " + this.favouriteFood + " I was " + afterEatAction);

}

//bob.favFood('hungry', 'sleepy')

// call method for bob
// john 
// pass an array 

favFood.call(bob, 'hungry', 'sleepy')
favFood.call(john, 'angry', 'happy')
favFood.apply(john, ['angry', 'happy'])


// create a new var that binding bob to favfood

var eatSomething = favFood.bind(bob)
eatSomething('gobble', 'full')


// ------------------
// Normal function 
// ------------------
var person = {
    firstName: 'Pradeep',
    lastName: 'Kumar',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log("Normal function: " + person.fullName());

// ------------------------
// Using call() function 
// ------------------------


// create a new object and then refer to person

var myObject = {
    firstName: 'CSE',
    lastName: 'spec in Biotech'
}

var newName = person.fullName.call(myObject)


// --------------------
// apply() function
// --------------------
var numbers = [5, 6, 2, 3, 7];

// apply mathmax to this array

var max = Math.max.apply(null, numbers)

console.log(max);


// Example - 02
var array = ['a', 'b'];
var elements = [0, 1, 2];

var merged = array.push.apply(array, elements);



// ------------------
// Using bind() function 
// ------------------
var person = {
    firstName: 'Pradeep',
    lastName: 'Kumar',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var myObject = person.fullName
var getFullName = myObject.bind(person)

console.log(getFullName());