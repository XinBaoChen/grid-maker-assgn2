// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    //row should be at the end
    let newRow = grid.insertRow(-1); 

    // If this is the first row, need to create the first cell
    if (numCols === 0) {
        let cell = newRow.insertCell(0);
        // We'll add the onclick for coloring in the coloring branch
        numCols++;
    } else {
        // Add cells to match the current number of columns
        for (let i = 0; i < numCols; i++) {
            let cell = newRow.insertCell(i);
            // We'll add the onclick for coloring in the coloring branch
        }
    }
    numRows++;
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

function removeR() {
    if (numRows === 0) {
        return; 
    }
    let grid = document.getElementById("grid");
    // Delete the last row
    grid.deleteRow(-1);
    numRows--;

    // If all rows are gone, reset the column count too
    if (numRows === 0) {
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