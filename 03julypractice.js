// input: arr = [23, 16, 8, 1,1]
// output: Descending order

// input: arr = [2, 4, 5, 16, 90]
// output: Ascending order

// input : arr = [3, 5, 13, 7, 1]
// output: Unsorted

arr = prompt("Enter numbers:").split(" ").map(Number);

function checkOrder(arr) {
    let isAscending = true;
    let isDescending = true;
  
    // Check for ascending order
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        isAscending = false;
        break; // No need to check further if it's not ascending
      }
    }
  
    // Check for descending order only if not ascending
    if (!isAscending) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
          isDescending = false;
          break; // No need to check further if it's not descending
        }
      }
    }
  
    if (isAscending) {
      console.log("Ascending Order");
    } else if (isDescending) {
      console.log("Descending Order");
    } else {
      console.log("Unsorted");
    }
}

checkOrder(arr)
  
