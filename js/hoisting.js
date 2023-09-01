// Hoisting in javascript

console.log("number", num, number);
num = 6;
var num;

// let numbr;   // Uncaught ReferenceError: Cannot access 'numbr' before initialization
// const numbr1;  // Uncaught SyntaxError: Missing initializer in const declaration (at hoisting.js:6:7)

newFunc();
// newFunc2();  // Uncaught TypeError: newFunc2 is not a function
// newFunc3();   // Uncaught TypeError: newFunc3 is not a function


/****
 * newFunc() is a function declaration and gets hoisted, so it can be called before its actual position in the code.
 * 
  newFunc2 and newFunc3 are variables declared using the var keyword. 
  
  While the variable declarations themselves are hoisted, the assignments 
  (newFunc2 = ... and newFunc3 = ...)  are not hoisted.
  
  So, when you try to call newFunc2() and newFunc3(), they are not yet assigned the functions, 
  resulting in the "not a function" error.

 */

function newFunc(){
    console.log("checking newFunc");
}

var newFunc2 = function(){
    console.log("checking var newFunc 2");
}

var newFunc3 = () => {
    console.log("checking var array newFunc 3");
}

