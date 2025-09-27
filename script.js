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
    // If the grid is empty, adding a column is the same as adding a row
    if (numRows === 0) {
        addR();
        return;
    }

    let allRows = document.querySelectorAll("#grid tr");
    for (let i = 0; i < numRows; i++) {
        // Insert cell at the end of the row
        let cell = allRows[i].insertCell(-1); 

    }
    numCols++;
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
    if (numCols === 0) {
        //no col to remove
        return; 
    }
    let allRows = document.querySelectorAll("#grid tr");
    for (let i = 0; i < numRows; i++) {
        // Delete the last cell in each row
        allRows[i].deleteCell(-1); 
    }
    numCols--;

    // If all columns are gone, we should reset the grid
    if (numCols === 0) {
        document.getElementById("grid").innerHTML = "";
        numRows = 0;
    }
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