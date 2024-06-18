// program to check whether given number is a mobile number
let str = '9234567890'
l = str.length
console.log(l);
if(l==10)
    console.log(`its a number`);
else
    console.log(`not a mobile number`);
// program to check whether gmail id is given
id= 'asd@gmil.com'
val=id.endsWith('@gmail.com')
val?console.log(`its a gmail id`):console.log(`not a gmail id`);
// given word starts with letter q
word = `asda`
word2=`quack`
word2.startsWith(`q`)?console.log(`starts with q`):console.log(`doesnt start with q`);
// print all the vowels in the given string 'good morning all'
// str2='good morning all'
// character = str2.split('')
// vowel=['a','e','i','o','u','A','E','I','O','U']
// for(c of character){
//     if(vowel.includes(c))
//         console.log(c);
// }

console.log(Array.from(str2));

