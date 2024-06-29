

var previous=0

var current=1

console.log(previous,current)

for(let i=1;i<=20;i++){

    let next=previous+current

    console.log(next)

    previous=current

    current=next


}