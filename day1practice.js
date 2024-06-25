//program to print the numbers from 10 to 1
for(i=10; i>=1; i--){
    console.log(i);
}

//program to print the numbers from -1 to -10
for(i=-1; i!=-11; i--){
    console.log(i);
}

//program to print the numbers from -10 to -1
for(i=-10; i!=0; i++){
    console.log(i);
}

//program to print the product of digits in the number
x = prompt("Enter a number:");
product = 1;
for(i = 0; i < x.length; i++){
    product = product * Number(x[i])
}
console.log(product);



