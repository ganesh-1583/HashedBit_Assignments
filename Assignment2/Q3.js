// You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.


function getTax(sal) {
    let tax = 0;

    switch (true) {
        case (sal > 0 && sal <= 500000):
            tax = 0;
            break;

        case (sal <= 1000000):
            tax = sal * 0.10;
            break;

        case (sal <= 1500000):
            tax = sal * 0.20;
            break;

        case (sal > 1500000):
            tax = sal * 0.30;
            break;

        default:
            tax = "Invalid salary";
    }

    return tax;
}

console.log(getTax(6500000));