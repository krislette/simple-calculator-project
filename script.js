// let calculation = localStorage.getItem('calculatorStorage') || '';
// ^^^ commented out the local storage cause ion need that ^^^
// vvv set the calculation to an empty string instead vvv
let calculation = '';

clearCalculation(); // <<< calls the function to set the initial value to 0

// updates the calculation string based on the user input
function updateCalculation(userInput) {
    calculation += userInput;
    displayCalculation(calculation); // calls the function to display the calculation
    saveCalculation(); 
    /* ^^^ this piece of code right here saves the calculation 
     * it saves the calculation in the local storage
     * note to self: not sure if this is usable or not
     * since i cancelled the local storage on top
     * just leave this right here for the meantime
     */  
}

function equalButton() {
    calculation = eval(calculation); // eval() converts a string into actual math
    displayCalculation(calculation);
    saveCalculation();
}

function clearButton() {
    calculation = ''; // sets the calculation string back to an empty string 
    clearCalculation(); // calls the function which clears the paragraph element <p></p>
    saveCalculation(); 
}

function saveCalculation() {
    localStorage.setItem('calculatorStorage', calculation); // saves the calculation in the local storage
}

function clearCalculation() {
    // sets the result bar to 0
    document.querySelector('.js-calculation-display').innerHTML = `0`;
}

function displayCalculation(calculation) {
    // displays the calculation on the paragraph element
    document.querySelector('.js-calculation-display').innerHTML = calculation; 
}