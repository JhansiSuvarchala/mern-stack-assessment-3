// Task 1: Simple Calculator
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Cannot divide by zero';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operator';
        }
    }

    document.getElementById('calcResult').textContent = 'Result: ' + result;
}

// Task 2: Array Operations
function sumEven() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number);
    let sum = 0;

    if (array.some(isNaN)) {
        document.getElementById('sumResult').textContent = 'Please enter a valid array of numbers';
        return;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }

    document.getElementById('sumResult').textContent = 'Sum of even numbers: ' + sum;
}

// Task 3: Object Manipulation
let Person = {
    firstName: '',
    lastName: '',
    age: 0,
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    incrementAge: function() {
        this.age++;
    }
};

function initializePerson() {
    Person.firstName = document.getElementById('firstName').value;
    Person.lastName = document.getElementById('lastName').value;
    Person.age = parseInt(document.getElementById('age').value, 10);

    if (isNaN(Person.age)) {
        document.getElementById('personResult').textContent = 'Please enter a valid age';
    } else {
        document.getElementById('personResult').textContent = 'Person initialized. Age: ' + Person.age;
    }
}

function showFullName() {
    document.getElementById('personResult').textContent = 'Full Name: ' + Person.getFullName();
}

function incrementAge() {
    if (Person.age === 0) {
        document.getElementById('personResult').textContent = 'Please initialize the person first';
    } else {
        Person.incrementAge();
        document.getElementById('personResult').textContent = 'Age: ' + Person.age;
    }
}
