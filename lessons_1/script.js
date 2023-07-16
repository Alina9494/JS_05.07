firstNumber = prompt("Please type your first Number");
firstNumber = parseFloat(firstNumber);
firstNumber = +firstNumber.toFixed(2);


secondNumber = prompt("Please type your second Number");
secondNumber = parseFloat(secondNumber);
secondNumber = +secondNumber.toFixed(2);

min = Math.ceil(firstNumber);
max = Math.floor(secondNumber);

randomValue = Math.floor(Math.random() * (max - min + 1) + min);

alert("Random number is: " + randomValue);

thirdNumber = prompt("Please type your third Number");
thirdNumber = parseFloat(thirdNumber);
thirdNumber = +thirdNumber.toFixed(2);

document.write(`
    <table>
        <tr>
            <th>Operation</th>
            <th>Expression</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Sum</td>
            <td>${randomValue} + ${thirdNumber}</td>
            <td>${(randomValue + thirdNumber).toFixed(2)}</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>${randomValue} - ${thirdNumber}</td>
            <td>${(randomValue - thirdNumber).toFixed(2)}</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>${randomValue} * ${thirdNumber}</td>
            <td>${(randomValue * thirdNumber).toFixed(2)}</td>
        </tr>
        <tr>
            <td>Devision</td>
            <td>${randomValue} / ${thirdNumber}</td>
            <td>${(randomValue / thirdNumber).toFixed(2)}</td>
        </tr>
    </table>
`);



