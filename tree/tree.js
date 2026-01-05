// 🌳 TREE DATA STRUCTURE – COMPLETE JAVASCRIPT IMPLEMENTATION

// ===============================
// 1️⃣ Tree Node Definition
// ===============================
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// ===============================
// 2️⃣ Binary Search Tree (BST)
// ===============================
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a value
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Search a value
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      value < current.value ? (current = current.left) : (current = current.right);
    }

    return false;
  }

  // ===============================
  // 3️⃣ Tree Traversals
  // ===============================

  inorder(node = this.root, result = []) {
    if (!node) return result;
    this.inorder(node.left, result);
    result.push(node.value);
    this.inorder(node.right, result);
    return result;
  }

  preorder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.value);
    this.preorder(node.left, result);
    this.preorder(node.right, result);
    return result;
  }

  postorder(node = this.root, result = []) {
    if (!node) return result;
    this.postorder(node.left, result);
    this.postorder(node.right, result);
    result.push(node.value);
    return result;
  }

  levelOrder() {
    const result = [];
    const queue = [];

    if (!this.root) return result;

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  // ===============================
  // 4️⃣ Tree Height
  // ===============================
  height(node = this.root) {
    if (!node) return 0;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // ===============================
  // 5️⃣ Count Nodes
  // ===============================
  countNodes(node = this.root) {
    if (!node) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  // ===============================
  // 6️⃣ Sum of Nodes
  // ===============================
  sumNodes(node = this.root) {
    if (!node) return 0;
    return node.value + this.sumNodes(node.left) + this.sumNodes(node.right);
  }

  // ===============================
  // 7️⃣ Find Maximum Value
  // ===============================
  findMax(node = this.root) {
    if (!node) return -Infinity;
    return Math.max(node.value, this.findMax(node.left), this.findMax(node.right));
  }

  // ===============================
  // 8️⃣ Mirror Tree
  // ===============================
  mirror(node = this.root) {
    if (!node) return null;

    const left = this.mirror(node.left);
    const right = this.mirror(node.right);

    node.left = right;
    node.right = left;

    return node;
  }
}

// ===============================
// 🔥 DEMO
// ===============================
const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);

console.log("Inorder:", bst.inorder());
console.log("Preorder:", bst.preorder());
console.log("Postorder:", bst.postorder());
console.log("Level Order:", bst.levelOrder());
console.log("Height:", bst.height());
console.log("Total Nodes:", bst.countNodes());
console.log("Sum:", bst.sumNodes());
console.log("Max Value:", bst.findMax());
console.log("Search 6:", bst.search(6));

// bst.mirror();
// console.log("Mirrored Inorder:", bst.inorder());