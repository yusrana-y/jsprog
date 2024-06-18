//program to find hcf or hcd of any two given numbers

num1 =12;
num2 = 28;

for(i=2;i<=num1&&i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        factor=i;
    }
}
console.log(factor);
