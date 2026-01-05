# 🌳 Tree Data Structure – Ultimate Lesson

This is a **complete, self-contained guide** to Trees. After reading this once, you should **not need any other resource**.

---

## 1️⃣ What is a Tree?

A **Tree** is a **non-linear hierarchical data structure** consisting of **nodes** connected by **edges**.

Unlike arrays or linked lists (linear), trees represent **parent–child relationships**.

### Real-Life Examples

* Family hierarchy
* Company org chart
* Folder structure in a computer
* HTML DOM

---

## 2️⃣ Basic Terminology (Very Important)

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

| Term     | Meaning                                  |
| -------- | ---------------------------------------- |
| Node     | Each element (A, B, C…)                  |
| Root     | Topmost node → A                         |
| Parent   | Node with children → A is parent of B, C |
| Child    | Node under a parent → B is child of A    |
| Siblings | Nodes with same parent → B & C           |
| Leaf     | Node with no children → D, E, F          |
| Edge     | Connection between nodes                 |
| Height   | Longest path from node to leaf           |
| Depth    | Distance from root                       |

---

## 3️⃣ Why Do We Need Trees?

| Problem           | Why Tree Helps    |
| ----------------- | ----------------- |
| Fast searching    | BST → O(log n)    |
| Hierarchical data | Natural structure |
| Sorting           | Tree traversals   |
| Databases         | B-Trees           |

---

## 4️⃣ Types of Trees

### 1. General Tree

* Any number of children

### 2. Binary Tree

* Max **2 children** (left & right)

### 3. Binary Search Tree (BST)

Rule:

```
Left < Root < Right
```

### 4. Complete Binary Tree

* All levels filled except last

### 5. Full Binary Tree

* Each node has 0 or 2 children

### 6. Balanced Tree

* Height difference ≤ 1

---

## 5️⃣ Binary Tree Structure (Code Concept)

Each node contains:

* Value
* Left child
* Right child

```
Node {
  value
  left
  right
}
```

---

## 6️⃣ Tree Traversals (CORE TOPIC)

### Why Traversals?

To **visit all nodes** in a specific order.

---

### A) Depth First Search (DFS)

#### 1. Inorder (L → Root → R)

```
        10
       /  \
      5    15
```

Inorder → `5 10 15`

##### Dry Run

1. Go left → 5
2. Print 5
3. Go root → 10
4. Go right → 15

---

#### 2. Preorder (Root → L → R)

Preorder → `10 5 15`

##### Dry Run

1. Print 10
2. Go left → 5
3. Print 5
4. Go right → 15

---

#### 3. Postorder (L → R → Root)

Postorder → `5 15 10`

##### Dry Run

1. Go left → 5
2. Go right → 15
3. Print root → 10

---

### B) Breadth First Search (BFS / Level Order)

```
        10
       /  \
      5    15
```

Output → `10 5 15`

Uses **Queue**

##### Dry Run

* Enqueue root → 10
* Dequeue → print 10
* Enqueue 5, 15

---

## 7️⃣ Binary Search Tree (BST) – Deep Dive

### BST Property

```
Left subtree < Root < Right subtree
```

Example BST:

```
        8
       / \
      3   10
     / \    \
    1   6    14
```

---

### BST Insertion – Dry Run

Insert `6`:

1. Compare with 8 → left
2. Compare with 3 → right
3. Insert as right child

---

### BST Search – Dry Run

Search `14`:

1. 14 > 8 → right
2. 14 > 10 → right
3. Found

---

## 8️⃣ Tree Height Calculation

Height = max(leftHeight, rightHeight) + 1

### Dry Run

```
Leaf → height = 1
Parent → max(1,1)+1 = 2
```

---

## 9️⃣ Common Tree Problems (Interview Level)

### 1. Count Nodes

### 2. Sum of Nodes

### 3. Max Value

### 4. Height of Tree

### 5. Mirror Tree

### 6. Validate BST

### 7. Lowest Common Ancestor

(All implemented in JS file)

---

## 🔥 Final Mindset

* Tree = recursion playground
* Every problem = **divide left & right**
* If confused → draw tree

---

## 🎯 You Are Now Ready For

* Interviews
* Competitive programming
* Advanced trees (AVL, Segment Tree, Trie)

---

If you want 👉 **practice problems with solutions**, say the word 🚀
