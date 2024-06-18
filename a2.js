// arr=[10,11,12,3,2,4] check whether 2 is present in the array or not. print present or not present

arr=[10,11,12,3,2,4];
flag=0;
for(num of arr){
    if(num==2)
    {
        flag=1;
        break;
    }
}

console.log((flag)?`present`:`not present`);