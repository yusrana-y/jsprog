// pattern printing 
/* 
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4
*/

for(i=1;i<=4;i++)
{
    str=``;
    for(j=1;j<=4;j++){
        str+=`  ${i}`;
    }
    console.log(str);
}