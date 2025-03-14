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
    if(numCols === 0){
        alert("No columns to remove");
        return;
    }

    let table = document.getElementById("grid");
    for(let i = 0; i < numRows; i++){
        table.rows[i].deleteCell(numCols - 1);
    }

    numCols--;

    if(numCols === 0){
        while(table.rows.length > 0){
            table.deleteRow(0);
        }
        numRows = 0;
    }
}

// Fill all uncolored cells
function fillU() {
    let table = document.getElementById("grid");
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if (table.rows[i].cells[j].style.backgroundColor === " " || table.rows[i].cells[j].style.backgroundColor === "white") {
                table.rows[i].cells[j].style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll() {
    let table = document.getElementById("grid");
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    const table = document.getElementById("grid");
    
    for(let i = 0; i < table.rows.length; i++){
        for(let j = 0; j < table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}