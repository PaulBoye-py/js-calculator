alert("Welcome to my JS Calculator. This calculator performs basic maths functions on any 2 numbers.")

// let chooseOperation = prompt(`Please type in the math operation you would like to complete:\n+ for addition\n- for subtraction\n* for multiplication\n/ for division\n% for Modulus`) 


// alert(`The selected operation is ${chooseOperation}`)
calculate()
recalculate()
alert("Thank you for using my JS calculator")

function calculate() {
    let chooseOperation = prompt(`Please type in the math operation you would like to complete:\n+ for addition\n- for subtraction\n* for multiplication\n/ for division\n% for Modulus`)
    alert(`The selected operation is ${chooseOperation}`)
    let num1 = prompt("Please input your first number: ")
    let num2 = prompt("Please input your second number: ")

    let result;
    if (chooseOperation == "+") {
        let result = parseFloat(num1) + parseFloat(num2)
        alert(`The result of ${num1} + ${num2} is ${result}`)
}   else if(chooseOperation == "-") {
        let result = parseFloat(num1) - parseFloat(num2)
        alert(`The result of ${num1} - ${num2} is ${result}`)
}   else if(chooseOperation == "/") {
        let result = parseFloat(num1) / parseFloat(num2)
        alert(`The result of ${num1} / ${num2} is ${result}`)
}   else if(chooseOperation == "*") {
        let result = parseFloat(num1) * parseFloat(num2)
        alert(`The result of ${num1} * ${num2} is ${result}`)
}   else if(chooseOperation == "%") {
        let result = parseFloat(num1) % parseFloat(num2)
        alert(`The result of ${num1} % ${num2} is ${result}`)
}   else {
        prompt("You selected an invalid operation. Please run the program again.")
}
}


function recalculate() {
    let recalc = prompt("Do you want to calculate again?\nPlease type\nY for YES\nN for NO.\nNote that input is case sensitive")
    if (recalc == "Y") {
        calculate()
    } else if (recalc == "N") {
        alert("You have chosen to not run another calculation.")
    }
}
