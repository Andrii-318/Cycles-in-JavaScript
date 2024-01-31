function sequenceHalf() {
  let sequence = "";
  for (let i = 20; i <= 30; i += 0.5) {
    sequence += i + " ";
  }
  alert(sequence);
}

function currencyConversion() {
  const rate = 27;
  let conversion = "";
  for (let dollars = 10; dollars <= 100; dollars += 10) {
    conversion += `${dollars} USD = ${dollars * rate} UAH\n`;
  }
  alert(conversion);
}

function squareNumbers() {
  const n = document.getElementById("numberN").value;
  let squares = "";
  for (let i = 1; i * i <= n; i++) {
    squares += `${i} `;
  }
  alert(squares);
}

function isPrime() {
  const num = document.getElementById("primeNumber").value;
  let isPrime = num > 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  alert(isPrime ? `${num} є простим числом.` : `${num} не є простим числом.`);
}

function isPowerOfThree() {
  const num = document.getElementById("powerOfThree").value;
  let result = num > 0 && (Math.log(num) / Math.log(3)) % 1 === 0;
  alert(
    result
      ? `Число ${num} можна отримати зведенням числа 3 у ступінь.`
      : `Число ${num} не можна отримати зведенням числа 3 у ступінь.`
  );
}
