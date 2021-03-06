// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

export const fizzBuzzOne = (n: number) => {
  let counter = 1;

  while (counter <= n) {
    if (counter % 5 === 0 && counter % 3 === 0) {
      console.log('fizzbuzz');
    } else if (counter % 5 === 0) {
      console.log('buzz');
    } else if (counter % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(counter);
    }

    counter = counter + 1;
  }
};

export const fizzBuzzTwo = (n: number) => {
  let counter = 1;

  while (counter <= n) {
    let log: string | number = '';

    if (counter % 3 === 0) {
      log = 'fizz';
    }

    if (counter % 5 === 0) {
      log = log + 'buzz';
    }

    if (counter % 5 !== 0 && counter % 3 !== 0) {
      log = counter;
    }

    console.log(log);

    counter = counter + 1;
  }
};

export const fizzBuzz = fizzBuzzTwo;
