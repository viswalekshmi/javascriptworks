var number=153

total=0

while(number!=0){

    let digit=number%10;

    total=total+digit
    number=Math.floor(number/10)
}

console.log(total);