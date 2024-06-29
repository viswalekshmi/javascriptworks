var number=153

var total=0

var original=number

var number_count=String(number).length

//3**3=27
//5**3=125
//1**3=1
//find cube sum

while (number!=0){

    let digit=number%10;

    //let cube=digit**3

    let cube=digit**number_count

    total=total+cube

    number=Math.floor(number/10) 
}

console.log(original==total?"amstrong":"not amstrong");

//how to find amtrong if the number have 3 digits we have to take cube
//number have 2 digit take squre
//number have 5 digit take rise to 5
