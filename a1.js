// find the highest expense
//lowest expense
//total expense

let expense=[12000,50000,1600,55000,25000,60000,1000,10000];
total=0;
highest=0;
lowest=expense[0];
for(exp of expense){
    total+=exp;
    if(exp>highest)
    {
        highest=exp;
    }     
    if(exp<lowest)
    {
        lowest=exp;
       
    }   
}
console.log(total);
console.log(highest);
console.log(lowest);
