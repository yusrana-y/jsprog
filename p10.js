//program to check if a given number is prime or not
//divisible by 1 or the number itself
//check a factor if(n%i==0)

n=1;
if(n>1){
    for(i=2;i<=n;i++)
{
    if(n%i==0){
        if(i!=n){
            console.log("not a prime!");
            break;
        }
        console.log("Prime number!");
    }   
}
}

else
console.log(`not a prime!`);
