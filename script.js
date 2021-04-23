'use strict';

// 1.
// Array with 50 numbers
const numbersArr = [];

for (let x = 1; x < 51; x++) {
  numbersArr.push(x);
}
console.log(numbersArr);

// Divisible by 2

const divBy2 = numbersArr.filter(function (num) {
  return num % 2 === 0;
});

console.log(divBy2);

// Total

const total = divBy2.reduce((acc, num) => acc + num, 0);
console.log(total);

// 2.

const buttonRandom = document.querySelector('.btn-random');

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

buttonRandom.addEventListener('click', function () {
  const randomName = [];

  for (let i = 0; i < 7; i++) {
    randomName.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  alert(randomName.join(''));
});

// 3.

// const divBy2 = [2,4,6...]

const tableContainer = document.querySelector('.table-numbers');
const row = document.querySelector('.row');

const displayNumbers = function (num) {
  row.innerHTML = '';

  num.forEach(function (num, i) {
    const html = `
    <tr class="row">
    <td>${i + 1}</td>
    <td>${num}</td>
    </tr>`;

    tableContainer.insertAdjacentHTML('beforeend', html);
  });
};

displayNumbers(divBy2);
