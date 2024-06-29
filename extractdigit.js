

var number=153

while(number !=0){
    
    let digit=number%10; //153%10=3 15%10=5 1%10=1

    console.log(digit);

    number=Math.floor(number/10)

}