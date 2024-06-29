

var students={

    name:"vipin",

    course:"django",

    degree:"btech",

    rollnumber:"54",

    points:25
}

console.log(students.name);

console.log(students.degree);

//adding object

students.grade="a+"

console.log(students);

students.location="trivandrum"

console.log(students);

//chk attr is there or not

if("rollnumber" in students){

    console.log("present");
}

else{
    console.log("not present");
}

//if points exist add 10 extra points else add points as 15


if ("points" in students){

    students.points+=10
}

else{

    students.points=15

}

console.log(students);


