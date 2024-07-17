// Input: Geeks for Geeks
// Output: G 2
// e 4
// f 1
// k 2
// o 1
// r 1
// s 2
// G 2
// e 4
// f 1
// k 2
// o 1
// r 1
// s 2


str = prompt("Enter a string: ").replaceAll(" ","")
upper=str.toUpperCase().split("").sort()
console.log(upper)
emp=""
s=""
for(i of upper){
    if(!emp.includes(i))
    emp=emp+i
}
for(i of emp){
    c=0
    for(j of upper){
        if(i==j)
        c++
    }
    if(str.includes(i)){
        console.log(i,c)
    }else{
        s=s+i.toLowerCase()+" "+c +" "
    }
}
console.log(s)