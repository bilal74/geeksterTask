// 1. What are arrays in JavaScript and why are they useful ?
// 2. what are objects in JavaScript and why are they useful ?
// 3. what are a couple of key differences between objecs and arrays ?
// 4. what is the index of an array ? what is it used for ?
// 5. what is a property ?
// 6. what is a method ?

//7. Create an array named colors that contains five different names of colors as strings.
//8. Access the first color in the array and print it to the console using console.log()
//9. Now do the same with the third color in the list.
//10. Write one line of code that changes the value of the last color in the list to "ultraviolet".
//11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
//12. Add another color to the end of the list.
//13. Add another color to the beginning of the list.
//14. Print the length of the array to the console with console.log()
//15. Remove the last color from the end of list, and then print the length of the array to the console one more time.
//16. Write a for loop to iterate through every color in the array and print each color's value to the console.
//17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.
//18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list.

// var colors = ["red", "green", "blue", "violet", "maroon"]; //7
// console.log(colors[0]); //8
// console.log(colors[2]); //9
// console.log((colors[4] = "ultraviolet")); //10
// var fourthColor = "white"; //11
// console.log((colors[3] = fourthColor));
// console.log(colors);
// colors.push("black"); //12
// console.log(colors);
// colors.unshift("orange"); //13
// console.log(colors);
// console.log(colors.length); //14
// colors.pop(); //15
// console.log(colors.length);
// for (var i = 0; i < colors.length; i++) {
//   //16
//   console.log(colors[i]);
// }
// for (var i = 0; i < colors.length; i++) console.log(i + ":" + colors[i]);
// for (var x of colors) console.log(x);
// var lastColor = colors.length - 1;
// var last = colors[lastColor];
// // colors.push(last);
// console.log(last); //18

/***  @OUTPUT 
red
blue
ultraviolet
white
[ 'red', 'green', 'blue', 'white', 'ultraviolet' ]
[ 'red', 'green', 'blue', 'white', 'ultraviolet', 'black' ]
[ 'orange', 'red', 'green', 'blue', 'white', 'ultraviolet', 'black' ]
7
6
orange
red
green
blue
white
ultraviolet
0:orange
1:red
2:green
3:blue
4:white
5:ultraviolet
ultraviolet
*/

//19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page {for example: the character's name , origin and author}.
//20. Use console.log() to print the penguin's name to the console as part of a welcome message.
//21. Write another line of code that adds a new property to your penguin called canFly and set it to false.
//22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
//23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above.
//24. Next, call your penguin's sayHello() method and make sure that it works.
//25. Without modifying any of your previous code, change the penguin's name to "Penguin" and then call your penguin's sayHello() function one more time to make sure it still works.
//26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
//27. Call your penguin's fly() method and make sure it works.
//28. Change the canFly property to true
//29. Now call your penguin's fly() method again and make sure it works as expected.
//30. Write a for ... in loop to print each key to the console.
//31. Write another for ... in loop to print the value of each key to the console.

// console.log("\n");
// console.log("Object");
// console.log("\n");

var myPenguin = {
  //19
  character: "Sergant Penguin",
  origin: "Donald Duck",
  notes: "A military penguin",
};

console.log(
  "Hello, In a penguin and my name is " +
    myPenguin["character"] +
    " or " +
    myPenguin.character
); //20

myPenguin.canFly = false; //21

myPenguin.chirp = function () {
  //22
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
};

myPenguin.chirp();

myPenguin.sayHello = function () {
  //23
  console.log("Hello! in powerful military penguin " + this.character);
};

myPenguin.sayHello();

myPenguin.character = "Penguin"; //24

myPenguin.sayHello();

myPenguin.fly = function () {
  //25
  if (this.canFly) console.log("I can fly!");
  else console.log("No flying for me!");
};

myPenguin.fly();

for (var x in myPenguin) {
  console.log(x);
}

for (var x in myPenguin) {
  console.log(myPenguin[x]);
}

//32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
//33. Access your penguin's second favorite food and print it to the console using console.log()
//34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
//35. Add another food to the end of the list.
//36. Print the length of your penguin's favoriteFoods array to the console with console.log()
//37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to “pineapples".
//38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.
//39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.

myPenguin.favoriteFoods = ["Apple", "orange", "carrot"]; //32

console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0]; //33

console.log(firstFavFood);

myPenguin.favoriteFoods.push("Banana"); //34

console.log(myPenguin.favoriteFoods);

console.log(myPenguin.favoriteFoods.length); //35

myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1] = "pineapple"; //36

console.log(myPenguin.favoriteFoods);

var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length - 1];

for (var i = 0; i < myPenguin.favoriteFoods.length; i++)
  console.log(myPenguin.favoriteFoods[i]);

for (var x of myPenguin.favoriteFoods) console.log(x);

//40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value!
//41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
//42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch"
//43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value.
//44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property
//45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console.

myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Black shirt",
  pants: "shorts",
  shoes: "slippers",
}; //40

console.log(myPenguin.outfit);

var penguinHatType = myPenguin.outfit.hat; //41

console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch"; //42

console.log(myPenguin.outfit);

myPenguin.outfit.hat = "top hat"; //43

console.log(myPenguin.outfit);

delete myPenguin.outfit.pants;

console.log(myPenguin.outfit);

for (var item in myPenguin.outfit) console.log(myPenguin.outfit[item]);

//46. Create a new variable named penguins and set it equal to an array that lists these three penguins!
//47. Access the first penguin in the list and print it to the console using console.log()-- notice that you can see all the properties and methods of that object listed in the console
//48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
//49. Print to the console the name of the last penguin in the list.
//50. Remember the penguin you created earlier, with the variable name of myPenguin ? Add that penguin to the end of the penguins array!
//51. Print the length of the penguins array to the console.
//52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
//53. Call the sayHello method of the first penguin in your penguins array
//54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
//55. Write a for loop to call the sayHello method of every penguin in the array
//56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2
//57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!"

var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

var penguins = [gunter, ramon, fred]; //46

console.log(penguins);

console.log(penguins[0]); //47

var secondPenguin = penguins[1]; //48

console.log(secondPenguin);

console.log(penguins[penguins.length - 1]); //49

penguins.push(myPenguin); //50

console.log("\n" + "Assemble Object" + "\n");

console.log(penguins);

console.log(penguins.length); //51

penguins[0].canFly = true; //52

console.log(penguins);

penguins[0].sayHello(); //53

for (var i = 0; i < penguins.length; i++) console.log(penguins[i].name); //54

for (var i = 0; i < penguins.length; i++) penguins[i].sayHello(); //55

for (var i = 0; i < penguins.length; i++) penguins[i].numberOfFeet = 2; //56

for (var i = 0; i < penguins.length; i++) {
  if (penguins[i].canFly) {
    console.log(penguins[i].name + " can fly");
  } else {
    console.log(penguins[i].name + " cannot fly");
  }
}