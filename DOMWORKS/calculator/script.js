var pointfrequency=1


function displayNumber(event){
    //operators not cometogether answer below
    const operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")

    //extractcurrentexpression

    let currentExpression=textBox.value;

    //extarct displaynumber

    let displayNumber=event.target.value

    if (displayNumber=="."&& pointfrequency==1){

        pointfrequency=0
    }

    else if (displayNumber=="."&& pointfrequency==0){

        return
    }

    //13.5 valid
    //3.1.5not valid
    if(operators.includes(displayNumber) && displayNumber!="."){

        pointfrequency=1


    }

    //extract last character from currentexpression

    let curExpLastChar=currentExpression.slice(-1)
    
    // chk for displaynumber and curExpLastChar Are operator

    if(operators.includes(displayNumber) && operators.includes(curExpLastChar)){

        //remove the last charcter from currentExpression

        currentExpression=currentExpression.slice(0,-1)

    }

    //append the displaynumber with currentexpression

    textBox.value=currentExpression+displayNumber


    // let num=event.target.value

    // document.querySelector("#result").value+=num
}

function clearbox(){

    document.querySelector("#result").value=""
}


function evaluateExpression(){

    let currentExpression=document.querySelector("#result").value;

    let result=eval(currentExpression)

    // document.querySelector("#result").value=result

    // pointfrequency=1

    if(result.toString().split("").includes(".")){
        pointfrequency=0
    }
    else{
        pointfrequency=1
    }
    document.querySelector("#result").value=result
}

function backSpace(){

    let currentExpression=document.querySelector("#result").value;//13+2+3+

    let result=currentExpression.slice(0,-1)

    document.querySelector("#result").value=result

}

