// program to print the square of each element
ar=[1,2,3,4,5,6]
ar.forEach(num => console.log(num**2))
console.log(`---------------`)
sq = ar.map(num => num**2)

// program to print the cube of each element
ar.forEach(num => console.log(num**3))
cube = ar.map(num => num**3)
console.log(`---------------`)
console.log(sq)
console.log(cube)