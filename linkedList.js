class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNodeAtBegining(data) {
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  addNodeAtAndIndex(index, data) {
    let node = new Node(data);

    if (this.head === null) {
      console.log("The Linked list does not contain the required index");
    } else {
      let current = this.head;
      let currInx = 1;
      while (current.next !== null && currInx + 1 < index) {
        current = current.next;
        currInx++;
      }
      node.next = current.next;
      current.next = node;
    }
  }

  addNodeAtEnd(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  removeNodeFromBegining() {
    if (this.head === null) {
      console.log("Linked List is Already Empty");
    } else {
      this.head = this.head.next;
    }
  }

  removeNodeFromIndex(index) {
    if (this.head === null) {
      console.log("Linked list is does not contain the node");
    } else {
      let current = this.head;
      let currIdx = 1;
      while (current.next !== null && currIdx + 1 < index) {
        current = current.next;
        currIdx++;
      }
      current.next = current.next.next;
    }
  }

  removeNodeFromEnd() {
    if (this.head === null) {
      console.log("The linked list is already empty");
    } else {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  updateNodeAtIndex(index, data) {
    let current = this.head;
    let currIdx = 1;
    if (currIdx == index) {
      current.data = data;
    } else {
      while (current !== null && currIdx < index) {
        current = current.next;
        currIdx++;
      }

      if (current != null) {
        current.data = data;
      } else {
        console.log("The linked list does not contain this index");
      }
    }
  }

  getSize() {
    let current = this.head;
    let size = 0;
    if (current === null) {
      return 0;
    } else {
      while (current != null) {
        current = current.next;
        size++;
      }
      return size;
    }
  }

  printAllNode() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverseLinkedList() {
    if (this.head === null) {
      console.log("Empty Linked List");
    }
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  findMiddleOfLinkedList() {
    if (this.head === null) {
      console.log("Linked List Empty");
      return;
    }
    let endPtr = this.head;
    let midPtr = this.head;
    while (endPtr !== null && endPtr.next !== null) {
      endPtr = endPtr.next.next;
      midPtr = midPtr.next;
    }
    console.log("The mid data is : ", midPtr.data);
    return midPtr.data;
  }
}

let linkedList = new LinkedList();
linkedList.addNodeAtBegining(4);
linkedList.addNodeAtBegining(3);
linkedList.addNodeAtBegining(2);
linkedList.addNodeAtBegining(1);
// linkedList.printAllNode();
linkedList.addNodeAtEnd(5);
// linkedList.printAllNode();
linkedList.addNodeAtAndIndex(3, 7);
// linkedList.printAllNode();
// linkedList.removeNodeFromBegining();
// linkedList.printAllNode();
linkedList.removeNodeFromIndex(1);
// linkedList.printAllNode();
// linkedList.removeNodeFromEnd();
// linkedList.printAllNode();
// linkedList.updateNodeAtIndex(6, 9);
linkedList.printAllNode();
// console.log(linkedList.getSize());
