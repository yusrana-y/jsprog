// reverse a number

num=102030;
reverse = 0;
str = '';
while(num>0){ 
reverse =  (num%10); 
str += reverse;
num= Math.floor(num/10);
}
console.log(str);

