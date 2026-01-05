// 🌳 TREE INTERVIEW PROBLEMS – SOLVED IN JAVASCRIPT
// Each problem includes: logic + clean solution

// ===============================
// Basic Tree Node
// ===============================
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Helper tree for examples
//        8
//       / \
//      3   10
//     / \    \
//    1   6    14
//       / \   
//      4   7   

const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(14);

// ===============================
// 1️⃣ Maximum Depth of Binary Tree
// ===============================
// Time: O(n), Space: O(h)
function maxDepth(node) {
  if (!node) return 0;
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

// ===============================
// 2️⃣ Check if Tree is Balanced
// ===============================
function isBalanced(root) {
  function height(node) {
    if (!node) return 0;

    const left = height(node.left);
    if (left === -1) return -1;

    const right = height(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }

  return height(root) !== -1;
}

// ===============================
// 3️⃣ Validate Binary Search Tree
// ===============================
function isValidBST(root) {
  function validate(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;

    return (
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}

// ===============================
// 4️⃣ Lowest Common Ancestor (BST)
// ===============================
function lowestCommonAncestor(root, p, q) {
  if (p < root.val && q < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if (p > root.val && q > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root.val;
}

// ===============================
// 5️⃣ Level Order Traversal
// ===============================
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// ===============================
// 6️⃣ Invert / Mirror Tree
// ===============================
function invertTree(root) {
  if (!root) return null;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

// ===============================
// 7️⃣ Diameter of Binary Tree
// ===============================
function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (!node) return 0;

    const left = depth(node.left);
    const right = depth(node.right);

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }

  depth(root);
  return diameter;
}

// ===============================
// 8️⃣ Count Leaf Nodes
// ===============================
function countLeaves(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  return countLeaves(root.left) + countLeaves(root.right);
}

// ===============================
// 9️⃣ Sum of All Nodes
// ===============================
function sumNodes(root) {
  if (!root) return 0;
  return root.val + sumNodes(root.left) + sumNodes(root.right);
}

// ===============================
// 🔥 TEST OUTPUTS
// ===============================
console.log("Max Depth:", maxDepth(root));
console.log("Is Balanced:", isBalanced(root));
console.log("Is Valid BST:", isValidBST(root));
console.log("LCA of 1 & 7:", lowestCommonAncestor(root, 1, 7));
console.log("Level Order:", levelOrder(root));
console.log("Diameter:", diameterOfBinaryTree(root));
console.log("Leaf Count:", countLeaves(root));
console.log("Sum of Nodes:", sumNodes(root));