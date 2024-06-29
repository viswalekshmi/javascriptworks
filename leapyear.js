var year=2100

//print leap year if year is leap year else print not a leapyear


//if year is acentury year then it is divisible by 400
//if year is not century year then its divisible by 4


if ((year%100==0 && year%400==0) || (year %100!=0 && year%4==0)){
    console.log(year,"is leap year");
}

else{

    console.log(year,"is not leap year");
}


