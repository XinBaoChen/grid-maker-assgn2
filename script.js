// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
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

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
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