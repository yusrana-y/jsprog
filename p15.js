// pattern printing 
/* 
    1 2 3 4 
    1 2 3 4 
    1 2 3 4 
    1 2 3 4 
    
*/
for(i=1;i<=4;i++){
str=' '
    for(j=1;j<=4;j++){
        str+=`  ${j}`;
    }
    console.log(str);
}