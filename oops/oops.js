


class Student{
    setStudent(name,course,degree){
        this.name=name;
        this.course=course;
        this.degree=degree;
    }

    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}

var obj=new Student();

obj.setStudent("vipin","django","bca")

obj.printStudent()


//attributes,intance variables intialize

//__init__()=>python constructor

//java -constructor (for intialize intance variables)