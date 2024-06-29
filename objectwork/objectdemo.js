
//array of array [[]]


var items={ potatto:45,tomato:52,ginger:250,garlic:300,onion:35}

//costly items

//convert nested array means array of array [[],[]]

//object.entries(object)

var nestedarray=Object.entries(items)

var costly=nestedarray.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)

console.log(costly);