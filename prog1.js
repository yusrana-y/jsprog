//display

num1 = 100
num2 = 100
num3 = 100

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`the largest number is ${num1} `); 
        console.log(`the descending order ${num1} , ${num2}, ${num3}`);
    }
    else{
        console.log(`the largest number is ${num1} `); 
        console.log(`the descending order ${num1} , ${num3}, ${num2}`);
    }
  
}


else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`the largest number is ${num2} `); 
        console.log(`the descending order ${num2} , ${num1}, ${num3}`); 
    }

    else{
        console.log(`the largest number is ${num2} `); 
        console.log(`the descending order ${num2} , ${num3}, ${num1}`);  
    }
}

else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`the largest number is ${num3}`);
        console.log(`the descending order is ${num3}, ${num1}, ${num2}`);
    }
    else{
        console.log(`the largest number is ${num3}`);
        console.log(`the descending order is ${num3}, ${num2}, ${num1}`);
    }
}

else{
    console.log(`all the numbers are equal`);
}
