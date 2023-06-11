document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var temperatureInput = document.getElementById('temperature-input');
    var conversionType = document.getElementById('conversion-type').value;
    var resultElement = document.getElementById('result');
  
    var temperature = parseFloat(temperatureInput.value);
    var convertedTemperature;
  
    if (conversionType === 'celsius') {
      convertedTemperature = (temperature * 9/5) + 32;
      resultElement.innerHTML = temperature + '°C = ' + convertedTemperature + '°F';
    } else if (conversionType === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5/9;
      resultElement.innerHTML = temperature + '°F = ' + convertedTemperature + '°C';
    }
  });