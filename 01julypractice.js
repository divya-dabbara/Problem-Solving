// 1) Write a program to print the smallest unique number
// input: Enter numbers: 5 4 5 3 3 1 2
// output: smallest unique is: 1

arr = prompt("Enter numbers: ").split(" ").map(Number);
(empty = []), (min = arr[0]);
for (i of arr) {
  if (!empty.includes(i)) {
    empty.push(i);
  }
}
for (i of empty) {
  c = 0;
  for (j of arr) {
    if (i == j) c++;
  }
  if (c == 1) {
    if (i < min) min = i;
  }
}
console.log("smallest unique is: ", min);

// 2) Write a program to print the largest duplicate number
// input: Enter numbers: 5 4 5 3 3 1 2
// output: Largest duplicate number: 5

arr = prompt("Enter numbers: ").split(" ").map(Number);
(empty = []), (max = arr[0]);
for (i of arr) {
  if (!empty.includes(i)) {
    empty.push(i);
  }
}
for (i of empty) {
  c = 0;
  for (j of arr) {
    if (i == j) c++;
  }
  if (c > 1) {
    if (i > max) max = i;
  }
}
console.log("Largest duplicate number: ", max);
