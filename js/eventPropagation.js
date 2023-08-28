// Event Bubbling  <-- Default phase
let parent = document.getElementById("parent");
let child = document.getElementById("child");
let event1 = document.getElementById("target1");
let event2 = document.getElementById("target2");


/**** 
 * Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') 
 * if we add script tag in header, there is two ways to resolve it
 *  1) we need to move script tag to end of the body tag
 *  2) By using DOMContentLoaded event 
 *     document.addEventListener("DOMContentLoaded", () => { });
 * 
 */

event1.addEventListener( "click", () => {
    console.log("target 1 is clicked, >>>>Bubbling Phase<<<<")
});

event2.addEventListener( "click", (event) => {
    console.log("target 2 is clicked, >>>>Bubbling Phase<<<<")
    event.stopPropagation(); // we are stopping the propagation in this target phase only
    event.stopImmediatePropagation(); // we are stopping the propagation for the sibling elements too
});

event2.addEventListener( "click", (event) => {
    console.log("target 2 duplicate 1 clicked, >>>>Bubbling Phase<<<<")
});

event2.addEventListener( "click", (event) => {
    console.log("target 2 duplicate 2 clicked, >>>>Bubbling Phase<<<<")
});

child.addEventListener( "click", () => {
    console.log("child is clicked, >>>>Bubbling Phase<<<<")
});


parent.addEventListener( "click", () => {
    console.log("parent is clicked, >>>>Bubbling Phase<<<<")
});

// Event Capturing

event1.addEventListener( "click", () => {
    console.log("target 1 is clicked, >>>>Capturing Phase<<<<")
}, true);

event2.addEventListener( "click", () => {
    console.log("target 2 is clicked, >>>>Capturing Phase<<<<")
}, true);

child.addEventListener( "click", () => {
    console.log("child is clicked, >>>>Capturing Phase<<<<")
}, true);


parent.addEventListener( "click", () => {
    console.log("parent is clicked, >>>>Capturing Phase<<<<")
}, true);

// Event Delegation

let tasks = document.getElementById("tasks");
tasks.addEventListener( "click", (event) => {
    console.log("parent is clicked, >>>>Event Delegation<<<<")
    event.target.classList.toggle("completed");
});
