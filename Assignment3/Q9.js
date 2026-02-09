// Write a function to count the number of words in a paragraph.

function wordCount(str) {
    let words = str.split(" ").filter(w => w != "")
    return words.length
}

let paragraph = "JavaScript is very easy to learn and very powerful language"

console.log(wordCount(paragraph))
