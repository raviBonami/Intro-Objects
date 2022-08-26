
const  _ = require('lodash');
const clonedeep = require('lodash.clonedeep')
// Functions in JS has mainly 2 properties - length and prototype

// 1. The number of arguments a function takes is called its length

function add(a,b){
    return a+b;
}
console.log(add.length) // returns 2

// 2. Prototype refers to actual function object

// Advanced functions - call, apply, bind

// 1. CALL - helps to call function belonging to one object from another object

let obj1 = {
    name: 'tom',
    age: 12,
    greet: function(){
        console.log(this.name + " " + this.age);
    }
}

let obj2 = {
    name: 'jerry',
    age: 5
}
obj1.greet.call(obj2);

// This is also called Function Borrowing

// We can also provide external arguments to it, in call we provide external values seperated by commas

let obj3 = {
    city: 'del',
    country: 'Ind',
    details: function(major){
        console.log(this.city + " " +this.country + " " + major)
    }
}
let obj4 = {
    city:'mum'
}

obj3.details.call(obj4,"physics major");

// 2. APPLY - same as call but here it takes external arguments as arrays
let obj5 = {
    id: 1,
    place: 'dwarka',
    play(game, matches){
        console.log(this.id + " played " + matches + " matches of "+ game + " at "+this.place)
    }
}
let obj6 = {
    id:2,
    place: 'noida'
}

obj5.play.apply(obj6,[5,'football'])

// 3. BIND - used to bind a function to a specific object
// It returns a new function and this function is bound with the specific object specified

function func1(){
    console.log(this.name + " " + this.age)
}
let obj7 = {
    name: 'rick',
    age: 47
}

const bindFunc = func1.bind(obj7);
bindFunc();


// In all 3 functions, if any value is missing, it is returned as undefined

var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}
say('mick')


// Deep Copying objects - 
// 1. JSON.stringify and JSON.parse - deep copies but doesn't copies functions, also if
// some values are null, undefined , NaN, it simply makes them all null
let object1 = {
    inner1: {
        inner2:{
            inner3:{
                val: 'xyz'
            }
        }
    }
}

let stringObj = JSON.stringify(object1);
// console.log(stringObj)
let object2 = JSON.parse(stringObj)
// console.log(object2)

let deepCopy1 = JSON.parse(JSON.stringify(object1));
// console.log(deepCopy1);

// Doesn't work with functions, so functions won't be copied

// 2. Object.assign() - doesn't do deep copy
let object3 = Object.assign({},object1)
// console.log(object3);
console.log('---------------------------------------------------')

// 3. Lodash - external dependency - copies everything from values, functions, maps, sets etc
const lodashDeep = clonedeep(object1);
console.log(lodashDeep);

////////////////////////////////////////////////////////////////////////////////////
