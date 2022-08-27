
// String - collection of characters
let str1 = "abc"    // primitive
let str2 = new String('abc')    // non-primitive (object)

console.log(str1 == str2)   // true
console.log(str1 === str2)  // false

let str3 = String('abc')    // coerced into primitive type
console.log(str1 == str3)   // true
console.log(str1 === str3)  // true

// '\' is used for escaping special symbol characters

// String methods - 
// 1. length - gives length of string
console.log("abcd".length)  // returns 4

// 2. charAt - gives character at specified position
console.log("jack".charAt(2))   // returns c

// 3. concat - concats 2 string
console.log("hello".concat(" world"," !!!"))
console.log("2" + 6)
console.log("6" - 4)
console.log("6" * 4)
console.log("2" * "3")
console.log("2" + "3" + 4)
console.log("2" - "3")
console.log("2" + "3" - 4)
console.log(2 + 5 + "4")
console.log(2 + "5" + 4)
console.log(2 + "5" - 3)
console.log(2 + "5" * 3)

// 4. includes - case-senstive search, returns boolean if str1 is present in str2
console.log("hello".includes("hell"))   // true
console.log("hello".includes("helk"))   // false

// 5. endsWith() - returns boolean depending upon if a string ends with specified string
console.log("hello world!".endsWith("ld!"))

// 6. replace - used to replace a string
let str5 = "a fox eats a rabbit"
console.log(str5.replace('eats','chases'))

// 7. slice - extracts a section of a string
let str6 = "abcdefghi"
console.log(str6.slice(2,4))

// 8. split - returns an array of string by splitting it at occurences of subtring
console.log("abcdeasdfadfgtajk".split('a'))

// 9. substring - returns a substring b/w start and end index - same as slice
// but it swaps if begin index is greater than end index, unlike slice

// 10. toLowerCase - convets to lowercase
console.log("ABC6DF89".toLowerCase())

// 11. toUpperCase - converts to uppercase

// 12. toString - returns a string representation of specified string object
let obj1 = {
    name: 'xyz',
    id: 1
}
let str7 = new String('xyz')
console.log(str7.toString())
// console.log(obj1.toString())

// 13. trim - trims all whitespace from beginning and end of string
console.log("  today is a good day   ".trim())

// valueOf - returns primitive value of specified object
let str8 = new String("hello world **")
console.log(str8.valueOf())