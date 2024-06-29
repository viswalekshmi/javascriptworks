var str1="dcba"

var str2="bcad"


var sorttedString1=str1.split().sort().join("")

var sorttedString2=str2.split().sort().join("")


console.log(sorttedString1);

console.log(sorttedString2);

console.log(sorttedString1==sorttedString2?"anagram":"not anagram");
