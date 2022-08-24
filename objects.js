
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

// Factory function - When a function creates an object and explicitly returns it
function factoryPerson(name, city){
    return {
        name: name,
        city: city
    }
}

const fperson1 = new factoryPerson('dave','New york')
console.log(fperson1)

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

// new keyword - 1. create a new empty object and assigns "this" to empty object
// 2. Assigns the arguements passed to name and age
// 3. Returns the newly created object

// Adding methods to constructor function
function Person2(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
        return this.name + " is " + this.age +" years old"
    }
}

let p2 = new Person2('John',45);
console.log(p2.hello())

// But above code is bad as each object will have its own seperate function definition of a function hence taking
// up lots of unnecessary space,  we use prototypes to resolve this problem

// A constructor function implicitly returns this object

// Diff b/w object created using factory function and constructor function
// Object created using constructor function has Object.prototype as its prototype whereas for objects created
// using constructor functions, has constructor function prototype as its prototype

// Why 'new' keyword is important = It is important as if it is missed, then all the properties will be assigned
// to global object instead of the object whose value we want to set

////////////////////////////////////////////////////////////

// Prototypes in JS
// Objects in JS can inherit properties from other objects , these objects are called prototypes
// Each object has its own property called prototype
// Prototypes have their own properties
// Also, each prototype is itself also an object so a prototype has its own prototype
// This forms what we call a prototype chaining

let p3 = new Person2('adam',50);
// Prototype of object p3 will be Person2 object, similarly Person2 will also be an object that will have some other
// object as its prototype. This will continue till Object.prototype object , which is the last object in prototype chaining
// Object.protoype has null as its protoype.

// Accessing methods or properties in JS - 
// If we access some property of an object and it does not have it, then JS will look into its prototype
// for the same, if even that prototype doesn't have that property, then JS will look into prototypes prototype
// It will keep on going like this until it finds the property or it reaches end of end of prototype chain

// JS prototype illustration 
// JS has built in Object() function , Also JS provides an anonymous object which is the prototype of this 
// Object() function.
// Object.prototype = Anonymous Function
// This anonymous function has property called constructor which again points back to Object() function

// Object() ----Prototype----> Anonymous Object
// Anonymous Object ----Constructor----- > Object()
// Object(function).prototype = anonymous object.constructor
// Object.prototype.constructor = Object (An objects prototype's constructor is the object function itself)

function Person4(name){
    this.name = name;
}

let p4 = new Person4('abc');
// JS creates a new function Person4(), it also creates an anonymous object and makes it as the prototype of
// this function.
// This anonymous function is also given a property of constructor function which points to function Person4()

// In addition to these, JS also links the Person.prototype to Object.prototype via [[Prototype]], this is 
// called Prototype Linkage

// Person()  ------Prototype-----> Anonymous Object 
// Anonymous Object ----special constructor function ----------> Person() 
// Anonymous Object -------Prototype-------> Object() constructor function (Object function's anonymous object)
// Object() --------Prototype-------> Object's anonymous function


