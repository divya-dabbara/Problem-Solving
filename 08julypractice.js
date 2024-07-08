//Program to calculate the sum of the diagonal elements

// Function to prompt the user for matrix dimensions and elements
function createMatrix() {
    let n = parseInt(prompt("Enter the size of the matrix (n x n):"));
    let arr = [];
    
    // Prompt for each row
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            let element = parseInt(prompt(`Enter element for row ${i+1}, column ${j+1}:`));
            row.push(element);
        }
        arr.push(row);
    }
    
    return arr;
}

// Function to calculate diagonal sums and display matrix
function calculateDiagonalSum(arr) {
    let diagonalSum = 0;
    let n = arr.length;

    // Display matrix and calculate sums
    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < n; j++) {
            if (i === j || j === n - 1 - i) {
                diagonalSum += arr[i][j];
                s += arr[i][j] + " ";
            } else {
                s += "  ";
            }
        }
        console.log(s);
    }

    // Output total diagonal sum
    console.log("Total Diagonal Sum:", diagonalSum);
}

// Main program flow
let arr = createMatrix();
console.log("Entered Matrix:");
console.log(arr);
calculateDiagonalSum(arr);
