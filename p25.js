for(i=1;i<=4;i++)
{
    str='';
    for(j=1;j<=i;j++)
    {   
        if(j==(i-1) ||(i==4 && j==1))
        str+='0 ';
        else
        str+='1 ';
    }
    console.log(str);
}