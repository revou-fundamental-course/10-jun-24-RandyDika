document.getElementById('convertButton').addEventListener('click', function () {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const inputValue = document.getElementById('inputValue');
  const calculation = document.getElementById('calculation');
  const explanation = document.getElementById('explanation');
  const isCelsiusToFahrenheit = document.getElementById('toggleConversion').textContent.includes('Fahrenheit ke Celsius');

  if (isCelsiusToFahrenheit) {
    if (celsiusInput.value !== '') {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9) / 5 + 32;
      fahrenheitInput.value = formatResult(fahrenheit);
      inputValue.textContent = `${celsius}°C`;
      calculation.textContent = `${celsius}°C * (9/5) + 32 = ${formatResult(fahrenheit)}°F`;
      explanation.innerHTML = `
            <h2>Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)</h2>
            <p><b>Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celsius (°C) kali 9/5 tambah 32.</b></p>
            <p><b>S(°F) = (S(°C) × 9/5) + 32</b></p>
            <p><b>atau</b></p>
            <p><b>S(°F) = (S(°C) × 1.8) + 32</b></p>`;
    } else {
      alert('Please enter a temperature value in Celsius.');
    }
  } else {
    if (fahrenheitInput.value !== '') {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = ((fahrenheit - 32) * 5) / 9;
      celsiusInput.value = formatResult(celsius);
      inputValue.textContent = `${fahrenheit}°F`;
      calculation.textContent = `(${fahrenheit}°F - 32) * (5/9) = ${formatResult(celsius)}°C`;
      explanation.innerHTML = `
            <h2>Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)</h2>
            <p><b>Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32 kali 5/9.</b></p>
            <p><b>S(°C) = (S(°F) - 32) × 5/9</b></p>`;
    } else {
      alert('Please enter a temperature value in Fahrenheit.');
    }
  }
});

document.getElementById('reverseButton').addEventListener('click', function () {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const inputValue = document.getElementById('inputValue');
  const calculation = document.getElementById('calculation');
  const isCelsiusToFahrenheit = document.getElementById('toggleConversion').textContent.includes('Fahrenheit ke Celsius');

  if (isCelsiusToFahrenheit) {
    if (fahrenheitInput.value !== '') {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = ((fahrenheit - 32) * 5) / 9;
      celsiusInput.value = formatResult(celsius);
      inputValue.textContent = `${fahrenheit}°F`;
      calculation.textContent = `(${fahrenheit}°F - 32) * (5/9) = ${formatResult(celsius)}°C`;
    } else {
      alert('Please enter a temperature value in Fahrenheit.');
    }
  } else {
    if (celsiusInput.value !== '') {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9) / 5 + 32;
      fahrenheitInput.value = formatResult(fahrenheit);
      inputValue.textContent = `${celsius}°C`;
      calculation.textContent = `${celsius}°C * (9/5) + 32 = ${formatResult(fahrenheit)}°F`;
    } else {
      alert('Please enter a temperature value in Celsius.');
    }
  }
});

document.getElementById('temperatureForm').addEventListener('reset', function () {
  const inputValue = document.getElementById('inputValue');
  const calculation = document.getElementById('calculation');
  inputValue.textContent = '';
  calculation.textContent = '';
});

document.getElementById('toggleConversion').addEventListener('click', function (event) {
  event.preventDefault();
  const toggleText = document.getElementById('toggleConversion');
  const celsiusLabel = document.querySelector('label[for="celsius"]');
  const fahrenheitLabel = document.querySelector('label[for="fahrenheit"]');
  const explanation = document.getElementById('explanation');
  if (toggleText.textContent === 'Fahrenheit ke Celsius') {
    toggleText.textContent = 'Celsius ke Fahrenheit';
    celsiusLabel.textContent = 'Fahrenheit (°F):';
    fahrenheitLabel.textContent = 'Celsius (°C):';
    explanation.innerHTML = `
          <h2>Cara Konversi Dari Fahrenheit (°F) ke Celsius (°C)</h2>
          <p><b>Suhu S dalam derajat Celsius (°C) sama dengan suhu S dalam derajat Fahrenheit (°F) dikurangi 32 kali 5/9.</b></p>
          <p><b>S(°C) = (S(°F) - 32) × 5/9</b></p>`;
  } else {
    toggleText.textContent = 'Fahrenheit ke Celsius';
    celsiusLabel.textContent = 'Celsius (°C):';
    fahrenheitLabel.textContent = 'Fahrenheit (°F):';
    explanation.innerHTML = `
          <h2>Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)</h2>
          <p><b>Suhu S dalam derajat Fahrenheit (°F) sama dengan suhu S dalam derajat Celsius (°C) kali 9/5 tambah 32.</b></p>
          <p><b>S(°F) = (S(°C) × 9/5) + 32</b></p>
          <p><b>atau</b></p>
          <p><b>S(°F) = (S(°C) × 1.8) + 32</b></p>`;
  }
});

function formatResult(value) {
  return value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
}

function updateReverseButton() {
  const celsiusInput = document.getElementById('celsius');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const reverseButton = document.getElementById('reverseButton');
  if (celsiusInput.value || fahrenheitInput.value) {
    reverseButton.disabled = false;
  } else {
    reverseButton.disabled = true;
  }
}

document.getElementById('celsius').addEventListener('input', updateReverseButton);
document.getElementById('fahrenheit').addEventListener('input', updateReverseButton);
