//print all leap years from 1800 to 2024

for (let year=1800;year<=2024;year++){

    if((year%100==0 && year%400==0)||(year%100!=0 && year%4==0)){

        console.log(year);
    }
}