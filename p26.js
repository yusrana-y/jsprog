for(i=1;i<=5;i++)
{
    str='';
    for(j=1;j<=5;j++)
    {
        if((i==j) || (i==1) || (i==5)|| (i+j==6) )
        {
            str+='* ';
        }
        else
        {
            str+='  ';
        }
    }
    console.log(str);
}