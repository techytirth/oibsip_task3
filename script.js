document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const inputTemperature = document.querySelector(".temperature input");
    const resultElement = document.getElementById("result");
    const unitFromSelect = document.getElementById("unitFrom");
    const unitToSelect = document.getElementById("unitTo");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(inputTemperature.value);

        if (isNaN(temperature)) {
            resultElement.textContent = "Please enter a valid temperature.";
            return;
        }

        const unitFrom = unitFromSelect.value;
        const unitTo = unitToSelect.value;

        let convertedTemperature;

        if (unitFrom === "celsius" && unitTo === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
        } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
            convertedTemperature = (temperature - 32) * 5 / 9;
        } else {
            convertedTemperature = temperature; // No conversion needed
        }

        resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitTo}`;


    });
});
