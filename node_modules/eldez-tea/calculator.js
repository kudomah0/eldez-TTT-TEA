const readline = require('readline-sync');

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero!";
    } else {
        return x / y;
    }
}

console.log("Select operation:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

while (true) {
    const choice = parseInt(readline.question("Enter choice (1/2/3/4): "));

    if (choice >= 1 && choice <= 4) {
        const num1 = parseFloat(readline.question("Enter first number: "));
        const num2 = parseFloat(readline.question("Enter second number: "));

        switch (choice) {
            case 1:
                console.log("Result:", add(num1, num2));
                break;
            case 2:
                console.log("Result:", subtract(num1, num2));
                break;
            case 3:
                console.log("Result:", multiply(num1, num2));
                break;
            case 4:
                console.log("Result:", divide(num1, num2));
                break;
        }
    } else {
        console.log("Invalid input");
    }

    const nextCalculation = readline.question("Do you want to perform another calculation? (yes/no): ");
    if (nextCalculation.toLowerCase() !== 'yes') {
        break;
    }
}
