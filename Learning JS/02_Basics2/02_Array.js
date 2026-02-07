const marvel = ["Iron Man", "Hulk", "Spooderman"];
const dc = ["Batman", "Superman", "Flash"]

// const allOfThem = marvel.concat(dc)
// console.log(allOfThem)

const allOfThem = [...marvel, ...dc]
console.log(allOfThem)

const anotherArray = [1, 2, 3, [5, 67], 7, [3, [7, 2]]]
const flatArray = anotherArray.flat(Infinity)
console.log(flatArray)

// Make Arrays
console.log(Array.isArray("Sami"))
console.log(Array.from("Sami"))

const num1 = 100
const num2 = 200
const num3 = 300

console.log(Array.of(num1, num2, num3))