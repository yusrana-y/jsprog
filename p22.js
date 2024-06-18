for(i=1;i<=4;i++){
    str=''
    for(sp=4;sp>i;sp--){
        str+=' '
    }
    for(j=1;j<=i;j++){
        str+='* '
    }
    console.log(str);
}