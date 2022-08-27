

// Callbacks - 
// In JavaScript, functions are first-class citizens. Therefore, you can pass a function to another function as an argument.

// By definition, a callback is a function that you pass into another function as an argument for executing later.

function callbackExample(arr, cb){
    let res = [];
    for (let i=0;i<arr.length;i++){
        res[i] = cb(arr[i])
    }
    return res;
}

function callBack1(num){
    return num*3;
}

const res1 = callbackExample([1,2,3,4,5],callBack1)
console.log(res1);

// Here, we are passing a function in the parameters of our main function and we are telling that function to perform some
// actions, then when that function completes it work, it needs to call us back so that we don't have to wait for it

// This is synchronous callback

// Asynchronous callback - used for asynchronous functions, here we don't know the exact time when callback function will be completely
// executed, so we instead hand it to browser to perform those actions and use callback function to tell us when the process is 
// completed

// function ayncCallback(arr,cb){
//     for(let i=0;i<4;i++){
//         cb(arr[i])
//     }
// }

function callback3(arr){
    for(let i=0;i<arr.length;i++){
        setTimeout(() => {
            console.log(arr[i])
        },1000)
    }
}
const cbArr = ['tom','brad','henry']
callback3(cbArr)

// Callback hell - If a function is using a callback function and that callback function itself is using another callback
// function and it is also calling another and this can go on. If it goes 9-10 levels deep then it is very difficult to read and is termed as
// callback hell

// Due to this, promises were introduced in JS

//////////////////////////////////////////////////////

// Promises - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Has 3 states - pending, fulfilled, rejected
// pending - promise is in its initial state, neither it is fulfilled or rejected
// fulfilled - promise is completed
// rejected - promise is rejected

let promise1 = new Promise((resolve, reject) => {
    let flag = true;
    if(flag){
        resolve('clean')
    }else{
        reject('not cleaned')
    }
});

promise1.then((msg) => {
    console.log("The room is " + msg)
})
.catch((msg) => {
    console.log("The room is " + msg);
})


let promise2 = new Promise((resolve, reject) => {
    let flag = true;
    if(flag){
        resolve('clean','not cleaned')
    }else{
        reject('not cleaned')
    }
});

promise1.then((msg,error) => {
    let flag1 = true;
    if(!flag1){
        console.log("The room is "+msg);
    }else{
        console.log('The room is not ' + error)
    }
})


let cleanRoom1 = function(){
    return new Promise((res, rej) => {
        res('Msg from clean room')
    })
}

let removeGarbage1 = function(msg){
    return new Promise((res,rej) => {
        res(msg + ' Msg from remove garbage')
    })
}

let getIceCream = function(msg){
    return new Promise((res, rej) => {
        res(msg + ' got ice cream')
    })
}

cleanRoom1().then((msg) => {
    return removeGarbage1(msg)
}).then((msg) => {
    return getIceCream(msg)
}).then((msg) => {
    console.log("finished " + msg)
})


//
let pro1 = new Promise((res, rej) => {

})

// promise is an object which holds the value of an asynchronous task
// until that process is completed or not
// It takes one callback function - this callback function itself takes
// 2 arguments automatically - resolve and reject - these both are functions

// resolve - it is the function which when called changes the promise from 
// pending to fulfilled
// reject - when called changes the status of promise from pending to rejected

// we can't directly mutate the status of a promise, we can only call resolve 
// or reject to change the status

// A promise has 2 built-in methods supplied to it. These are .then and .catch,
// Both these .then and .catch takes function (callback function) as an argument
// If resolve is called, then function inside .then is automatically invoked
// and if reject is called then function inside .catch is automatically invoked

// So, we can pass the respective function in .then or .catch depending upon 
// what we want to do

// If some values are to be supplied to callback functions inside resolve or reject
// we can pass them through resolve(arg) and reject(arg)

// These arguments will be automatically injected into our functions inside
// .then and .catch

// Also, these .then and .catch themselves return promise object, which means we can simply create and put another promise
// behind them and do multiple promises. It is called promise chaining



const prom1 = new Promise((resolve, reject) => {
    let bool2 = true;
    if(bool2){
        resolve(msg);
    }else{
        reject(err)
    }
})

