// Function Declaration

// function sayHelloWorld() {
//   let whatToSay = 'Hello, World!';
//   console.log(whatToSay);
// }
// sayHelloWorld()

// function helloTuba() {
//   let howNow = 'Yo, this is siiiiickkkk!'; console.log(howNow);
// }
// helloTuba()
// sayHelloWorld()
// helloTuba(); sayHelloWorld()
// function helloMary() {
//   console.log('hello, mary!');
// }

// function helloLucy() {
//   console.log('hello, Lucy!');
// }

// function helloJohn() {
//   console.log('hello, john!');
// }
// helloMary()
// helloLucy()
// helloJohn()

// function hello(name) {
//   console.log('hi there '+name+'!');
// }
// hello('delta');
// hello('bertie'); hello('beth'); hello('anna weather');

// function why(name) {
//   console.log('the truth is ' +name+' hates you');
// }
// why('bert')

// function speakALot(name, howMany) {
//   for (let i=0; i < howMany; i++) {
//   console.log('hello '+name+'!');
//   }
// }
// speakALot('Randy', 2)
//  below don't work because the argument does not satisfy the two parameters given when function was declared.
// speakALot(3, 'ERROR');
// speakALot('alex', 5);
// speakALot(2);

// function functionOne(x) {
//   console.log(x);
// }
// function functionTwo(var1, var2) {
//   var2(var1);
// }
// functionTwo(2, functionOne);
// // (2, x) = x(2);

// let friends = ["mike", "stacy", "andy", "rick"];
// friends.forEach(function (par1, par2){
//   console.log(par2 + 0 + ". " + par1);
// })

// function aFunction(text){
//   console.log("hello"+text)
// }
// function bFunction(name){
//   return aFunction(name)
// }
// bFunction("Dennis")

// let roundDown1 = Math.floor(4.2);
// console.log(roundDown1);
// let rD2 = Math.floor(10.7)+5;
// console.log(rD2)
// console.log(Math.floor(5+0.49))

// let zeroToOne = Math.random();
// console.log(zeroToOne);

// function getRA(0, 100){
//   return Math.random() * (100 - 0) + 0;
// }

function gTS () {
  let grades = ['Master', 'Good', 'Acceptable', 'Average', 'Poor', 'Fail'];

  let randomNumber = Math.random();
  randomNumber = randomNumber * grades.length;
  randomNumber = Math.floor(randomNumber);
  return grades[randomNumber];
}
let myGrade = gTS();
console.log(myGrade)

let anon = function(){
  console.log("anon fxn");
}
anon();

let beard = function(){
  console.log("my fxn");
}
beard()

// let test1 = Math.random() *100 + " + " + Math.floor(Math.random()*101);
// console.log(test1)
// 76.168... + 64

// function getRandoNum(limit){
//   return Math.floor(Math.random());
// }
// function makeQuizz(limit){
//   let genQuiz = getRandoNum(limit) + "+" + getRandoNum(limit);
//   return(genQuiz);
// }
// newQuizz = makeQuizz()
// newQuizz = makeQuizz()

// function noReturn(){
//   let foo = "fighters";

// }
// let bar = noReturn();
// console.log(bar)

// let foo;
// if (foo === undefined){
//   console.log("yeah");
// } else {
//   console.log("naaah")
// }

// function avg(array){
//   if (array.length === 0) {
//     return;
//   }

//   for (var sum = 0, i=0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum/array.length;
// }

// avg([ 10, 2, 13 ]);

// function sum(array) {
//   for (var sum=0, i=0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// function avg(array){ { 
//   return sum(array) / array.length;

// }
// }
// avg()

// function foot() {
//   let myVariable = 'ironhack';
// }

// console.log(myVariable)

// function myFunc(){
//   theObject.make = 'Toyota';


// let mycar = {make: 'Honda', model: 'Accord', year: 1998};
// let x, y;
// x = mycar.make;
// y = mycar.make;
// }
// myFunc(mycar);

function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
var f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);