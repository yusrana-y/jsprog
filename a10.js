//program to find only the even numbers from the given array

let arr= [1,2,12,3,45,6,57,87]

even = arr.filter(num => (num%2==0))
console.log(even);

//program to print numbers greater than 15

g = arr.filter(num => num>15)

console.log(g);

//check whetehr number greater than 15 is present

s = arr.some(num => num>15)
console.log(s?`yes`:`no`);