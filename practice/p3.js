//JavaScript function that reverses a number

function reverse(n){
    str= '';
    d=0;
    temp=n;
    while(n>0){
        d=n%10;
        str+=d;
        n=Math.floor(n/10);
    }
    console.log(`reverse of ${temp} is ${str}`);
    
}

reverse(24);
reverse(191919);