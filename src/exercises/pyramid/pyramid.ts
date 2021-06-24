// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export const pyramidOne = (n, row = 0, level = '') => {
  if (row === n) {
    return n;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramidOne(n, row + 1);
  }

  const mid = Math.floor((2 * n - 1) / 2);

  let add = ' ';

  if (mid - row <= level.length && mid + row >= level.length) {
    add = '#';
  }

  pyramidOne(n, row, level + add);
};

export const pyramidTwo = (n: number) => {
  const total = 2 * n - 1;

  for (let i = 1; i <= n; i++) {
    const hash = '#'.repeat(2 * i - 1);
    const side = ' '.repeat((total - (2 * i - 1)) / 2);

    console.log(side + hash + side);
  }
};

export const pyramid = pyramidTwo;
