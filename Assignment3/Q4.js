// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let str = "javascript is very easy language"

let vowels = 0
let consonants = 0

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase()
    if (ch >= 'a' && ch <= 'z') {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowels++
        } else {
            consonants++
        }
    }
}

console.log(vowels)
console.log(consonants)
