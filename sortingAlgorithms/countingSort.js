function countingSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);

  for (let num of arr) {
    count[num]++;
  }

  let sorted = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sorted.push(i);
      count[i]--;
    }
  }
  return sorted;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
