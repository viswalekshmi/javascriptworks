
var text="pneumonoultramicroscopicsilicovolcanoconiosi"

//most recusive charcter

var wc={}

for (let ch of text){

    ch in wc ? wc[ch]+=1:wc[ch]=1
}

console.log(wc);

var nestedarray=Object.entries(wc)
var mostrecchar=nestedarray.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)


console.log(mostrecchar);