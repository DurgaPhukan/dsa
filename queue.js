class Queue {
  constructor() {
    this.items = [];
    this.start = 0;
    this.end = 0;
  }

  shift() {
    this.start += 1;
    return this.items[this.start - 1];
  }

  unshift(val) {
    for (let i = this.end; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }
    this.end++;
    this.items[this.start] = val;
  }

  push(val) {
    this.items[this.end] = val;
    this.end += 1;
  }

  pop() {
    this.end -= 1;
    return this.items[this.end];
  }

  peek() {
    return this.items[this.end - 1];
  }

  peekFirst() {
    return this.items[this.start];
  }

  print() {
    for (let i = this.start; i <= this.end - 1; i++) {
      console.log(this.items[i]);
    }
  }

  getSize() {
    if (this.end >= this.start) {
      return this.end - this.start;
    } else {
      console.log("Index error");
    }
  }
}

const queue = new Queue();
queue.push(11);
queue.push(12);
queue.push(13);
// queue.print();
// console.log(queue);
// queue.pop();
// queue.print();
queue.unshift(10);
// queue.print();

queue.shift();
queue.print();

console.log(queue);
console.log(queue.peek());
console.log(queue.peekFirst());
console.log(queue.getSize());
