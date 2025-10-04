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
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
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