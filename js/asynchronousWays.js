/****
 * Callback:
 *          Callback is a function that passes as an argument to another function.
 *          callback function is invoked whenever the another function finished it's execution.
 * 
 */

console.log("check first");
console.log("check second");
setTimeout(()=>{
  console.log("check third");
}, 10)
let sum = 0;
for(i=0; i< 1000000000; i++){
    sum+= i;
}
console.log("check sum", sum);
console.log("check fourth");

let greetings = 'Hello world';
greetings = 'Hello ChatGPt';
console.log("greetings", greetings);


function step1(val, callbackFn){
    callbackFn(val+10, false);
}

function step2(val, callbackFn){
    callbackFn(val+10, false);
}

function step3(val, callbackFn){
    callbackFn(val+10, false);
}

// Callback's
step1(10, function(result1, error){
    if(!error){
        step2(result1, function(result2, error){
            if(!error){
                step3(result2, function(result3, error){
                    if(!error){
                        console.log("Result is", result3);
                    }
                })
            }
        })
    }
})

/***
 *  If we are writing the code more than 10 nested functions, it makes complexity and
 *  occur callback hell inorder to avoid that
 *  
 *   1) use proper comments 
 *   2) inside the functions i.e step1 function write the step2 function similarly respective
 *   3) Use promises or async/await    (recommended approach)
 * 
 *  */ 


/***
 * Promises:A Promise is a javascript object that links producing code and consuming code.
 * Producing Code: It is code that can take some time. i.e logic will present here
 * Consuming Code: It is code that must wait for the result
 */
function p1(value, error){
    return new Promise((resolve, reject) =>{
        if(!error){
            resolve(value + 10);
        } else{
            reject("something went wrong");
        }
    })
}

function p2(value, error){
    return new Promise((resolve, reject) =>{
        if(!error){
            resolve(value + 10);
        } else{
            reject("something went wrong");
        }
    })
}

function p3(value, error){
    return new Promise((resolve, reject) =>{
        if(!error){
            resolve(value + 10);
        } else{
            reject("something went wrong");
        }
    })
}

p1(10, false)
    .then((result1), p2(result1, false))
    .then((result2), p3(result2, false))
    .then((result3) => console.log(result3))
    .catch((error) => console.log(error));


const promise1 = Promise.resolve("Understanding the promise");
const promise2 = 100;
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "Subscribe for more updates");
})
Promise.all([promise1, promise2, promise3]).then((values)=> { console.log("promise values are", values)});