// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// There was a need to include two helper functions

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

// Add a new row to the grid
function addR() {
    let table = document.getElementById("grid");
    let newRow = table.insertRow();

    // If no columns exist yet, create one by default
    if (numCols === 0) {
        numCols = 1;
    }
    
    for (let i = 0; i < numCols; i++) {
        let newCell = newRow.insertCell();
        newCell.onclick = colorCell;
        newCell.style.backgroundColor = "white";
    }
    numRows++;
}

// Add a new column to every row in the grid
function addC() {
    let table = document.getElementById("grid");
    let rows = table.rows;
    
    // This says that if the grid is empty, add a new row first.
    if (rows.length === 0) {
        addR();
    } else {
        for (let i = 0; i < rows.length; i++) {
            let newCell = rows[i].insertCell();
            newCell.onclick = colorCell;
            newCell.style.backgroundColor = "white";
        }
        numCols++;
    }
}


// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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