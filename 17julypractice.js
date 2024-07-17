// Enter rows: 4
// Output:
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 

rows=+prompt("Enter rows: ")
for(i=1; i<=rows; i++){
    s=""
    for(j=1; j<=i; j++){
        s+=j+" "
    }
    console.log(s)
}


// Enter rows: 4
// Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10

rows=+prompt("Enter rows: ")
count=1
for(i=1; i<=rows; i++){
    s=""
    for(j=1; j<=i; j++){
        s+=count+" "
        count++
    }
    console.log(s)
}


// Enter rows: 4
Output:
// * * * * 
//   * * * 
//     * * 
//       * 
rows=+prompt("Enter rows: ")
for(i=rows;i>=1;i--){
    s=""
    for(k=rows; k>i; k--){
        s+="  "
    }
    for(j=1;j<=i;j++){
        s+="* "
    }
    console.log(s)
}
