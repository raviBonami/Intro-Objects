// "use strict"

// try{
//     console.log("try block 1")
//     errorFunc();
//     console.log("Statement after error")
// }catch(err){
//     console.log(err)
// }finally{
//     console.log('Executed irrespective of try results')
// }
// console.log('execution continues')

// let data = '{"age" : 45}'

// try{
//     let jsonData = JSON.parse(data);
//     if(!jsonData.name){
//         // throw new SyntaxError('Name not present')
//         throw new Error('Name is mandatory')
//     }
//     console.log(jsonData.name)
// }catch(err){
//     console.log("Error occured " + err.message);
//     console.log("Error occured " + err.name);
//     console.log("Error occured " + err);
// }


// console.log(this)

function one(){
    console.log(this)
}
// one();

const arr = () => {
    console.log(this);
}
// arr();

let obj1 = {
    name: 'abc',
    age: 45,
    details: function(){
        console.log(this.name + " " + this.age);
        console.log(this);
    },
    moreDetails:function(){
        function named(){
            console.log(this)
        }
        named();
    }
}

// obj1.moreDetails();

// functions - who calls the function
// object method - object itself
// function inside method - who calls the function
// normally - global object


const arr1 = () => {
    console.log(this)
}
arr1();

const object1 = {
    name:'abc',
    test: () => {
        console.log(this)
    },
    test2: () => {
        const test3 = () => {
            console.log(this)
        }
        test3();
    }
}
// object1.test();

const object2 = {
    innerObj: {
        test3: () => {
            const test4 = () => {
                console.log(this);
            }
            test4();
        }
    }
}
// object2.innerObj.test3();

let p1 = new Promise((res,rej) => {
    let flag = true;
    if(!flag){
        res('resolved')
    
    }else{
        rej('rejected')
    }
})
p1.then((msg) => {
    console.log(msg + " from then")
},(msg) => {
    console.log(msg + " from then ")
}).catch((err) => {
    console.log(err + " from catch")
})
