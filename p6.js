// check if a num is palindrome 

num=1221;
reverse = 0;
str = '';
i=num;
while(i>0){ 
reverse =  (i%10); 
str += reverse;
i= Math.floor(i/10);
}
console.log(str);

num2 = Number(str);
console.log(num2);
console.log(num);
if(num==num2){
    console.log(`they are a palindrome!`);
}
   
else{
    console.log(`not a palidrome`);
}
    