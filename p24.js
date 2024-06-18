for(i=1;i<=8;i++)
{
    str='';
    for(j=1;j<=5;j++)
    {
        if(i==1 || i ==8 || j==1 ||j==5)
        {
            str+='* ';
        }
        else
        {
            str+='  '
        }
    }
    console.log(str);
}