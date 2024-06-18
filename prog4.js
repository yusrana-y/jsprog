/*program to get the output as follows:
    2 => 24
    3 => 369
    4 => 4936
*/
i=1;
num=2;
str= '';
sum=0;
while(i<=num){
    str+=num;
    sum+=Number(str);
    i++;
}

console.log(sum);
