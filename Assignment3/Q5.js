// Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function makeitcorrect(string, wrong, correct) {
    return string.replace(wrong, correct)
}

let str = "I love Javscript"
let result = makeitcorrect(str, "Javscript", "JavaScript")

console.log(result)
