function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let outputTemperature;
    let outputUnit;
  
    if (inputUnit === 'celsius') {
      outputTemperature = (inputTemperature * 9 / 5) + 32;
      outputUnit = 'Fahrenheit';
    } else {
      outputTemperature = (inputTemperature - 32) * 5 / 9;
      outputUnit = 'Celsius';
    }
  
    document.getElementById('output').innerHTML = `${inputTemperature} ${inputUnit} is ${outputTemperature.toFixed(2)} ${outputUnit}.`;
  }
  