prom1.then((msg) => {
    console.log(msg)

}).then(() => {

})
.catch((err) => {
    console.log(err)
})

// Promise methods - 
// 1. Promise.all - 
// takes an iterable of promises as input
// returns a single Promise that resolves to an array of the result of 
// input promises
// This returned promise is fulfilled when all of the input promises have been 
// fulfilled or if input iterable contains no promises, if input is empty, then 
// promise gets resolved synchronously other always resolved asynchronously
// It rejects immeadiately if any of the input promise is rejected
// order of promises is preserved


const promise11 = Promise.resolve(3);
const promise12 = 42;
const promise13 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise11, promise12, promise13]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]


// 2. Promise.allSettled() - 
// returns a promise that fulfills after all the given promises have been fulfilled
// or rejected, 
// returns an array of objects that describes the outcome of each promise
// if empty iterable is passed, then only it is settled synchronously


// Gives result of all promises
const promise21 = Promise.resolve(3);
const promise22 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise21, promise22];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

// 3. Promise.any() - 
// takes an iterable as an input ( iterable containing promises ), 
// returns a single promise that fulfills as soon as any of the promises
// iterable gets fulfilled
// this single promise contains the value of the fulfilled promise
// If all promises are rejected, then returned promise is rejected with 
// an AggregateError
// it also reject if the iterable is empty
// returns first fulfilled value

const promise41 = Promise.reject(0);
const promise42 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise43 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises44 = [promise41, promise42, promise43];

Promise.any(promises44).then((value) => console.log(value));

// expected output: "quick"


// 4. Promise.catch() - 
// deals with rejected case only (rejected)
// takes input as reason or error object 
// returns a promise
const promise51 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
  });
  
  promise51.catch((error) => {
    console.error(error);
  });
  // expected output: Uh-oh!


// 5. Promise.finally - 
// schedules a function to be called when the promsie is settled 
// irrespective of whether a promise is fulfilled or rejected, finally is called
// receives no arguement as we don't care about promise state
// returns an equivalent promise - its promise will have same value as it 
// received from resolve or reject
// allowing us to chain calls to it - this is called Composition
// If some code you want to execute in both try and catch, we can instead
// put them in finally after .then and .catch

function checkMail() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        resolve('Mail has arrived');
      } else {
        reject(new Error('Failed to arrive'));
      }
    });
  }
  
  checkMail()
    .then((mail) => {
      console.log(mail);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log('Experiment completed');
    });


// 6. Promise.race() - 
// takes an iterable of promises as parameter
// returns a promise that fulfills or rejects as soon as one of the promises
// in the iterable fulfills or rejects with value from that respective promise
// so first settled promise is returned
// if iterable is empty, then promise is forever pending
// if non-promise value is present, then returned promise takes its value

const promise61 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise62 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise61, promise62]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // expected output: "two"


// 7. Promise.reject() - 
// returns a Promise object with given reason
// takes reason as input

function resolved(result) {
    console.log('Resolved');
  }
  
  function rejected(result) {
    console.error(result);
  }
  
  Promise.reject(new Error('fail')).then(resolved, rejected);
  // expected output: Error: fail

// 8. Promise.resolve() - 
// resolves the given value to Promise, 
// if value is promise, then promise is returned 
// if value is another .then() method, then it will be called
// else returned promise will fulfilled with its value
// takes value as parameter - can be a promise
// if value is promise, and it is rejected then rejected promise will still result
// in rejected promise

const promise81 = Promise.resolve(123);

promise81.then((value) => {
  console.log(value);
  // expected output: 123
});

// 9. Promise.then() - 
// returns a promise
// takes upto 2 arguments, callback function for success and failure
// both callback functions can catch the values passed in their parameters
// since it returns a promise, it then can be chained behind another promise
// 

const promise91 = new Promise((resolve, reject) => {
    // resolve('Success!');
    reject('failed')
  });
  
  promise91.then((value) => {
    console.log(value);
    // expected output: "Success!"
  },(err) => {
    console.log(err);
  });

////////////////////////////////////////////////////////////////////////////////////

// Functions can return a promise not data, but a promise that when data would be arrived, it would be let us know
// as soon as data arrives, it invokes callback function in .then and in this .then we can catch the data that we received
