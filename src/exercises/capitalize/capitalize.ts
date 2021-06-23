// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

export const capitalizeOne = (str: string) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const prev = str[i - 1];

    if (prev === undefined || prev === ' ') {
      res = res + current.toUpperCase();
    } else {
      res = res + current;
    }
  }

  return res;
};

export const capitalizeTwo = (str: string) => {
  const words = str.split(' ');

  words.forEach((w, i) => {
    words[i] = w.charAt(0).toUpperCase() + words[i].slice(1);
  });

  return words.join(' ');
};

export const capitalize = capitalizeOne;
