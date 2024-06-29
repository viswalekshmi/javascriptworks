var text="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG".toLowerCase()

//all alphabets are there in text is called panaragan


var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()

var isPanagram=true

for (let ch of alphabets){

    if (!text.includes(ch))

        isPanagram=false

        break

}

console.log(isPanagram);