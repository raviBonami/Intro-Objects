// Async await - 
// better ways to handle promises than traditional .then and .catch methods
// Allows us to write promises based code as it was asynchronous
// works asynchronously via event loop
// always returns a value, makes sure that a promise is returned
// if not, then it wraps it in promise which is resolved with its value

const asyncFunc = async () => {
    let data = "Hello"
    return data;
}
asyncFunc.then((data) => {
    console.log(data)
})

// Await - used to wait for promise, 
// can be used within async block only
// makes code wait until promise returns a result
// only async block wait

const asyncFunc2 = () => {
    const data = await "Hi world"
    return data;
}
asyncFunc2.then((data) => {
    console.log(data)
})


function makeRequest(val){
    return new Promise((res, rej) => {
        let val = 'google';
        if(val){
            res('Working')
        }else{
            rej('Failed')
        }
    })
}

function processRequest(response){
    return new Promise((res, rej) => {
        res("Completion " + response)
    })
}

async function func1(){
    const data = await makeRequest('google')
    console.log('data received successfully')
    const moreData = await processRequest()
}

// JS as soon as it encounters the await keyword, it stops the further execution of the code inside the function, and starts 
// executing rest of the code outside the function. 
// When that part (statement containing await) is completed, then it resumes the execution for the 
// rest of the code in the function.

// errors are caught through the try catch block inside async await functions


async function func3(){
    try{
        const data = await makeRequest('google')
        console.log('data received successfully')
        const moreData = await processRequest()
    }catch(err){
        console.log(err);
    }
    
}

// all asynchronous promises should be having 'awaait' in them as then only when they are settled their response would be 
// assigned to the variable, else a pending promise would be assigned to the variable
// The resolved value of the promise is treated as the return value of the await expression