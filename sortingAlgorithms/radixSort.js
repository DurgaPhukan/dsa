function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let digit = 0;

  while (Math.floor(maxNum / Math.pow(10, digit)) > 0) {
    arr = countingSortByDigit(arr, digit);
    digit++;
  }
  return arr;
}

function countingSortByDigit(arr, digit) {
  let buckets = Array.from({ length: 10 }, () => []);

  for (let num of arr) {
    let d = Math.floor(num / Math.pow(10, digit)) % 10;
    buckets[d].push(num);
  }

  return [].concat(...buckets);
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
