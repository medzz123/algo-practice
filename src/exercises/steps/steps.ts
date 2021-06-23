// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

export const stepsOne = (n: number, row = 0, stair = '') => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return stepsOne(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  stepsOne(n, row, stair);
};

export const stepsTwo = (n: number) => {
  for (let i = 0; i < n; i++) {
    let log = '';
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        log += '#';
      } else {
        log += ' ';
      }
    }

    console.log(log);
  }
};

export const stepsThree = (n: number) => {
  for (let i = 0; i < n; i++) {
    const log = new Array(n).fill(' ');
    for (let j = 0; j <= i; j++) {
      log[j] = '#';
    }

    console.log(log.join(''));
  }
};

export const stepsFour = (n: number) => {
  for (let i = 1; i <= n; i++) {
    const empty = new Array(n - i).fill(' ').join('');
    const hash = new Array(i).fill('#').join('');

    console.log(hash + empty);
  }
};

export const steps = stepsFour;
