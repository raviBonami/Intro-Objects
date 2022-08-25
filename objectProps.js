
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

console.log(person5.propertyIsEnumerable('name'));
// To check if a property is enumerbale or not, we can know it by using propertyIsEnumerble('prop name')

console.log('***********************************************************')

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

// Properties that are properties of the object itself are called Own properties
// They are different from inherited properties as inherited ones are inherited from prototypes

////////////////////////////////////////////////////////////////////////////////////////

// Alternative to for-in loop - 
// Object.values() - returns an array containing the values of all the props of an object
const obj5 = {
    prop1: "some value",
    prop2: 123,
    prop3: "val",
    prop4: {
        innerProp: "value inner"
    }
}
const arr1 = Object.values(obj5);
console.log("Object.values")
console.log(arr1)

///////////////////////////////////////////////////////////////////////////////////

// Object.entries() - returns an array consisting of sub-arrays having key-value pair as 2 elements

const obj6 = {
    p1: "hi",
    p2: "bye",
    p3: 12,
    p4: {
        p5: "inner p5"
    }
}
const arr2 = Object.entries(obj6)
console.log("Object.entries")
console.log(arr2);

//////////////////////////////////////////////////////////////////////////////////////

const object1 = {
    name: 'nolan',
    age: 88,
    hotel: 'raddison',
    city: {
        loc: "new delhi",
        pass: true
    }
}

const object1Keys = Object.keys(object1)
console.log("Object.keys")
console.log( object1Keys)

///////////////////////////////////////////////////////////////////////////

// Object.is() - Checks if two values are same or not
// It works same as === but with two differences
// -0 and +0 is same for === but ut us different for Object.is()
console.log(-0 === +0)  // true
console.log(Object.is(-0,+0))   // false

console.log(NaN === NaN)    // gives false
console.log(Object.is(NaN,NaN))     // gives true

/////////////////////////////////////////////////////////////////////////////////////

// Object.create() - Allows us to create object based on another object
const student = {
    name:'jack',
    age: 15,
    subject: 5,
    getName: function(){
        return this.name;
    }
}

const stu1 = Object.create(student);
console.log(stu1.getName());
stu1.name = 'jill'
console.log(stu1.getName());

///////////////////////////////////////////////////////////////////

// Object Destructuring - 
// Quick way of assigning properties of an object to variables

const dest1 = {
    name: 'Will',
    car: 'porsche',
    house: 'london'
}

const { name: fullName, car: carName, house: houseName } = dest1
console.log(fullName + " - " + carName + " - " + houseName)
// property name : variable name

// If variable name is same, we can remove them
const {name, car, house} = dest1
console.log("Without variable name: "+name+" - "+car+" - "+house)

// Destructuring a null object will throw type error

// Nested Object Destructuring - 
const nestedObj1 = {
    name: {
        initialname: 'pika',
        surname: 'pokemon'
    },
    strength: 200,
    vision: 97
}

const {name: {initialname,surname}} = nestedObj1
console.log(initialname, surname)

