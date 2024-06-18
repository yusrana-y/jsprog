for(i=1;i<=5;i++)
{
    num=11;
    str='';
    for(sp=1;sp<=5-i;sp++)
        str+='   ';
    for(j=1;j<=2*i-1;j++)
    {
        str=str+num+' ';
        num++;
    }
    console.log(str);
}