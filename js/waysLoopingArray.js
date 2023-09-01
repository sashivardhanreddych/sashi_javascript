/****
 * 7 Ways of loop through an array in javascript:
 * 1. For loop
 * 2. For... in loop
 * 3. While Loop
 * 4. do...while loop
 * 5. for... of loop
 * 6. forEach() method
 * 7. map() method
 * 
*/

const evenNumbers = [2, 4, 6, 8, 10, 12];

for(let i = 0; i < evenNumbers.length; i++ ){
    console.log("looping using For loop :", evenNumbers[i]);
}

for(let item in evenNumbers ){
    console.log("looping using For In loop :", evenNumbers[item]);
}

for(let item of evenNumbers ){
    console.log("looping using For Of loop :", item);
}

let j = 0;
while(j < evenNumbers.length){
    console.log("looping using While loop :", evenNumbers[j]);
    j++;
}

let k = 0;
do{
    console.log("looping using Do While loop :", evenNumbers[k]);
    k++;
}
while(k < evenNumbers.length);

evenNumbers.forEach((value)=>{
    console.log("looping using For Each loop :", value);
})

let mapArrayItem = evenNumbers.map((value)=>{
    console.log("looping using Array Map loop :", value);
})
// console.log("looping using Array Map loop :", mapArrayItem);