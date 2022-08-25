
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

// 6. every() - tests whether all elements pass certian test or not, returns boolean
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
// Also, it only creates shallow copy, so if nested element is present, it ignore them

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

// 11. findLast() - returns the last element that satisfies the
// specified conditions
// const lastIndex = arr20.findLast(ele => ele % 2 == 0)
// console.log(lastIndex);

// 12. flat() - creates and returns new array with all sub-arrays concatenated
// into it recursively upto specified depth
// const arr21 = [1,2,3,4,[5,6,[7,8,9]]]
// const flattedArr1 = arr21.flat(1)
// const flattedArr2 = arr21.flat(2)
// const flattedArr3 = arr21.flat(3)
// console.log(flattedArr1)
// console.log(flattedArr2)
// console.log(flattedArr3)
// const arr23 = [1, 2, [3, 4]];
// console.log(arr23.flat());
// not available at current node

// 13. forEach - executes provided function for each element
// manipulates the same array , doesn't return new array
// It doesn't wait for promises, works synchronously
// doesn't do anything for empty values
const array2 = [1,2,3,4,5];
array2.forEach( (ele,index,arr) => arr[index] = arr[index] * 2)
console.log(array2);

// 14. Array.from - creates array from any object that has length 
// property
const str = "abcde"
const arrayFrom = Array.from(str);
console.log(arrayFrom)

// 15. includes - returns boolean of whether specified element
// exists in array or not
const array3 = [45,67,33,24]
console.log(array3.includes(67));   // true
console.log(array3.includes(89));   // false

// 16. IndexOf - returns the first index of the element being searched
console.log(array3.indexOf(67))
console.log(array3.indexOf(25)) // -1

// 17. isArray - whether an object being passed is an array or not
const res1 = Array.isArray(array3);
const res2 = Array.isArray('asdfg')
console.log(res1, res2)

// 18. join() - returns a string from an array with specifier being
// added after each element
console.log(array3.join(''))

// 19. keys() - returns an array iterator consisting of keys of the array, in arrays case, keys are index of each element
// diff b/w iterator and array - array is an object that has the methods to access, modify the array/object but iterator has
// methods that allow only the accessing part, it does not allow changing or modifying the array elements
const arrIterator = array3.keys();
for(let ele of arrIterator){
    console.log(ele);
}

// 20. map() - returns a new array with action specified on callback function provided executed on each element
const mapArr = [50,40,30,20,10,[1,2,3],{name:'pix'}];
const mappedArr = mapArr.map((ele) => ele*2);
console.log(mappedArr);
// Gives NaN for those values which it can't perform action, unlike filter which simply doesn't return those elements

// 21. pop() - removes the last element and returns it
const popArr = [1,2,3,4,5,6,7]
const poppedEle = popArr.pop();
console.log(poppedEle)

// 22. push() - adds in the end of array
popArr.push('newNum');
console.log(popArr);

// 23. reduce - executes a reducer function for an array and returns a single final result
const newArr1 = [3,5,7,9];
const redArr = newArr1.reduce((prev,curr) => prev+ curr,0)
console.log(redArr);

const newArr2 = [];
const redArr2 = newArr2.reduce((prev,curr) => prev+curr,0)
console.log(redArr2)
// doesn't do anything for empty arrays
// if no initial value is provided, then first element is taken as initial value
// if only one element is present, and no initial value is provided, then that element is returned
// if array is empty and initial value is provided then initial value is returned
// if no initial value is provided and array is empty then it will throw an error

// 24. reverse() - reverses the original array
const origArr1 = [5,4,3,2,1];
const revArr = origArr1.reverse();
console.log(revArr)

// 25. shift - removes first element from array and returns it
const shiftRes = origArr1.shift();
console.log(shiftRes);

// 26. unshift - adds to the first index (0th index)
origArr1.unshift(45)
console.log(origArr1);

// 27. slice - returns selected part of array as new array
// takes start and end, starts from start upto but not including end
// start - default is 0, end - default is last element
const slicedArr = origArr1.slice(0,3)
console.log(slicedArr)

// 28. some - returns boolean based on whether a condition has been satisfied or not
// if even one element satisfies the condition, then it returns true
const someRes = origArr1.some((x) => x % 5 == 0)
console.log(someRes);

// 29. sort() - sorts the original array, doesn't return anything
// It sorts in string based order, due to this, numbers are also sorted in alphabetical order
// 100 comes before 3 because '1' is smaller than '3'
const origArr4 = ["ban","app","zoo","car"]
const origArr5 = [5,3,78,100,6,8]
console.log(origArr4)
console.log(origArr5)
origArr4.sort();
origArr5.sort();
console.log(origArr4);
console.log(origArr5)

// 30. splice - add/removes elements from an array - mutates original array
// takes index from where addition/removal has to be started, number of elements to be added/removed
// and if adding, then elements that have to be added
const beforeSplice = [1,2,3,4,5]
beforeSplice.splice(1,2)
console.log(beforeSplice)
beforeSplice.splice(1,3,6,7,8)
console.log(beforeSplice)
beforeSplice.splice(0,3,11,12)
console.log(beforeSplice)

// 31. toString() - returns a string seperated by commas
const strArr = ["hello","world","code"]
const newStr1 = strArr.toString();
console.log(newStr1);

// 32. valueOf() - returns the value of object - in array it returns the array itself
