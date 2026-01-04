function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;

  let buckets = Array.from({ length: bucketCount }, () => []);

  for (let num of arr) {
    buckets[Math.floor((num - min) / bucketSize)].push(num);
  }

  return buckets.flatMap(bucket => insertionSort(bucket));
}

console.log(bucketSort([29, 25, 3, 49, 9, 37, 21, 43]));
