class Stack {
  constructor() {
    this.current = 0;
    this.items = [];
  }

  addToStack(val) {
    this.items[this.current] = val;
    this.current++;
  }

  removeFromStack() {
    if (this.current !== 0) {
      delete this.items[this.current - 1];
      this.current--;
    } else {
      console.log("The stack is empty");
      return null;
    }
  }

  getSize() {
    return this.current + 1;
  }

  peek() {
    return this.items[this.current - 1];
  }

  printStack() {
    console.log(this.items);
  }
}

const stack = new Stack();

stack.removeFromStack();
stack.addToStack(11);
stack.addToStack(12);
stack.addToStack(13);
stack.addToStack(14);
stack.addToStack(15);
stack.printStack();
stack.removeFromStack();
stack.printStack();
console.log(stack.getSize());
console.log(stack.peek());

console.log(stack);
