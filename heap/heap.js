// ==========================
// MIN HEAP IMPLEMENTATION
// ==========================

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // Get left child index
  left(i) {
    return 2 * i + 1;
  }

  // Get right child index
  right(i) {
    return 2 * i + 2;
  }

  // Insert element
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (
      index > 0 &&
      this.heap[this.parent(index)] > this.heap[index]
    ) {
      [this.heap[index], this.heap[this.parent(index)]] =
        [this.heap[this.parent(index)], this.heap[index]];
      index = this.parent(index);
    }
  }

  // Remove minimum element
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(index) {
    let smallest = index;
    let left = this.left(index);
    let right = this.right(index);

    if (
      left < this.heap.length &&
      this.heap[left] < this.heap[smallest]
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right] < this.heap[smallest]
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0];
  }
}

// ==========================
// MAX HEAP IMPLEMENTATION
// ==========================

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (
      index > 0 &&
      this.heap[this.parent(index)] < this.heap[index]
    ) {
      [this.heap[index], this.heap[this.parent(index)]] =
        [this.heap[this.parent(index)], this.heap[index]];
      index = this.parent(index);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return max;
  }

  heapifyDown(index) {
    let largest = index;
    let left = this.left(index);
    let right = this.right(index);

    if (
      left < this.heap.length &&
      this.heap[left] > this.heap[largest]
    ) {
      largest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right] > this.heap[largest]
    ) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] =
        [this.heap[largest], this.heap[index]];
      this.heapifyDown(largest);
    }
  }

  peek() {
    return this.heap[0];
  }
}

// ==========================
// EXAMPLE USAGE
// ==========================

const minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

console.log(minHeap.heap);     // [1,3,8,5]
console.log(minHeap.extractMin()); // 1
console.log(minHeap.heap);     // [3,5,8]

const maxHeap = new MaxHeap();
maxHeap.insert(5);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(1);

console.log(maxHeap.heap);     // [8,3,5,1]
console.log(maxHeap.extractMax()); // 8
console.log(maxHeap.heap);     // [5,3,1]
