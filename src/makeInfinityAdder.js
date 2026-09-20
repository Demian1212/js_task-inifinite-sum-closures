'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(num) {
    // Якщо функцію викликано без аргументів ()
    if (num === undefined) {
      const result = sum;

      sum = 0; // Скидаємо накопичене значення

      return result; // Повертаємо підсумок (число)
    }

    // Якщо передано число — додаємо його
    sum += num;

    return adder;
  };
}

module.exports = makeInfinityAdder;
