// let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA"
let arr = string.split("")
arr.splice(3, 0, "O", "N", "E", "S", "I")
let result = arr.join("")
console.log(result)
