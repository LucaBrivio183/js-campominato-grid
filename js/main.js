//strict rules

'use strict'

//functions

//function for creating html element with specific class 

function createClassElement(elementHTML, className) {
    let newElement = document.createElement(elementHTML);
    newElement.classList.add(className);
    return newElement;
}

//function for  appending element 
function appendElement(element, parentElement) {
    parentElement.appendChild(element);
  }

//main

//define grid variable from DOM
const grid = document.querySelector('.grid');
//const for recalling  generate-btn
const generateButton = document.getElementById('generate-btn');

generateButton.addEventListener('click', 
    function() {
        grid.innerHTML = '';
    for (let i=1; i<=100; i++) {
        const newElement = createClassElement('li','cell-10');
        newElement.innerHTML = `${i}`;
        appendElement(newElement, grid);
    }
}
);

//add clickable li items
let cell = document.querySelectorAll('li');

cell.forEach(addEventListener('click', 
function() {
    cell.classList.add('clicked-cell');
}
));