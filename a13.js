let a = [`mango`,`apple`,`kiwi`,`papaya`,`mango`]

a.splice(1,2,`jackfruit`)
console.log(a);

let ab = [`max`,`maxwell`,`mini`,`manu`]

ab.splice(1,1)
console.log(ab);

//remove minu and add miller

ab.splice(1,1,`miller`)
console.log(ab)

//add ken as the third item

ab.splice(2,0,`ken`)
console.log(ab);