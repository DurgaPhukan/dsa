# 🌳 Tree Data Structures – Practice, Visual Dry Runs & Advanced Trees

This document completes your **ULTIMATE TREE MASTERCLASS**.

You now have:

* Core theory (previous file)
* Full JavaScript implementation
* **Practice problems + solutions**
* **Visual dry runs (ASCII)**
* **Advanced trees explained intuitively**

---

## 🧠 How to Use This Document

For each problem:

1. Read the problem
2. Look at the tree diagram
3. Try solving on paper
4. Then read the explanation & dry run

---

## 🔥 SECTION 1: MUST-KNOW INTERVIEW PROBLEMS

---

## 1️⃣ Count Leaf Nodes

### Problem

Count nodes with **no children**.

```
        10
       /  \
      5    15
     / \     \
    2   7     20
```

Leaf nodes → `2, 7, 20`

Answer → **3**

### Logic

* If node has no left & right → leaf
* Recursively count

### Dry Run

* Start at 10 → not leaf
* 5 → not leaf
* 2 → leaf → +1
* 7 → leaf → +1
* 15 → not leaf
* 20 → leaf → +1

---

## 2️⃣ Sum of All Left Leaves

### Problem

Sum values of nodes that are **left children & leaves**.

```
        10
       /  \
      5    15
     / \     \
    2   7     20
```

Left leaves → `2`

Answer → **2**

### Key Idea

* Track parent
* Check `node.left` is leaf

---

## 3️⃣ Maximum Depth of Tree

### Problem

Find longest path from root to leaf.

### Formula

```
height = max(left, right) + 1
```

### Dry Run

* Leaf → height = 1
* Node 5 → max(1,1)+1 = 2
* Root → max(2,2)+1 = 3

---

## 4️⃣ Check If Two Trees Are Identical

### Problem

Same structure + same values?

### Logic

* Both null → true
* One null → false
* Values equal AND

  * left subtrees equal
  * right subtrees equal

### Visual

```
Tree A        Tree B
 10            10
 / \          / \
5  15        5  15
```

---

## 5️⃣ Invert / Mirror a Tree

### Problem

Swap left & right at every node.

### Before

```
    1
   / \
  2   3
```

### After

```
    1
   / \
  3   2
```

### Dry Run

* Swap at root
* Recursively swap children

---

## 6️⃣ Validate Binary Search Tree

### Rule

```
Left < Root < Right
```

### Key Insight (INTERVIEW GOLD ⭐)

Use **range limits**, not just parent comparison.

Wrong approach:

```
node.left < node
```

Correct approach:

```
min < node < max
```

---

## 7️⃣ Lowest Common Ancestor (LCA)

### Problem

Find lowest shared parent of two nodes.

```
        8
       / \
      3   10
     / \
    1   6
```

LCA of `1` & `6` → **3**

### Logic

* If both nodes on left → go left
* If both on right → go right
* Else → current node

---

## 🔁 SECTION 2: VISUAL TRAVERSAL DRY RUNS

Tree:

```
        A
       / \
      B   C
     / \
    D   E
```

### Inorder (L R R)

```
D → B → E → A → C
```

### Preorder (R L R)

```
A → B → D → E → C
```

### Postorder (L R R)

```
D → E → B → C → A
```

### Level Order

```
A → B → C → D → E
```

---

## 🚀 SECTION 3: ADVANCED TREES (INTUITIVE)

---

## 🌲 AVL Tree (Self-Balancing BST)

### Problem with Normal BST

If inserted in sorted order:

```
1 → 2 → 3 → 4
```

Becomes a **linked list** → O(n)

### AVL Solution

* Balance factor = height(left) - height(right)
* Must be `-1, 0, +1`

### Rotations

* LL → Right rotation
* RR → Left rotation
* LR → Left + Right
* RL → Right + Left

Think of it as **tree yoga 🧘**

---

## 🌲 Heap (Priority Queue)

### Properties

* Complete Binary Tree
* Max Heap → parent > children
* Min Heap → parent < children

### Use Cases

* Priority queue
* Dijkstra
* Scheduling

---

## 🌲 Trie (Prefix Tree)

### Used For

* Autocomplete
* Spell check
* Dictionary

### Example

Words: `cat, car`

```
   c
   |
   a
  / \
 t   r
```

---

## 🧠 FINAL MENTAL MODEL (IMPORTANT)

Every tree problem =

```
Solve left subtree
Solve right subtree
Combine result
```

If stuck → draw tree → recursion becomes obvious.

---

## 🎯 WHAT YOU CAN DO NOW

You are ready for:

* FAANG-style tree interviews
* Competitive programming
* Building real systems (DOM, DB, indexes)

---

If you want next:
✅ Graphs
✅ Dynamic Programming on Trees
✅ Full DSA Interview Sheet

Just say the word 🔥
