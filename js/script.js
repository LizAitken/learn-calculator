"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// listItems.forEach(function(listItem) {
//     listItem.addEventListener('click', function(){
//         console.log(this.innerHTML);
//     });
// });
// adding click handlers to number buttons
number.forEach(function(numbers) {
    numbers.addEventListener('click', function(){
        // console.log(this.innerHTML);
        input.innerHTML += this.innerHTML;
    });
});

// adding click handlers to the operation buttons
operator.forEach(function(operators) {
    operators.addEventListener('click', function(){
        // console.log(this.innerHTML);
        let lastChar = input.innerHTML[(input.innerHTML).length - 1];
        if (lastChar === '+' ||lastChar === '-' || lastChar === '×' || lastChar === '÷') {
            let newString = (input.innerHTML).substring(0, (input.innerHTML).length - 1) + e.target.innerHTMl;
            input.innerHTML = newString;
        } else if ((input.innerHTML).length == 0) {
            console.log('enter a number first');
        } else {
            input.innerHTML += this.innerHTML;
        } 
            // input.innerHTML += this.innerHTML;
    });
});
// });

// on click of 'equal' button
result.addEventListener('click', function(){
    console.log(this.innerHTML);
});


// clearing the input on press of clear
clear.addEventListener('click', function(){
    input.innerHTML = '';
});