// check if given no. is armstrong or not
num= 153;
num1=num;
power= (num*'').length;
product = 1;
sum = 0;
i=1;
while(num>0){
    i = num%10;
    sum+=i**3;
    num=Math.floor(num/10);  
}

if(num1==sum)
    console.log(`${num1} is an armstrong number`);
else
    console.log(`not an armstrong number`);