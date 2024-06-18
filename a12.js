//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
employee.forEach(emp => {
    console.log(emp[1]);
});

console.log(`-------------------`);
//print total numbers of employee
console.log(employee.length);
console.log(`-------------------`);
//print developer employee details
dev = employee.filter(emp => emp[2]=='developer').forEach(element=>console.log(element))
console.log(`-------------------`);
//print employee whose salary > 30000
gr = employee.filter(emp => emp[4]>30000).forEach(item=>console.log(item))
console.log(`-------------------`);
// print details of employee Laisha
f= employee.find(emp=>emp[1]=='Laisha')
console.log(f);
console.log(`-------------------`);
//arrange employee based on their salary in descending order
// print the employ name who have the higest salary
sal = employee.sort((e1,e2)=> e2[4]-e1[4])
sal.forEach(emp => console.log(emp[1]))
console.log(`-------------------`);
hs = employee.reduce((b1,b2) => b1[4]>b2[4]?b1:b2)
console.log(hs);
console.log(`-------------------`);
//arrange employee based on their experience in ascending order
employee.sort((e1,e2)=>e1[5]-e2[5])
for(item of employee)
    console.log(item[1], `experience -`,item[5]);
console.log(`-------------------`);

//emplyee name with least salary

ls = employee.reduce((n1,n2)=> n1[4]<n2[4]?n1:n2)
console.log(ls);

ts=employee.map(emp => emp[4]).reduce((m1,m2)=>m1+m2)
console.log(ts);