// variable types

let age2: number;
let isActive2: boolean;
let message2: string;

// Assign value accordingly

age2 = 88;
isActive2 = false;
message2 = 'hello world';

// function types

function generateAge(): number {
    return 67;
}

function changeText2(): void {
    document.getElementById('demo').textContent = 'andrei';
}

// Combine variable and function

age2 = generateAge();

// Types for parameters

function isValid(isActive: boolean): void {
    const isTruthy: boolean = isActive;
}
isValid(false);

