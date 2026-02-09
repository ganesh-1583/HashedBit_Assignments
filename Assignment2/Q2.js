//Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(2,4,'+')); 
console.log(calculate(2,4,'*')); 
