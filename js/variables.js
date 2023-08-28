// Variables In javascript

//Declarations & Initialization

// if we don't use variable keywords like var, let and const those are global variables
number = 5 ; // number variable is defined by 5,
var number = 10;
let number1 = 20;  // uncaught syntaxError: Identifier 'number' has already been declared;
const number2 = 30  // uncaught syntaxError: Identifier 'number' has already been declared;

/****
    Note: 
    1) without variable keyword like var, let, const. Javascript treats the global variable Ex: number = 5;
    2) let and const can declare once, if we try to redeclare then below error will throw
      uncaught syntaxError: Identifier 'number' has already been declared;

 */
console.log("global Variable:", number);



// Scope(Local, Global, block)

var digit = 1;
let string = "testLetString"
const testString = "testConstString"
function variableScope(){
    var digit = 2;
    let string = "blockLetString";
    let twoDigitNum = 10;
    const testString = "blockConstString"
    if(digit == 2){
        let twoDigitNum = 20;
        var threeDigitNum = 100;
        console.log("twoDigitNum", twoDigitNum);
    }

    globalDigit = 1000000;
    
    console.log("block (or) function scope:", digit, twoDigitNum, threeDigitNum, string, testString);
}
variableScope();
console.log("Global digit:", digit, globalDigit);

// ReInitialization for primitive data types

var num1 = 10;
num1 = 20;
let num2 = 50;
num2 = 60;
const pi = 3.141; //  "string", null, undefined
// pi = 3; // Uncaught TypeError: Assignment to constant variable.
console.log("ReInitialization for primitive", pi);

// ReInitialization for Reference data types

const students = [1,2,3,4,5];
students.push(6);

const teachers = students;
teachers.push(7);

//  output: students : [1,2,3,4,5,6,7]  and teachers : [1,2,3,4,5,6,7]
//  Here, if we changed the teachers array, it making the students array also. 
//  so, we can resolve above conflit by using spread operator

const teachersSpread = [...students];
teachersSpread.push(10);
console.log("ReInitialization for reference", students, teachers, teachersSpread);
// output: students : [1,2,3,4,5,6,7]  and teachersSpread : [1,2,3,4,5,6,7, 10]

const user = {name: "Sashi"};
user.age = 20;

const admin = user;
admin.age = 30;

// output:  user = {name: "Sashi", age: 30}  and admin = {name: "Sashi", age: 30}
//  Here, if we changed the admin object, it making the user object also. 
//  so, we can resolve above conflit by using JSON.parse(JSON.stringify(object)) method

const adminParseStringify = JSON.parse(JSON.stringify(user));
adminParseStringify.age = 40;
// output:  user = {name: "Sashi", age: 30}  and admin = {name: "Sashi", age: 40}

console.log("ReInitialization for reference", user, admin, adminParseStringify);

var student = "vardhan";
let mobile = "Redmi 7"

/****
 * 
 * How the variables stored in the memory
 * 
 
data_type           variable        value
-------------------------------------------
var                 student         vardhan

let                 mobile          Redmi 7

const               students        10001

const               user            10002

const               teachers        10001


reference_number           value

10001                   [1,2,3,4,5]

10002                   {name: "sashi"}


 */