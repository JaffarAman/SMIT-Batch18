// const a = {
//   name: "jaffar",
//   name: "aman",
// };
// console.log("====================================");
// console.log(a);
// console.log("====================================");

// Spread opt - (... Three dots)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// // const arr3 = [arr1, arr2];
// // es5
// // const arr3 = arr1.concat(arr2);

// // ES6
// // const arr3 = [...arr1, ...arr2];

// const arr3 = ["apple", "mango", ...arr1, ...arr2];

// console.log(arr3);
// // console.log("arr1", arr1);

// const user = {
//   firstName: "Jaffar",
//   lastName: "Aman",
//   email: "jaffar@gmail.com",
// };

// const course = {

//   name: "mern stack",
//   duration: "1.5 years",
//   teacherName: "Muhammad Sufiyan",
//    ...user,
//   email: "sufiyan@gmail.com",
// };

// console.log(course);

// const arr = ["apple", "mango", "apple"];

// const uniArr = new Set(arr);
// console.log(arr);
// console.log(uniArr.values());

// function foo(...rest) {
//   console.log("Hello world", rest[10]);
// }

// function foo(city1, city2, ...restNumber) {
//   console.log("Hello world", city1, city2, restNumber);
// }

// foo("karachi", "lahore", 1, 2, 5, 4, 2, 4, 1, 32, 63, 41, 32);

// // primitive Types - by value
// String
// Number
// Boolean
// null
// undefined

// // non primitive data type / Reference Data Type - by reference
// Array
// Object

// let a = "Jaffar";
// let b = a;

// a = "hammad bhai";

// console.log("a", a);
// console.log("b", b);

// const obj1 = {
//   name: "Jaffar",
// };

// const obj2 = obj1;
// const obj3 = obj2;
// obj1.name = "Hammad bhai";
// obj2.age = 25;
// obj3.email = "jaffar";

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// const obj10 = {
//   name: "jafar",
// };

// obj10 = [];
// console.log(obj10);
// obj10.name = "Jaffar Aman";
// console.log(obj10);

// shallow or deep copy

// const obj1 = {
//   name: "Jaffar",
// };
// // shallow copy
// const obj2 = { ...obj1 };

// obj1.name = "Hammad";
// obj2.age = 25;

// console.log(obj1, "obj1");
// console.log(obj2, "obj2");

const stdObj = {
  name: "Jaffar",
  age: 25,
  courses: {
    html: 75,
    css: 80,
    a : {}
  },
};

// Shallow copy
// const a = { ...stdObj };
// Deep copy
let a = JSON.stringify(stdObj);
a = JSON.parse(a);

a.name = "Hammad";
a.courses.html = 1000;

console.log("stdObj", stdObj);
console.log("a", a);
