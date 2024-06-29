//array methods

var colors=["red","green","blue"]

//console.log(colors);

//push add value on last place,in python append intsed of push

//colors.push("yellow")

//console.log(colors);


//pop method  remove from the last

//var popped_obj=colors.pop()

//console.log(colors);

//unshift method add object in beggining

var colors=["red","green","blue"]

colors.unshift("yellow")
console.log(colors);

//shift method remove from the beggiging

//var colors=["red","green","blue"]

//colors.shift()

//console.log(colors);


//includes method



var arr=[10,11,12,13]

var sqaure=arr.map((num)=>num**2)

//console.log(sqaure);

var cube=arr.map((num)=>num**3)

//console.log(cube);

//if num<12 num-1

//if num>12 num+1

var result=arr.map((num)=>num>12 ? num+1:num<12?num-1:num)

//console.log((result));

//map ella obj mugalum function define cheyan


//reduce method exaples only one result

var arr=[10,11,12,13,14]

var total=arr.reduce((n1,n2)=>n1+n2)

console.log((total));

var product=arr.reduce((n1,n2)=>n1*n2)
console.log((product));

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)

console.log(min);

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);


//sort method


var arr=[20,10,11,12,13,14,15,16]

arr.sort()

//console.log(arr);


//o1 first parameter return -1
//o2 second parameter 1

//function compare(o1,o2){
    return o1<o2?-1:1
//}














