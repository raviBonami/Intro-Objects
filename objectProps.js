
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

// 2. Accessor Properties - 
// Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.
// But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

// When you read data from an accessor property, the [[Get]] function is called automatically to return a value. 
// The default return value of the [[Get]] function is undefined.

// If you assign a value to an accessor property, the [[Set]] function is called automatically.

// To define an accessor property, you must use the Object.defineProperty() method

let person7 = {};
person7.fname = "harry"
person7.lname = "potter"

Object.defineProperty(person7, 'fullname',{
    get: function(){
        return this.fname + " " +this.lname;
    },
    set: function(fname){
        this.fname = fname;
        // this.lname = lname;
    }

})

console.log(person7.fullname)   // Getter

person7.fullname = 'alex';      // Setter
console.log(person7.fullname)


// Object.defineProperties => To define multiple properties at the same time
let person8 = {}
Object.defineProperties(person8, {
    'name' : {
        value: 'peter'
    },
    'age' : {
        value: 34
    },
    'city' : {
        value: 'new york'
    }
})
// name, age and city properties defined at one time

// Object - get descriptor object

let person9 = {
    name: 'mike',
    nation: 'british'
}

let res = Object.getOwnPropertyDescriptor(person9,'name');
console.log(res);
// This will print the descriptor of property 'name' of person9 object like below - 
// { value: 'mike',
//   writable: true,
//   enumerable: true,
//   configurable: true }

/////////////////////////////////////////////////////////////////////////

// for - in loops
// Used to enumerate over an object, can enumerate only if its enumeration property is set to true
// Normally created objects have it set to true only

let animal1 = {
    name: 'percy',
    age: 34,
    city: 'New York'
}

for(let prop in animal1){
    console.log(prop + " -> " + animal1[prop])
}

// When you loop over the properties of an object that inherits from another object, 
// the for...in statement goes up in the prototype chain and enumerates over inherited properties

let obj1 = {
    city: 'Jersey'
}

let obj2 = Object.create(obj1);
obj2.country = "US"
for(let prop in obj2){
    console.log(prop + " -> " + obj2[prop])
}
// In above example, it will print both the properties of obj2 as well as the properties of obj1 as 
// obj2 is inherited from obj1 only
// If we want to restrict it to its own properties only, we have to use hasOwnProperty
console.log('-------------------------------------------------------------------')

for(let prop in obj2){
    if(obj2.hasOwnProperty(prop)){

        console.log(prop + " -> " + obj2[prop]) // will print country only as it is now taking onlt those properties which
        // are its own
    }
}