//To print prime numbers in the fibonacci series
function prime(n){
    if(n>1){
        c=0
        for(i=2;i<n;i++){
            if(n%i==0){
                c++
                return false
            }
        }
        if(c==0){
            return true
        }
    }
}
num = +prompt("Enter no. of series:")
a=0, b=1, s=""
i=1
while(i<=num){
    if(prime(a)){
        s=s+a+" "
    }
c=a+b
a=b
b=c
i++
}
console.log(s)
// Output:
// Enter no. of series:7
// 2 3 5 13 


//To print non-prime numbers in the fibonacci series
function prime(n){
    if(n>1){
        c=0
        for(i=2;i<n;i++){
            if(n%i==0){
                c++
                return true
            }
        }
        if(c==0){
            return false
        }
    }
}
num = +prompt("Enter no. of series:")
a=0, b=1, s=""
i=1
while(i<=num){
    if(prime(a)){
        s=s+a+" "
    }
c=a+b
a=b
b=c
i++
}
console.log(s)
//Output:
// Enter no. of series:15
// 8 21 34 55 

// To generate Fibonacci numbers up to the limit
function generateNonFibonacciSeries(limit) {
    let a = 0, b = 1;
    let fibNumbers = [a, b];

    // Generate Fibonacci numbers up to the limit
    while (true) {
        let temp = a + b;
        a = b;
        b = temp;
        if (b > limit) {
            break;
        }
        fibNumbers.push(b);
    }

    // Collect non-Fibonacci numbers
    let nonFibSeries = [];
    for (let num = 1; num <= limit; num++) {
        if (!fibNumbers.includes(num)) {
            nonFibSeries.push(num);
        }
    }

    return nonFibSeries;
}

// Get the limit from user input using prompt
let limitInput = prompt("Enter the limit for non-Fibonacci series:");
let limit = parseInt(limitInput);

// Validate user input
if (!isNaN(limit) && limit > 0) {
    const nonFibSeries = generateNonFibonacciSeries(limit);
    console.log(`Non-Fibonacci series up to ${limit} are:`, nonFibSeries);
} else {
    console.log("Invalid input. Please enter a valid positive number.");
}
// Output:
// Enter the limit for non-Fibonacci series:10
// Non-Fibonacci series up to 10 are: [ 4, 6, 7, 9, 10 ]


