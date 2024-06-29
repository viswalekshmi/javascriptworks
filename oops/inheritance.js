
//inheritance method

//multiple inheritance is not allowed

class parent{

    m1(){
        console.log("inside parent m1 method");
    }
}

class child extends parent{
    m2(){
        console.log("inside child m2 method");
    }
}

const ch=new child()

ch.m2()

ch.m1()