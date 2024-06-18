const fruits=['apple','mango','banana','pineapple','kiwi'];

//1. for loop
for(i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log('-------------------');
//in
for(let x in fruits)
console.log(fruits[x]);

console.log('-------------------');

//of
for(let y of fruits)
console.log(y);