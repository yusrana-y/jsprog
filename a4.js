//a=[10,20,30,20,30,40,50,60,10]
// print the duplicate elements in the arr
//op=[10,20,30]

//hw same number should be printed only once
let a = [10,20,30,20,30,40,50,60,10];
b=[];
for(i=0;i<a.length;i++)
for(j=1;j<a.length;j++)
if(a[i]==a[i+j])
{
    for(k=1;k<b.length;k++)
    {
        if(a[i]!=b[k])
        b.push(a[i]); 
    }
    
}
b.length==0?console.log(`no duplication`):console.log(b);
