function clickOne() {
    document.getElementById("one").click()
}

function separateNumbersAndOperators(string) {
    let operator = ["+", "-", "*", "/"];
    let numbers = [];
    let operations = [];
    let currentString = "";
    for (let i = 0; i < string.length; i++) {
        if (operator.includes(string[i])) {
            if (currentString != "") {
                numbers.push(currentString);
                currentString = "";
            }
            operations.push(string[i]);
        } else {
            currentString += string[i];
        }
    }
    numbers.push(currentString);
    return [numbers, operations]
}

function processMultiAndDiv(numbers, operations) {
    let newNumbers = [];
    let newOperations = [];
    let counter = 0;

    while (counter < operations.length) {
        if (operations[counter] == "*") {
            newNumbers.push(numbers[counter] * numbers[counter + 1]);
            counter++;
            newOperations = newOperations.concat(operations.slice(counter));
            newNumbers = newNumbers.concat(numbers.slice(counter + 1));
            return processMultiAndDiv(newNumbers, newOperations);
            break;
        } else if (operations[counter] == "/") {
            newNumbers.push(numbers[counter] / numbers[counter + 1]);
            counter++;
            newOperations = newOperations.concat(operations.slice(counter));
            newNumbers = newNumbers.concat(numbers.slice(counter + 1));
            return processMultiAndDiv(newNumbers, newOperations);
            break;
        } else {
            newNumbers.push(numbers[counter]);
            newOperations.push(operations[counter]);
            counter++;
        }
    }
    newNumbers.push(numbers[numbers.length - 1]);
    return [newNumbers, newOperations];
}

function processAddAndSub(numbers, operations) {
    let newNumbers = [];
    let newOperations = [];
    let counter = 0;

    while (counter < operations.length) {
        if (operations[counter] == "+") {
            newNumbers.push(parseInt(numbers[counter]) + parseInt(numbers[counter + 1]));
            counter++;
            newOperations = newOperations.concat(operations.slice(counter));
            newNumbers = newNumbers.concat(numbers.slice(counter + 1));
            return processAddAndSub(newNumbers, newOperations);
            break;
        } else if (operations[counter] == "-") {
            newNumbers.push(numbers[counter] - numbers[counter + 1]);
            counter++;
            newOperations = newOperations.concat(operations.slice(counter));
            newNumbers = newNumbers.concat(numbers.slice(counter + 1));
            return processAddAndSub(newNumbers, newOperations);
            break;
        } else {
            newNumbers.push(numbers[counter]);
            newOperations.push(operations[counter]);
            counter++;
        }
    }
    newNumbers.push(numbers[numbers.length - 1]);
    return [newNumbers, newOperations];
}


function calculate(string) {
    let [numbers, operations] = separateNumbersAndOperators(string);
    [numbers, operations] = processMultiAndDiv(numbers, operations);
    [numbers, operations] = processAddAndSub(numbers, operations);
    document.getElementById("prev").value=document.getElementById("displayed").value+"=";
    document.getElementById("displayed").value=[...operations, ...numbers];
}