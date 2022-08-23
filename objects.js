
// Objects - collectio of key value pairs
// keys are strings while values can be anything (primitive types , arrays, functions or other objects)
// A property which has a value as function, it is a method

let obj1 = {}   // Declare an object

let obj2 = {
    name: 'abc',
    age: 44,
    subjects: ['maths','eng','science'],
    intro: function(){
        return this.name + " is " + this.age +" years old"
    },

    address: {
        city: 'New Delhi',
        State: 'Delhi'
    }
}

// this keyword inside an object
// For a method, to be able to access the other properties of the object , this keyword can be used
// 
console.log(obj2.intro());

// Constructor function - 
// When an object has to be used as a template, then we can create a constructor function which then 
// can be used to create as many template objects as we want

function Person(name, age){
    this.name = name;
    this.age = age;
}

// Creating a user using constructor function
let p1 = new Person('Abc',20);
console.log(p1.age);