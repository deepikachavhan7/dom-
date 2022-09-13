const person1={
    "rollno":1,
    "name":"deep"
}
const person2 ={...person1,"age":45};
console.log(person2);


const arr1=[1,2,3]
const arr2 =[3,4,5]
const arr3 =[...arr1,...arr2];
console.log(arr3);


const arr1=[{a:1},{b:3},{c:5}]
const arr2=[1,3,4];
const arr3=[...arr1,...arr2,{}]
console.log()