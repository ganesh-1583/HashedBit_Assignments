// Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(6*3) = 24.

function getRes(n1, n2) {
    let sum = 0;

    while (n1 > 0 || n2 > 0) {
        let d1 = n1 % 10;
        let d2 = n2 % 10;

        sum += d1 * d2;

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return sum;
}

console.log(getRes(6, 34)); 