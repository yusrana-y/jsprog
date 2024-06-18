//function to check if a given number is prime

function prime(n1){
    if(n1>1){
        flag=1;
        for(i=2;i<=n1;i++)
        {
            if(n1%i==0){
                if(n1!=i){
                    flag=0;
                    break;
                }        
            }
        }
        if(flag==1)
            console.log(`${n1} is prime number`);
        else    
            console.log(`${n1} is not a prime number`);
    }
    else if(n1==1)
        console.log(`1 is not a prime number nor a composite number`);
    else
        console.log(`eneterd number is invalid`);    
}
prime(103);
prime(-2);