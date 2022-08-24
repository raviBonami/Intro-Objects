
// JS has 2 types of properties for any object - Data and Accessor
// The characteristics of any object in JS are enclosed by two pair of square brackets

// 1. Data properties - It has 4 attributes - 
// a). [[Configurable]] = If a property can be redefined or removed (removed via delete)
// b). [[Enumerable]] = If a property can be returned in for-in loop
// c). [[Writable]] = If property can be changed
// d). [[Value]] = contains actual value

// By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all 
// properties defined directly on an object. The default value of the[[Value]] attribute is undefined

// change any attribute - use Object.defineProperty() - 
// Takes 3 arguments - Object, property name, property descriptor (any one of the 4 attributes)

// If you use the Object.defineProperty() method to define a property of the object, 
// the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.

let person1 = {}
person1.age = 33;
console.log(person1.age)

delete person1.age;
// Able to delete the property as by default configurable property is set to be true
console.log(person1.age)

// Using Object.defineProperty
let person2 = {};
Object.defineProperty(person2, 'age', {
    configurable: false,
    value: 50
})

console.log(person2.age)
delete person2.age;
console.log(person2.age);
// Still age is present as it cannot be deleted as it's configuration has been changed to false

// Also, we cannot use Object.defineProperty again after using it once to change the properties of any attributes
// except writable

// Object.defineProperty(person2, 'age',{
//     configurable: true
// })
// Above code will give error as we cannot change any attribute property of an object when we have used
// Object.defineProperty to define it

// Enumerable - To be able to iterate over an object
// By default true, if Object.defineProperty is used, false

let person4 = {};
person4.name = 'abc'
person4.age = 100

for(let prop in person4){
    console.log(prop + " --> " + person4[prop])
}

let person5 = {};
person5.name = "tom"
person5.breed = "munchkin"
Object.defineProperty(person5, 'name',{
    enumerable: false,
})

for(let prop in person5){
    console.log(prop + " -> " + person5[prop])
}
// Above code will not print 'name' property as it has been set as non-enumerable

let person6 = {};
person6.fname = "abc";
person6.lname = "xyz"
Object.defineProperty(person6,'fname',{
    writable: false
})

console.log(person6.fname)
person6.fname = "pqr";
console.log(person6.fname) // Still it's value is "abc" as it is not writable