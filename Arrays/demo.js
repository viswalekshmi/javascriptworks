//define[]

//list=> [],list() | insersion order preserved |duplicate allowed,mutable or updatable

//dictionary {},key value,duplicate key not allowed,

//set set{},insersion not preserved,duliplicate not allowed
                                    //all value uniqe
                                    //one set override another set

//tuple (),preserved ,allowed,not updatable

//group of objects manage


// Array  [] preserved,duplicate allowed,mutable

var expenses=[10000,15000,45000,32000]

//console.log(expenses[0]);

//itrate

for (let i=0;i<expenses.length;i++){

    console.log(expenses[i]);
}

//itration2

for(let exp of expenses){
    console.log(exp);
}

//updation

expenses[0]=20000
console.log(expenses);

