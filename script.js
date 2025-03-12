// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// There was need to include two helper functions

// This will color a cell when clicked
function colorCell() {
    if (colorSelected === "SELECT") {
        alert("Please select a color from the dropdown.");
    } else {
        this.style.backgroundColor = colorSelected;
    }
}
// This will set the global color when a color is chosen from the dropdown
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log("Selected color:", colorSelected);
}

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    if(numRows === 0){
        alert("No rows to remove!");
        return;
    }
    let table = document.getElementById("grid");
    table.deleteRow(numRows - 1);

    numRows--;

    if(numRows === 0){
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}