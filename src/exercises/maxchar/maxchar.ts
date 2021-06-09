// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export const maxCharOne = (str: string) => {
  const mapc = {};

  for (let i = 0; i < str.length; i++) {
    mapc[str[i]] = mapc[str[i]] + 1 || 1;
  }

  let max = str[0];

  for (const key in mapc) {
    if (mapc[key] > mapc[max]) {
      max = key;
    }
  }

  return max;
};

export const maxChar = maxCharOne;
