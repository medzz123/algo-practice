// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

export const palindromeOne = (str: string) => {
  return str.split('').reverse().join('') === str;
};

export const palindromeTwo = (str: string) => {
  const wordLenght = str.length;
  for (let i = 0; i < Math.floor(wordLenght / 2); i++) {
    if (str[i] !== str[wordLenght - 1 - i]) {
      return false;
    }
  }

  return true;
};

export const palindrome = palindromeTwo;
