var weightInKg=75

var heightInCm=165

//BMI=(weightInKg/(heightInMeter**2))

var heightInMeter=heightInCm/100

var BMI=Math.round(weightInKg%(heightInMeter**2))

//round in python()
//objects 
//in js math is used for rounding
//math.round

console.log(BMI);

if (BMI<19){
    console.log("underweight");
}

else if (BMI<=25){

    console.log("normal");
}

else if(BMI<=30){
    console.log("overweight");
}

else if (BMI>=30){

    console.log("obease");
}
