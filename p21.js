/*

*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/

for(i=1;i<=5;i++)
{
    str='';
    for(j=1;j<=i;j++){
        str+=' *'
    }   

    console.log(str);
}

for(i=1;i<=4;i++){//1<=4
    str2=''; //''
    for(j=4;j>=i;j--) //4>=1//3>=1 // 2>=1
    {
        str2+=' *';    //* // ** // ***
    }
    console.log(str2);
}