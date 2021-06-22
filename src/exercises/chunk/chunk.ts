// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

export const chunkOne = (array, size) => {
  const result = [[]];

  array.forEach((element) => {
    const innerLast = result[result.length - 1];

    if (innerLast.length < size) {
      result[result.length - 1].push(element);
    } else {
      result.push([element]);
    }
  });

  return result;
};

export const chunk = chunkOne;
