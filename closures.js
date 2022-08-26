
let a = 7;
 function abc(){
    console.log(a);
    let a = 6;
 }
//  abc();

 let obj1 = {
    .23:"abc"
 }
 console.log(obj1[.23])     // gives correct o/p
 console.log(obj1[".23"])   // gives undefined

 //////////////////////////////////////////////////////////////

 // Closures - In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. 
 // The closure preserves the outer scope inside its inner scope.

// Lexical scoping - The variables defined on outer scope of a function is accessible inside it

 let var1 = "xyz";
 function fun1(){
    console.log(var1)
    // console.log(var2);  - throws an error
 }
 fun1();
// Here, the function is able to access the vriable defined outside its scope, this happens due to lexical scoping,
// A function when executed and encounters a variable, it checks if the variable if present in its own scope or not, if it is
// present then it uses that variable only but if not, then it looks just outside its scope for the same variable.
// It keeps on looking until either it finds it or it reaches global scope.
// If it is also not present in global scope, then it will throw an error

let var2 = "tim";
function fun2(){
    console.log(var2)
}
var2 = 'new val'
fun2();
var2 = 'more new val'
fun2();

// When fun() is defined, it simply stores the variable that it is using in its closure, it stores the var2 variable
// in its closure and makes sure to follow it for any changes or updates
// When var2 value is changed , the fun() function also updates the variable value in its closure
// The value of var2 is updated to 'new val' and it is then updated by fun() in its closure
// Then when fun() is called, it uses the variable value from its closure. There the value is 'new val', so it gets printed
// Then again var2 is updated to 'more new val', it is again updated by fun() in its closure, then when again fun() is called
// 'more new val' is printed.

// Ex: 2
function outerFunc(outerMsg){
    const outer2 = 10;
    return function innerFunc(innerMsg){
        console.log(outer2)
        return outerMsg + " " + innerMsg
    }
}

const fun3 = outerFunc("Hello");
const fun4 = fun3('Jack')
console.log(fun4);

// In above code, the outerFunc returns an inner function which uses the outer variable from outer function
// It makes a closure and in it the outerMsg is stored and tracked

// Now, outerFunc() is called and outeMsg is passed to it, after returning innerfunc to fun3 variable, the outerFunc gets popped out 
// from call stack. So, question arises that, if a function is completed , then all the variables defined inside it are also destroyed,
// so, outerMsg should be absent.
// But, when we call fun4 with 'Jack' as its value, it still is able to use outerMsg value ('hello')
// This happens because the innerFunc is able to form a closure and in it it stores all the value that it is going to use and tracks them
// Then when it is called, outerMsg is accessible to it and it uses its latest value.
// A function always encloses the variables that it is using whether they are defined inside it and also outside it
// The function makes sure that even if the variable is present in outer function / outer scope gets destroyed , it still is able to 
// access the variable's latest value


let f;
if(true){
    let i = 100;
    f = () => {
        console.log(i)
    }
}
f();


// let g;
// let abc = 99;
// if(true){
//     let abc = 9;
//     g = () => {
//         console.log(abc);
//     }
// }
// g();


// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000)
// }
// console.log("After the loop")
// Above for loop prints 0,1,2 as i is block scoped, so for each loop, it is re-created with new incremented values
// of i for each function of setTimeout, so it prints 0,1,2

// But same loop for var will print 3 three times
// for(var v = 0;v<3;v++){
//     setTimeout(() => {
//         console.log(v)
//     },1000)
// }
// Here, since it is var keyword and it is function scoped, no new value is created for v for each loop, it closes v and keeps it
// lastest value. During 1st loop, v value changes to 1, so setTimeout also changes it to 1, similarly for v = 1 and v=2, it updates
// its value to 1,2 respectively.
// Then , after last loop, it again increments to 4 and then loop ends. Then when stack is empty, event loop pushes setTimeout functions
// one by one and then they get executed with value of v as 3;

// To keep var but make this loop work fine, enclose the setTimeout in an IIFE

// for(var v = 0;v<3;v++){
//     ((v) => {
//         setTimeout(() => {
//             console.log(v)
//         },1000)
//     })(v);
   
// }

//////////////////////////////////////////////////////////////////////////

// console.log(varName)
// var varName = 55
// console.log(varName);
// let fa;
// function fn(){
//     console.log(varName);
//     varName = 23;
//     fa = () => {
//         console.log(varName)
//     }
//     console.log(varName);
// }
// fa();
// fn();
// console.log(varName);

// For a function, JS makes closure of it from where it is defined rather than where it is being called from.


