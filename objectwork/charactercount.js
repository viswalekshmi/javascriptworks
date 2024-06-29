var word="hellopython"

var wc={}

for (let ch of word){

    ch in wc ? wc[ch]+=1:wc[ch]=1
}

console.log(wc);


var words="viswalekshmi"

var wc={}

for (let ch of words){

    ch in wc ? wc[ch]+=1:wc[ch]=1
}

console.log(wc);

word.split("").map(ch=>ch in wc ? wc[ch]+=1 :wc[ch]=1)

console.log(wc);

//text="ABCDBDD"
//print first recursive character

