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
const difficulty = document.getElementById('difficulty');


generateButton.addEventListener('click', 
    function() {
        grid.innerHTML = ''; //empty  the grid every click of play button
        let difficultyValue = difficulty.value;
        let gridLength = 100;
        let cellClass = 'cell-10'
        if (difficultyValue === 2) {
                gridLength = 81;
                cellClass = 'cell-9'
        } else  if (difficultyValue === 3) {
            gridLength = 49;
            cellClass = 'cell-7'
        } 
     
        for (let i=1; i<=gridLength; i++) { 
            const newElement = createClassElement('li',cellClass);
            newElement.innerHTML = `${i}`;
            appendElement(newElement, grid);
        }
    let cell = document.querySelectorAll('li');//select all cells
    cell.forEach(function (element) { //create an element for every cell
        element.addEventListener('click', function() {//waitfor click on cell
              element.classList.add('clicked-cell'); //add css class at click
          });
      });
}
);
