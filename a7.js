//nested array

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
for(item of employee)
    console.log(item[1]);

console.log(`-------------------`);
//print total numbers of employee
console.log(employee.length);
console.log(`-------------------`);
//print developer employee details
search = 'developer'
for(item of employee)
{
    if(item[2]==search)
    console.log(item);
}
console.log(`-------------------`);
//print employee whose salary > 30000
for(item of employee)
{
    if(item[4]>30000)
    console.log(item[1]);
}
console.log(`-------------------`);
// print details of employee Laisha
search='Laisha'
for(item of employee)
{
    if(item[1]==search)
    console.log(item);
}
console.log(`-------------------`);
//arrange employee based on their salary in descending order
// print the employ name who have the higest salary
employee.sort((emp1,emp2) => emp2[4]-emp1[4])
for(item of employee)
    console.log(item[1],item[4]);
console.log(`-------------------`);
console.log(employee[0][1]);
console.log(`-------------------`);
//arrange employee based on their experience in ascending order
employee.sort((e1,e2)=>e1[5]-e2[5])
for(item of employee)
    console.log(item[1], `experience -`,item[5]);
console.log(`-------------------`);
