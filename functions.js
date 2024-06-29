//def functions_name(parm1,parm2);

//functions definition

//return value



function add(num1,num2){
    return num1+num2
}

var additionResult=add(100,200)

console.log(additionResult);


function cube(num){

    return num**3
}

console.log(cube(3));

function squre(num){
    return num**2
}

console.log(squre(3));

//create a function maxtwo with two params num1,num2 return largest number


function maxtwo(num1,num2){
    return num1>num2?num1:num2
}

console.log(maxtwo(10,27));

//smartsub(10,5)=>5
//samartsub(5,10)

function smartsub(num1,num2){

    return num1>num2?num1-num2:num2-num1;
}
console.log(smartsub(5,2));


//hoisting we can call function befor define






