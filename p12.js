//program to print 8-500 armstrong number

//loop to iterate from 8-500
//calc length of the given number

for(i=8;i<=500;i++){
    temp= i;
    sum = 0;
    //calc the length of the given numebr
    power= (i*'').length;
    //check the factors
    while(i>0){
        i = num%10;
        sum+=i**3;
        num=Math.floor(num/10);  
    }
}