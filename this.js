
"use strict"
// In strict mode, the value of this remains as same as it was when it entered the execution context, so 
// when normally we console.log(this), the execution context's 


// "this" in JS
// this has different meaning depending upon where it is being used

// In NODE - 

// Non-strict mode

// 1. In normal console.log() - Returns empty object
// console.log(this);  

// 2. Inside a function - Returns global object
// function fun1(){
//     console.log(this);
// }
// fun1();

// 3. Inside a function inside in an object (method) - Returns the object itself
// const obj1 = {
//     name:'abc',
//     age:5,
//     test: function(){
//         console.log(this)
//     }
// }
// obj1.test();

// 4. Inside a function inside a function (nested function) in an object - Returns global object 
// const obj2 = {
//     name:'xyz',
//     test: function(){
//         function inner(){
//             console.log(this);
//         }
//         inner();
//     }
// }
// console.log(obj2.test())

// In strict mode

// 1. Normal console.log - Returns empty object
console.log(this);

// 2. Inside a function - Returns undefined
function fun2(){
    console.log(this);
}
// fun2();

// 3. Inside a function inside an object (method) - Returns the object calling the function (object itself)
let obj3 = {
    name:'pqrs',
    test: function(){
        console.log(this);
    }
}
// obj3.test();

// 4. Inside a function inside a function in an object - Returns undefined
let obj4 = {
    name: 'tom',
    test: function(){
        function inner(){
            console.log(this);
        }
        inner();
    }
}
// obj4.test();

///////////////////////////////////////////////////////////////////////////////////////////////

// In BROWSER - 

// In non-strict mode - 

// 1. Normal console.log(this) - returns window object

// 2. Inside a function - returns window object

// 3. Inside a method - returns object itself

// 4. Inside a nested method - returns window object

// In strict mode - 

// 1. Normal console.log(this) - returns window object

// 2. Inside a function - returns undefined

// 3. Inside a method - returns object itself

// 4. Inside a nested method - returns undefined


// "this" in arrow functions - 
// Normally, every function when executed first creates an execution context for itself, in that execution 
// context, we get global object and an empty "this", here, "this" is bound to the object that is created in 
// that function

// But arrow functions do not create any execution context for themselves, hence in arrow functions, 
// "this" is taken lexically, i.e from next outer execution context

const arrow1 = () => {
    console.log(this);
}

// arrow1(); // Returns global object

// If any (unique) method is made using arrow function, then when it will be called by any object , it will 
// give undefined as "this" will point to Global execution context and hence when it will try to access
// a method which is not present in global object, it will return undefineds

//////////////////////////////////////////////////////////////////////

// Global this - 
// Since different environments have different global objects, to standardize, globalThis is used
// globalThis == global object in node JS
// globalThis == window in browser

