//The variable that stores the user input
let originalUserInput = "";

//stores the original user input
document.getElementById("numberInput").addEventListener("input", function () {
    originalUserInput = this.value.trim()
    console.log(originalUserInput)
})

//ascending order button
document.getElementById("ascendingOrderButton").addEventListener("click", function () {
    const result = document.getElementById("resultOutput");

    let numbersArray = originalUserInput.split(', ').map(Number).filter(n => !isNaN(n));

    numbersArray.sort((a, b) => a - b);

    const sortedNumbers = numbersArray.join(', ');

    result.value = sortedNumbers;
})

//descending order button
document.getElementById("descendingOrderButton").addEventListener("click", function () {
    const result = document.getElementById("resultOutput");

    let numbersArray = originalUserInput.split(', ').map(Number).filter(n => !isNaN(n));

    numbersArray.sort((a, b) => b - a);

    const sortedNumbers = numbersArray.join(', ');

    result.value = sortedNumbers;
})

//get total button
document.getElementById("getTotalButton").addEventListener("click", function () {
    const result = document.getElementById("resultOutput");

    let numbersArray = originalUserInput.split(', ').map(Number).filter(n => !isNaN(n));

    const totalNumber = numbersArray.reduce((a, b) => a + b, 0);

    result.value = totalNumber;
})

//get maximum button
document.getElementById("getMaximumNumberButton").addEventListener("click", function () {
    const result = document.getElementById("resultOutput");

    let numbersArray = originalUserInput.split(', ').map(Number).filter(n => !isNaN(n));

    const maximumNumber = numbersArray.reduce((a, b) => (b > a) ? b : a);

    result.value = maximumNumber;
})

//get minimum button
document.getElementById("getMinimumNumberButton").addEventListener("click", function () {
    const result = document.getElementById("resultOutput");

    let numbersArray = originalUserInput.split(', ').map(Number).filter(n => !isNaN(n));

    const minimumNumber = numbersArray.reduce((a, b) => (b < a) ? b : a);

    result.value = minimumNumber;
})

//get average button
document.getElementById("getAverageButton").addEventListener("click", function ()  {
    const result = document.getElementById("resultOutput");

    let numbersArray = originalUserInput.split(', ').map(Number).filter(n => !isNaN(n));

    const totalNumbers = numbersArray.reduce((a, b) => a + b, 0);

    const averageNumber = totalNumbers / numbersArray.length

    result.value = averageNumber;
})

//dark background button
document.getElementById("darkBackground").addEventListener("click", function () {
    const body = document.getElementById("body");

    body.style.backgroundColor = 'black';
    body.style.color = 'white';
})

//light background button
document.getElementById("lightBackground").addEventListener("click", function () {
    const body = document.getElementById("body");

    body.style.backgroundColor = 'white';
    body.style.color = 'black';
})

//clear button
document.getElementById("clearButton").addEventListener("click", function () {
    const inputNumber = document.getElementById("numberInput");
    const result = document.getElementById("resultOutput")

    inputNumber.value = "";
    result.value = "";
    originalUserInput = "";
})


