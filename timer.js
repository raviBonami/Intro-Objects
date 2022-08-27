
// Timers are created to execute a task or any function at a particular time.
// Basically delay the program execution or execute it after some time interval

// JS has 2 timer functions - 
// 1. setInterval()
// 2. setTimeout()

// 1. setTimeout - used to delay execution of a function after some time
// accepts two parameters - a callback function which is to be executed after delay
// and the delay 

setTimeout(function(){
    console.log("I am executed after delay of 1000 ms")
},1000)
// note that it only shows the minimum time delay it will guarantee before the
// execution of function, in cases it can be delayed for more than the specified time
// additonal parameters can be passed after the delay which will act as the arguments
// to function passed

let timer1 = setTimeout(function(msg){
    console.log("I am msg 1 "+msg)
},1000,"I am msg 2")

// 2. setInterval - executes a function/action repeatedly after the specified
// time delay
let timer2 = setInterval(function(){
    console.log("I am printed repeatedly")
},2000) 

// Both setTimeout and setInterval also return a unique timer ID for each setInterval
// and setTimeout being created
// We can use them to clear these timers from our program

clearTimeout(timer1)
clearInterval(timer2)
// Both will clear the respective timers

// Also, for the time specified, the function will wait in node/browser API, after that 
// delay , it will be moved to task queue and only when call stack is empty, it will
// be moved from task queue to call stack by event loop and then it will be executed
