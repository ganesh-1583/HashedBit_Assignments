//Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function singleDigitSum(num) {
    while (num > 9) {
        let sum = 0
        let temp = num

        while (temp > 0) {
            sum += temp % 10
            temp = Math.floor(temp / 10)
        }

        num = sum
    }
    return num
}

console.log(singleDigitSum(456))
