/***
 *  @What is context?
 *  Context is related to objects. It refers to the object to which a function belongs.
 *  When you use the JavaScript “this” keyword, it refers to the object to which function
 *  belongs. Scope refers to the visibility of variables, and content refers to the object
 *  to which a function belongs.
 *
 *
 */

// console.log(this);

// var data = {
//   a: 1,
//   b: 2,
//   fn: function () {
//     console.log(this.a + " " + this.b);
//   },
// };

// var result = { a: 3, b: 5 };

// data.fn();
// var f1 = data.fn;
// f1() -> It is refer to inside window context.
// f1.call(result) -> It is refer to the call context.
// f1.call(result);

/**
 * @caller / @callee
 * fullName() -> window is caller.hence context are window.and fullName is callee.
 * fullName.call(myBioData) -> myBioData is context.
 *
 */

/**
 * (method) Function.apply(this: Function, thisArg: any, argArray?: any): any
    Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
    @param thisArg — The object to be used as the this object.
    @param argArray — A set of arguments to be passed to the function. 
 */

//  var fullName = function(firstName , lastName) { console.log(firstName + lastName); }

//  var fullName = function() { console.log(this.firstName + this.lastName); }

//  fullName(); // NAN

//  var myBioData = { firstName: "Chirag", lastName: "Kumar" }

//  fullName.call(myBioData); // ChiragKumar

//  var stdBiodata = { firstName: "Mr", lastName: "stud" }

//  fullName.call(stdBiodata);// Mrstud

// var fullName = function (greet) {
//   console.log(greet + " " + this.firstName + this.lastName);
// };

// var myBioData = { firstName: "Chirag", lastName: "Kumar" };

// fullName.call(myBioData, "Hello", "Bye"); // start from 2nd param we can pass value in the function.

// fullName.apply(myBioData, ["Hii", "bye"]);

// var pNamefn = fullName.bind(myBioData);
// pNamefn("Hello")

// var stdBiodata = { firstName: "Mr", lastName: "stud" }

// var b = fullName.bind(stdBiodata);
// b("Hii Hello");
// a = 2;
// b = 3;
// var obj = {
//   a: 1,
//   b: 2,
//   childObj: {
//     c: 3,
//     add: function () {
//       console.log(this.a + " " + this.b + " " + this.c);
//     },
//   },
// };
// obj.childObj.add();
// var sum = obj.childObj.add;
// sum();

// Closure -> access all parent things.

function greet() {
    var name = "Hammad";
    return function () {
      console.log("Hi" + name);
    };
  }
  
  var greetMe = greet();
  
  greetMe();
  
  // function add(mul) {
  //   return function (x) {
  //     return mul * x;
  //   };
  // }
  
  // var addMul = add(10);
  
  // console.log(addMul(5));
  // console.log(addMul(15));
  
  function add(mul) {
    return function (x) {
      return function (y) {
        return mul + x + y;
      };
    };
  }
  
  console.log(add(10)(20)(30));