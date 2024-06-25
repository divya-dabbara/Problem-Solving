//Program to print the sum of odd digits in a number
n = prompt("Enter a number");
add = 0;
for(i of n){
    if(i%2!=0){
        add += Number(i)
    }
}
console.log(add)


//Program to print the difference between even sum and odd sum
n = prompt("Enter a number");
evenSum = 0;
oddSum = 0;
for(i of n){
    if(i%2 == 0){
        evenSum += Number(i)
    }
    else{
        oddSum += Number(i)
    }
}
console.log(evenSum - oddSum)


//Program to check whether even sum is greater or odd sum is greater
n = prompt("Enter a number");
evenSum = 0;
oddSum = 0;
for(i of n){
    if(i%2 == 0){
        evenSum += Number(i)
    }
    else{
        oddSum += Number(i)
    }
}
evenSum > oddSum ? console.log("Even Sum is greater") : console.log("Odd Sum is greater")


