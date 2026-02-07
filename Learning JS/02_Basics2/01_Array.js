const arr = [1, 2, 3, true, "Sami"]
const arr2 = new Array(1, 2, 4)

// console.log(arr)
// arr.push(6)

// arr.unshift("Hello") // Insert at 0
// arr.shift() // Pop from 0

// const newArr = arr.join() // Join to String

// console.log(arr)
// console.log(newArr)

// Slice & Splice
console.log("A ", arr);

const slicedArr = arr.slice(1, 3) // Saves cutted part from arr

console.log(slicedArr)
console.log("B ", arr);

const splicedArr = arr.splice(1, 3) // Actually cuts the array (Complete range)

console.log(splicedArr)
console.log("C ", arr);