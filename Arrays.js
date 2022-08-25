
// Arrays - 
// Collection of different or similar kind of data
// No pre-defined size, elements can be added and removed
// Zero indexed and copying arrays causes shallow copy , not deep copy

// create arrays - 
const arr1 = new Array(1,2,3)   // when more than one number is passed as argument, then they are
// treated as elements
console.log(arr1);

const arr2 = new Array(4);  // when one number is passed, it is treated as size
console.log(arr2);

const arr3 = [1,2,3,4]  // without using Arrays method
console.log(arr3);

// Accessing elements 
console.log(arr3[2]) // Returns 3rd element as array is 0th indexed

// Array methods - 
// 1. length (not a method but a property) - returns length of array
console.log(arr3.length)
// when length is increased without adding new elements, empty items gets added to it
arr3.length = 5;
console.log(arr3);

const obj = {
    m: function(){
        console.log("I am method")
    }
}
// obj.m();

// 2. Array.at - Returns element as specified location, can also have negaive index
const arr4 = [1,2,3,4,5,6]
// console.log(arr4.at(3))

// 3. concat - adds two array elements and returns new array, only first level elements are copied, all nested arrays amd object are
// references only. Hence,  only a shallow copy is made
// In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat(), 
// Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) create shallow copies rather than deep copies.

const arr5 = ['a',3,false,{name: 'abc'}]
const arr6 = ['b', true, 9, [1,2,3,[4,5]]];
const arr7 = arr5.concat(arr6);
console.log(arr7);
arr6[3][0] = "new elem";
console.log(arr7);

const arr10 = [1,2,3,]
const arr11 = arr10.concat([1,[2,3]])
console.log(arr11);

// 4. copyWithin(index, start, end) - makes shallow copy of an array, takes 3 arguments , place where to copy, start index, end index
// It also doesn't modifies the length, so if copying is for more elements, those elements would be replaced by
// copied elements
// If 
const arr12 = [10,20,30,40,50];
arr12.copyWithin(0,1,3)
console.log(arr12);

// start omitted - starts from 0
// end omitted - goes till end

// 5. Array.entries - returns the entries iterator of an array in a new array
const arr13 = [10,20,30]
const arr14 = arr13.entries();
for(let [index,ele] of arr14){
    console.log(index + ' - '+ele)
}
// console.log(arr14);

const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

const array1 = ['paris','NYK','London']
const array1Iterable = array1.entries();
for(let ele of array1Iterable){
    console.log(ele);
}
// Diff b/w for-in and for-of => for-in itreate over keys and for-of iterates over values

// 6. every() - tests whether all elements pass certian test or not
const isBelow = x => x< 10;
const arr15 = [3,5,19,23]
console.log(arr15.every(isBelow)) // returns false

// 7. fill() - allows us to fill elements in array from certain positions
const arr16 = [45,46,47,48]
console.log(arr16)
arr16.fill(1,2,4)
console.log(arr16)

// 8. filter ( high order function ) - important
// filters array on basis of some specified condition
const words = ['pears','pea','apple','banana','orange','guava',[1,2,3],{name:'pears'}]
const filteredWords = words.filter(elem => elem.length > 5)
console.log(filteredWords);
// Always returns a new array
// Also, it only creates shallow copy, so if nested element is present
// it will only copy its reference

// 9. find() - returns the first element that satisfies the given condition
// if couldn't find, returns undefined, also doesn't mutate the array
const findElem = words.find(ele => ele.length == 3);
console.log(findElem)

// 10. findIndex() - returns the index of the first element that satisfies
// the given condition
const arr20 = [11,29,44,53,64]
const findIndex = arr20.findIndex((x) => {
    return x % 2 == 0
})
console.log(findIndex)
// returns -1 if no element is found

// 11. findLast() - returns the index of last element that satisfies the
// specified conditions
