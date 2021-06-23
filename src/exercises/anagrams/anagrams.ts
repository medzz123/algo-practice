// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(word: string) {
  return word.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

export const anagramsOne = (stringA: string, stringB: string) => {
  return cleanString(stringA) === cleanString(stringB);
};

export const anagramsTwo = (stringA: string, stringB: string) => {
  const mapA = {};
  const mapB = {};

  const cleanA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const cleanB = stringB.replace(/[^\w]/g, '').toLowerCase();

  for (const char of cleanA) {
    mapA[char] = mapA[char] + 1 || 1;
  }

  for (const char of cleanB) {
    mapB[char] = mapB[char] + 1 || 1;
  }

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (const char in mapA) {
    if (!mapB[char]) {
      return false;
    }

    if (mapB[char] !== mapA[char]) {
      return false;
    }
  }

  return true;
};

export const anagrams = anagramsTwo;
