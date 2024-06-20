document.getElementById('convertButton').addEventListener('click', function () {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const inputValue = document.getElementById('inputValue');
  const calculation = document.getElementById('calculation');

  if (celsiusInput.value !== '') {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = formatResult(fahrenheit);
    inputValue.textContent = `${celsius}°C`;
    calculation.textContent = `${celsius}°C * (9/5) + 32 = ${formatResult(fahrenheit)}°F`;
  } else if (fahrenheitInput.value !== '') {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = formatResult(celsius);
    inputValue.textContent = `${fahrenheit}°F`;
    calculation.textContent = `(${fahrenheit}°F - 32) * (5/9) = ${formatResult(celsius)}°C`;
  } else {
    alert('Please enter a temperature value.');
  }
});

document.getElementById('reverseButton').addEventListener('click', function () {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const inputValue = document.getElementById('inputValue');
  const calculation = document.getElementById('calculation');

  if (fahrenheitInput.value !== '') {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = formatResult(celsius);
    inputValue.textContent = `${fahrenheit}°F`;
    calculation.textContent = `(${fahrenheit}°F - 32) * (5/9) = ${formatResult(celsius)}°C`;
  } else if (celsiusInput.value !== '') {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = formatResult(fahrenheit);
    inputValue.textContent = `${celsius}°C`;
    calculation.textContent = `${celsius}°C * (9/5) + 32 = ${formatResult(fahrenheit)}°F`;
  } else {
    alert('Please enter a temperature value.');
  }
});

document.getElementById('temperatureForm').addEventListener('reset', function () {
  const inputValue = document.getElementById('inputValue');
  const calculation = document.getElementById('calculation');
  inputValue.textContent = '';
  calculation.textContent = '';
});

function formatResult(value) {
  return value % 1 === 0 ? value.toString() : value.toFixed(2);
}
