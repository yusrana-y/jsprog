let a = [2,3,4,10,11,12];
a.sort((a,b)=>a-b)
up = a.length-1;
low = 0;
search = 2;
flag=0;

while(low<=up)
{
mid = Math.floor((up+low)/2);
if(a[mid]==search)
{   flag=1;
    break;
}

else if(a[mid]<search)
{
    low=mid+1;
    
}

else(a[mid]>search)
{
    up=mid+1;
    mid = Math.floor((up+low)/2);
}
}

flag?console.log(`present`):console.log(`not present`);;