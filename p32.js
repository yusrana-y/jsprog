function greet(name,call){
    console.log(`hello ${name}`);
    call();
}

function callme(){
    console.log(`im here from the callback function`);
}

greet(`Joy`,callme)