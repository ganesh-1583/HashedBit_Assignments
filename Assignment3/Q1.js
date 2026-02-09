// Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let states = ["Andhra Pradesh","Bihar","Assam","Odisha","Uttar Pradesh","Maharashtra","Tamil Nadu","Kerala","Rajasthan","Punjab"]

let result = states.filter(state => {
    let firstChar = state[0].toLowerCase()
    return firstChar != 'a' && firstChar != 'e' && firstChar != 'i' && firstChar != 'o' && firstChar != 'u'
})

console.log(result)
