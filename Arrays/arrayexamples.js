var arr=["program","project","profile","proffesion"]

//map=all
//filter=one,particular condition

//convert all obj to uppercase

var upperCaseString=arr.map(w=>w.toUpperCase())

console.log(upperCaseString);

//print length of each string obj in the array

var counts=arr.map(w=>w.length)

console.log(counts);

//return words starting with "pro"

var wordStart=arr.filter(w=>w.startsWith("pro"))

console.log((wordStart));

//longestword

var longestword=arr.reduce((w1,w2)=>w1.length>w2.length?w1:w2)

console.log(longestword);

//shortest word

var shortestword=arr.reduce((w1,w2)=>w1.length<w2.length?w1:w2)

console.log((shortestword));