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

for (let i=1; i<=100; i++) {
    const newElement = createClassElement('li','cell-10');
    newElement.innerHTML = `${i}`;
    appendElement(newElement, grid);
}

