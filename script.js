// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(-1);

    // If this is the first row, we need to create the first column too
    if (numCols === 0) {
        let cell = newRow.insertCell(0);
        cell.onclick = function() { colorCell(this); };
        numCols++;
    } else {
        // Add cells to match the current number of columns
        for (let i = 0; i < numCols; i++) {
            let cell = newRow.insertCell(i);
            cell.onclick = function() { colorCell(this); };
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
        let cell = allRows[i].insertCell(-1); // Insert cell at the end of the row
        cell.onclick = function() { colorCell(this); };
    }
    numCols++;
}

// Function to color a cell
function colorCell(cell) {
    // Check if a color has been selected
    if (!colorSelected || colorSelected === "SELECT") {
        alert("Please select a color from the dropdown menu first.");
        return;
    }
    cell.style.backgroundColor = colorSelected;
}



// Remove a row 
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
    if (!colorSelected || colorSelected === "SELECT") {
        alert("Please select a color from the dropdown menu first.");
        return;
    }
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        // If the cell has no background color style, it's has no color
        if (!allCells[i].style.backgroundColor) {
            allCells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    if (!colorSelected || colorSelected === "SELECT") {
        alert("Please select a color from the dropdown menu first.");
        return;
    }
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        //Reset to default color 
        allCells[i].style.backgroundColor = ""; 
    }
}