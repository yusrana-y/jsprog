// ip: a[4,5,6];
//op: [11,10,9];

let a = [4,5,6];
b=[]
for(num of a)
{
    num+=5;
    b.unshift(num);
}

console.log(b);