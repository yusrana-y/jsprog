//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log(`district having Highest +ve case `);
highestpos= covid_data.reduce((i1,i2)=>i1[2]>i2[2]?i1:i2)
console.log(highestpos);
console.log(`------------------`);
//2. district having Highest 1st dose vaccine
console.log(`district having Highest 1st dose vaccine`);
highestdos= covid_data.reduce((i1,i2)=>i1[5]>i2[5]?i1:i2)
console.log(highestdos);
console.log(`------------------`);
//3. district having lowest death rate
console.log(`district having lowest death rate`);
lowestdeath= covid_data.reduce((i1,i2)=>i1[3]<i2[3]?i1:i2)
console.log(lowestdeath);
console.log(`------------------`);
//4. sort data with +ve case in descending order
console.log(`sort data with +ve case in descending order`);
sortpos=covid_data.sort((n1,n2)=>n2[2]-n1[2]).forEach(element => console.log(element))
console.log(`------------------`);
//5. is district with +ve cases > 15000
console.log(`is district with +ve cases > 15000`);
checkp=covid_data.some(n1=>n1[2]>15000)
checkp?console.log(`yes`):console.log(`no`);
console.log(`------------------`);
//6. sort data with 1st dose vaccine ascending order
console.log(`sort data with 1st dose vaccine ascending order`);
sortdos=covid_data.sort((n1,n2)=>n1[5]-n2[5]).forEach(element => console.log(element))
console.log(`------------------`);
//7. Print Thrissur details
console.log(` Print Thrissur details`);
thr= covid_data.find(item=>item[1]=='Thrissur')
console.log(thr);
console.log(`------------------`);
//8. Print total number of positive cases
console.log(`Print total number of positive cases`);
totalpos = covid_data.map(item=>item[2]).reduce((i1,i2)=>i1+i2)
console.log(totalpos);
console.log(`------------------`);
//9. Print total number of curred cases
console.log(`Print total number of curred cases`);
totalcur = covid_data.map(item=>item[4]).reduce((i1,i2)=>i1+i2)
console.log(totalcur);
console.log(`------------------`);
//10. Print curred cases in Idukki
console.log(`Print curred cases in Idukki`);
idukki=covid_data.find(item=>item[1]=='Idukki')
console.log(idukki[4]);
console.log(`------------------`);