firstNumber = prompt("Please type your first Number");
console.log(firstNumber);

parseFirstNumber = parseFloat(firstNumber);
console.log(parseFirstNumber);

parseFirstNumber = +parseFirstNumber.toFixed(2);
console.log(parseFirstNumber);


secondNumber = prompt("Please type your second Number");
console.log(secondNumber);

parseSecondNumber = parseFloat(secondNumber);
console.log(parseSecondNumber);

parseSecondNumber = +parseSecondNumber.toFixed(2);
console.log(parseSecondNumber);

min = Math.ceil(parseFirstNumber);
max = Math.floor(parseSecondNumber);

randomValue = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomValue);

alert("Random number is: " + randomValue);

thirdNumber = prompt("Please type your third Number");
parsethirdNumber = parseFloat(thirdNumber);
parsethirdNumber = +parsethirdNumber.toFixed(2);
console.log(parsethirdNumber);

document.write(`
    <table>
        <tr>
            <th>Operation</th>
            <th>Expression</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Sum</td>
            <td>${randomValue} + ${parsethirdNumber}</td>
            <td>${(randomValue + parsethirdNumber).toFixed(2)}</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>${randomValue} - ${parsethirdNumber}</td>
            <td>${(randomValue - parsethirdNumber).toFixed(2)}</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>${randomValue} * ${parsethirdNumber}</td>
            <td>${(randomValue * parsethirdNumber).toFixed(2)}</td>
        </tr>
        <tr>
            <td>Devision</td>
            <td>${randomValue} / ${parsethirdNumber}</td>
            <td>${(randomValue / parsethirdNumber).toFixed(2)}</td>
        </tr>
    </table>
`);



