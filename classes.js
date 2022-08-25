
// Unlike Java, classes in JS are syntactical sugar that is internally function only

// We had to use constructor/prototype to create functions, now we can create objects using classes

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        return this.name + " " + this.age;
    }
}

let p1 = new Person('tom',40);
console.log(p1.getInfo())

console.log(typeof Person);

// Diff b/w constructor function objects and class based object
// Objects created using class based are not hoisted, hence if an object is created before
// the class declaration , it will throw error

// Second, all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.

// Also, objects created using classes are non-enumerable and we have to use Object.defineProperty to make 
// them enumerable explicitly

// Can't be created without 'new' keyword

// Getters and setters - 
class Person2{
    constructor(name, city){
        this.name = name;
        this.city = city;
    }

    // self made getters and setters
    getName() {
        return this.name
    }

    setName(name){
        this.name = name;
    }

    // JS provided specific functions for getters and setters
    // _name = '_' underscore is used to differentiate b/w name property and name variable
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

let p2 = new Person2('abc','delhi')
// console.log(p2.getName())
// p2.setName('new name')
// console.log(p2.getName())

console.log(p2.name)
p2.name = "pi";
console.log(p2.name)

// Class expresssion - 
const class1 = class{
    constructor(prop1, prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

let p4 = new class1('one','two')
console.log(p4.prop1)

// Inheritance in classes

class parent{
    constructor(prop3){
        this.prop3 = prop3;
    }

    fly(){
        console.log("I can fly "+ this.prop3)
    }
}

class child extends parent{
    constructor(prop3){
        super(prop3)
    }

    walk(){
        console.log("I can walk")
    }
}

const p5 = new child('props')
p5.walk();
p5.fly();

// Shadowing methods - 
// If child has method which has same name as some method in parent class, then when that method is called, the method
// of child is invoked, child's method is now have said to shadowed over the parent's mathod

// Static method - 
// When class has a method which belongs to entire class instead of a every single object of class, it is called static method
// We access them by using Classname.methodname

class staticClass{
    constructor(name){
        this.name = name;
    }

    // static count = 'hello'; doubt 

    static eat(){
        console.log(this.name + " " + "eats")
    }

    
}
staticClass.eat();
const st1 = new staticClass('john')
// console.log(staticClass.count)
// st1.eat(); will give error as objects directly can't access static methods
// Similary child classes can inherit static methods similarly

/////////////////////////////////////////////////////////////////

// new.target - Allows us to know if an object has been created using 'new' keyword or not
// It allows us to prevent objects from being created without 'new' keyword
function newTarget(name){

        if(!new.target){
            throw 'Use new keyword please'
        }
        this.name = name;
    
}

// const new1 = newTarget('henry')  => this will throw error
// console.log(new1);


// Private fields - 
// Properties not accessible outside the class

class privateClassExample{
    #privateVariable;
    constructor(name,val){
        this.name = name;
        this.#privateVariable = val;
    }

    #privateMethod(){
        console.log('I am a private method')
        console.log(this.#privateVariable)
    }

    getVals(){
        this.#privateMethod();
    }
}
let privateVar = new privateClassExample('private',50);
privateVar.getVals();

// Private variables are not accessible from sub-classes (child classs can't access parent's private fields)












const new2 = new newTarget('evan')
console.log(new2);

const arrow1 = () => {
    console.log(this);  // empty object
}
arrow1();