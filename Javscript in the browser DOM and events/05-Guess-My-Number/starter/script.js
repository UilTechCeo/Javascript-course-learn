'use strict';

// to select an element, you use the document.queryselector, and put in a selector inside of quatations in the bracket

console.log(document.querySelector(".message"));

console.log(document.querySelector(".message").textContent); // to get the text content of the element

// so DOM manipulation is basically using javascript to interact with our interfaces

/* DOM which stands for object document model is a structured representation 
 of html documents that allows javascript to access Html and styles to manipulate them. 
 
 it is automatically created by the browser as soon as the html page loads, and is then stored in a tree-like 
 structure, where each HTML element is an object. */


//  we can also set element content
document.querySelector(".message").textContent = "correct 🎉"


// change another element, change the input field and read it.

document.querySelector(".guess").value = 8
console.log(document.querySelector(".guess").value)

/* but what if we wanted that to happen when we clicked on the button
we use an event listener. we basically make an element like a button to wait for a specific event and respond to it.
*/

// so let us select the button element first, when it is selected we can call the "add event listener" on the object, so as to use it
// we then pass in the "click" as the first argument, and the second argument is the function that gets exec when it detects a click. The func is also called an event handler. the func is not called

document.querySelector(".check").addEventListener("click", function() {
    console.log(document.querySelector(".guess").value)
})

// the rest of the code