var text="hello hai hello hai hello hello"

var words=text.split(" ")

console.log(words);

var wc={}

for (let w of words){
    
    if (w in wc){
        wc[w]+=1
    }

    else{
        wc[w]=1
    }
}
console.log(wc);

//text.split(" ").map(w=> w in wc ? wc[w]+=1 :wc[w]=1)
