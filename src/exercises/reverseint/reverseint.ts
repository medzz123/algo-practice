// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

export const reverseIntOne = (n: number) => {
  const stringified = String(n).replace('-', '');
  let result = '';

  for (let i = 0; i < stringified.length; i++) {
    result = stringified[i] + result;
  }

  return parseInt(result) * Math.sign(n);
};

export const reverseIntTwo = (n: number) => {
  return parseInt(String(n).replace('-', '').split('').reverse().join('')) * Math.sign(n);
};

export const reverseInt = reverseIntTwo;
