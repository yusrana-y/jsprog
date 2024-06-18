//factorial of a number

num=4;
product = 1;
if(num==0){
    console.log(`factorial is 1`);
}
else{
    while(num>=1){
        product*=num;
        num--;
    }  
    console.log(product);
}

