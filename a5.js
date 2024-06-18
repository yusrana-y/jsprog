p=[10,11,12,20,30]
q=[1,22,25,31,33,67]

a=0
b=0
flag=0

while(a<p.length && b<q.length){
    if(p[a]==q[b])
    {
        console.log(p[a])
        flag=1
        a++
        b++
    }

    else if(p[a]>q[b])
    {
        b++
    }

    else if(p[a]<q[b])
    {
        a++
    }
}

!flag && console.log(`no common numbers`);