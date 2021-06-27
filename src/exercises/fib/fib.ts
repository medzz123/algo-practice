// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

export const fibOne = (n: number, cache = [0, 1, 1]) => {
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = fibOne(n - 1, cache) + fibOne(n - 2, cache);

  return cache[n];
};

export const fib = fibOne;
