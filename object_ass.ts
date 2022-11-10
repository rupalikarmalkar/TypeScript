var Employee ={
 id : 7,
 fname : "Jack",
 lastName :"Sparrow",
 mobile :457825462 
}
console.log(`Object Destructing`);

var {id:id, fname:fname , lastName: lastName, mobile: mobile} = Employee ;
console.log(Employee);
console.log(`Object Traversing `);

for (const key in Employee) {
    if (Object.prototype.hasOwnProperty.call(Employee, key)) {
        const element = Employee[key];
        console.log(element);
        }
}
console.log();
const array =["J&J","Pifizer","Sputnik"];
console.log(`Given array is: ${array}`);
array.push("Covaxin");
console.log(`After adding element array is :${array}`);

console.log(`Array Traversing`);
for (const element of array) {
    
    console.log(element);
    
}
console.log(`Array Destructuring`);
for (let index = 0; index < array.length; index++) {
console.log(array[3]);
    
}

