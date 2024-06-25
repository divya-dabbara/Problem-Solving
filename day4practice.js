//input: Enter a number: 567
//output: 765
//input: Enter a number: -890
//output: -98
num=prompt("Enter a number")
res=0
if(num>0){
    while(num!=0){
        rem=num%10
        res=res*10+rem
        num=Math.floor(num/10)
    }
    console.log(res)
}else{
    num=num.slice(1)
    res=0
     while(num!=0){
        rem=num%10
        res=res*10+rem
        num=Math.floor(num/10)
    }
    console.log("-" + res)
}
