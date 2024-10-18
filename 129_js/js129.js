function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b);
  }
  
  const array = [1, 3, 5, 7, 9, 11];
  const result = filterRange(array, 4, 8);
  console.log(result); // [5, 7]
  