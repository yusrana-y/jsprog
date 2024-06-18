//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log(`all product name`);
products.forEach(p => {console.log(p[1]);    
});
console.log(`--------------------`);
//2. display product whose price < Rs.50
console.log(`product whose price < Rs.50`);
lp = products.filter(item=>item[2]<50).forEach(item=>console.log(item))
console.log(`--------------------`);
//3. print price of oreo
console.log(`print price of oreo`);
oreo=products.find(o => o[1]=='oreo')
console.log(oreo[2]);
console.log(`--------------------`);
//4. print costly product name
console.log(`print costly product name`);
costly = products.reduce((a1,a2)=>a1[2]>a2[2]?a1:a2)
console.log(costly);
console.log(`--------------------`);

//5. display out of stock product
console.log(` display out of stock product`);
os = products.filter(item=>item[3]==0).forEach(item=>console.log(item))
console.log(`--------------------`);
//6. sort products based on stock in decsending order
console.log(`sort products based on stock in decsending order`);
s = products.sort((b1,b2)=> b2[3]-b1[3]).forEach(item=>console.log(item))
console.log(`--------------------`);


//7. print product having maximum available stock
console.log(`product having maximum available stock`);
maxstock = products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(maxstock);
console.log(`--------------------`);

//8. is there any product can be purchased by Rs. 10
console.log(`if any product can be purchased by Rs. 10`);
checkp=products.some(item=>item[2]<=10)
checkp?console.log(`yes`):console.log(`no`)
console.log(`--------------------`);

//9. Is there any product in the range of 10 to 30
console.log(`if any product in the range of 10 to 30`);
cp=products.some(item=>item[2]>=10 && item[2]<=30)
cp?console.log(`yes`):console.log(`no`)
console.log(`--------------------`);

//10. print all products in the range of 10 to 30
console.log(`all products in the range of 10 to 30`);
p=products.filter(item=>item[2]>=10 && item[2]<=30).forEach(i=>console.log(i[1]))
console.log(`--------------------`);