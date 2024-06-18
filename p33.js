function add(n1,n2,n3){
    result = n1 + n2 + n3;
    setTimeout(()=>{
        console.log(`task completed`);
        console.log(result);
    },5000)
}

add(1,2,3);