// ===============================
// 1. Kth Largest Element
// ===============================

function kthLargest(nums, k) {
  const heap = [];

  const heapifyUp = (i) => {
    while (i > 0 && heap[Math.floor((i - 1) / 2)] > heap[i]) {
      [heap[i], heap[Math.floor((i - 1) / 2)]] =
        [heap[Math.floor((i - 1) / 2)], heap[i]];
      i = Math.floor((i - 1) / 2);
    }
  };

  const heapifyDown = (i) => {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      heapifyDown(smallest);
    }
  };

  for (let num of nums) {
    heap.push(num);
    heapifyUp(heap.length - 1);

    if (heap.length > k) {
      heap[0] = heap.pop();
      heapifyDown(0);
    }
  }

  return heap[0];
}

// ===============================
// 2. Merge K Sorted Arrays
// ===============================

function mergeKArrays(arrays) {
  const heap = [];
  const result = [];

  const push = (node) => {
    heap.push(node);
    heap.sort((a, b) => a.value - b.value);
  };

  arrays.forEach((arr, i) => {
    if (arr.length > 0) {
      push({ value: arr[0], arrIndex: i, eleIndex: 0 });
    }
  });

  while (heap.length) {
    const { value, arrIndex, eleIndex } = heap.shift();
    result.push(value);

    if (eleIndex + 1 < arrays[arrIndex].length) {
      push({
        value: arrays[arrIndex][eleIndex + 1],
        arrIndex,
        eleIndex: eleIndex + 1
      });
    }
  }

  return result;
}

// ===============================
// 3. Top K Frequent Elements
// ===============================

function topKFrequent(nums, k) {
  const freq = new Map();

  for (let n of nums) {
    freq.set(n, (freq.get(n) || 0) + 1);
  }

  const heap = [];

  for (let [num, count] of freq) {
    heap.push([num, count]);
    heap.sort((a, b) => a[1] - b[1]);

    if (heap.length > k) heap.shift();
  }

  return heap.map(item => item[0]);
}

// ===============================
// 4. Connect Ropes
// ===============================

function connectRopes(ropes) {
  const heap = [...ropes];
  heap.sort((a, b) => a - b);

  let cost = 0;

  while (heap.length > 1) {
    const first = heap.shift();
    const second = heap.shift();
    const sum = first + second;
    cost += sum;
    heap.push(sum);
    heap.sort((a, b) => a - b);
  }

  return cost;
}

// ===============================
// TESTING
// ===============================

console.log(kthLargest([3,2,1,5,6,4], 2)); // 5
console.log(mergeKArrays([[1,4,5],[1,3,4],[2,6]]));
console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(connectRopes([4,3,2,6])); // 29
