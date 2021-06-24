// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

export const vowelsOne = (str: string) => {
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    if (['a', 'e', 'i', 'o', 'u'].includes(str[i].toLowerCase())) {
      len = len + 1;
    }
  }

  return len;
};

export const vowels = vowelsOne;
