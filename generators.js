
// An special function that can return multiple values 
// returns a generator object
// generator object has .next() method that allows us to execute
// all code till first yield 
// If multiple yields are present, then doing next() implements the next 
// yield and so

function* simpleGenerator(){
    console.log('Before 1')
    yield 1
    console.log('After 1')
    console.log('Before 2')
    yield 2
    console.log('After 2')
    console.log('Before 3')
    yield 3
    console.log('Before 3')
}

const generatorObj1 = simpleGenerator();
// created generator object
// all generator objects have 2 fields - value and done
// value is what is being yield, done is whether execution has reached
// last yield or not

generatorObj1.next() // implements till yield 1, value 1 done false
generatorObj1.next() // implements till yield 2, value 2 done false
generatorObj1.next() // implements till yield 3, value 2 done false
generatorObj1.next() // execution finished, value undefined done true

// we can also make multiple generators
const generatorObj2 = simpleGenerator();
// this object will be completely different from other generator objects
// and .next() for this would work differently


function* arrayIterator(array){
    for(let i=0;i<array.length;i++){
        yield array[i]
    }
}

const arrayObj = arrayIterator([1,2,3,4,5])
console.log(arrayObj.next())
console.log(arrayObj.next())
console.log(arrayObj.next())

// return
arrayObj.return(100)    // allows us to exit out of generator function
// with the value (100) passed to it even if all yield values are not done
// value 100, done true

// throw - allows us to throw an error - 
arrayObj.throw(new Error("Error 1"))