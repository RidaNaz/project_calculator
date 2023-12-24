#! /usr/bin/env node
import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        mesasge: "Enter first number"
    }, {
        type: "list",
        name: "operator",
        messae: "choose any operator",
        choices: ["+", "-", "*", "/"]
    }, {
        type: "number",
        name: "secondNumber",
        message: "Enter second number"
    }
]);
function sum() {
    console.log(`${calculator.firstNumber} + ${calculator.secondNumber} = ${calculator.firstNumber + calculator.secondNumber}`);
}
function sub() {
    console.log(`${calculator.firstNumber} - ${calculator.secondNumber} = ${calculator.firstNumber - calculator.secondNumber}`);
}
function mul() {
    console.log(`${calculator.firstNumber} * ${calculator.secondNumber} = ${calculator.firstNumber * calculator.secondNumber}`);
}
function div() {
    console.log(`${calculator.firstNumber} / ${calculator.secondNumber} = ${calculator.firstNumber / calculator.secondNumber}`);
}
if (calculator.operator == "+") {
    sum();
}
else if (calculator.operator == "-") {
    sub();
}
else if (calculator.operator == "*") {
    mul();
}
else if (calculator.operator == "/") {
    div();
}
else {
    "choose appropriate operator";
}
console.log(calculator);
