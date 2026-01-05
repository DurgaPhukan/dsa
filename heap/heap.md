# HEAP DATA STRUCTURE – ULTIMATE GUIDE (WITH DRY RUNS)

---

## 1. What is a Heap?

A **Heap** is a **specialized binary tree** that satisfies:

1. **Complete Binary Tree property**
2. **Heap Property**

> Heap is NOT a Binary Search Tree.

---

## 2. Types of Heap

### 🔹 Min Heap
- Parent node ≤ its children
- Root contains the **minimum element**

Example:
        1
      /   \
     3     5
    / \
   7   9

---

### 🔹 Max Heap
- Parent node ≥ its children
- Root contains the **maximum element**

Example:
        9
      /   \
     7     5
    / \
   3   1

---

## 3. Complete Binary Tree (Very Important)

A **complete binary tree** means:
- All levels are completely filled
- Except possibly the **last level**
- Nodes are filled **from left to right**

Why important?
👉 Heaps use **arrays**, not pointers.

---

## 4. Heap Representation Using Array

For index `i`:

- Parent = `Math.floor((i - 1) / 2)`
- Left Child = `2 * i + 1`
- Right Child = `2 * i + 2`

Example (Min Heap):
Array: [1, 3, 5, 7, 9]

Index mapping:
        1(0)
       /    \
    3(1)    5(2)
    / \
 7(3) 9(4)

---

## 5. Why Heap Uses Array?

✔ Saves memory  
✔ Faster access  
✔ Easy parent-child calculation  
✔ Used in Priority Queue

---

## 6. Heap Operations & Time Complexity

| Operation     | Time Complexity |
|---------------|-----------------|
| Insert        | O(log n)        |
| Delete Root   | O(log n)        |
| Peek          | O(1)            |
| Heapify       | O(log n)        |
| Build Heap    | O(n)            |

---

## 7. Heap Insertion (Min Heap)

### Steps:
1. Insert element at the **end**
2. Compare with parent
3. Swap if heap property is violated
4. Repeat until fixed

---

### 🔁 DRY RUN: Insert 2 into Min Heap

Initial heap:
[1, 3, 5, 7, 9]

Step 1: Insert at end
[1, 3, 5, 7, 9, 2]

Tree:
        1
      /   \
     3     5
    / \   /
   7   9 2

Step 2: Compare 2 with parent (5)
→ Swap

[1, 3, 2, 7, 9, 5]

Step 3: Compare 2 with parent (1)
→ No swap (heap property satisfied)

✅ Final Heap:
[1, 3, 2, 7, 9, 5]

---

## 8. Heap Deletion (Remove Root)

### Steps:
1. Remove root
2. Replace root with last element
3. Heapify down (bubble down)

---

### 🔁 DRY RUN: Remove Min (Min Heap)

Initial heap:
[1, 3, 2, 7, 9, 5]

Step 1: Remove root (1)
Step 2: Move last element (5) to root

[5, 3, 2, 7, 9]

Tree:
        5
      /   \
     3     2
    / \
   7   9

Step 3: Compare 5 with children (3,2)
→ Swap with smaller (2)

[2, 3, 5, 7, 9]

Step 4: Heap property satisfied

✅ Final Heap:
[2, 3, 5, 7, 9]

---

## 9. Heapify

Heapify ensures heap property from a given index.

- Heapify Down → used in deletion
- Heapify Up → used in insertion

---

## 10. Build Heap (Very Important)

Convert an array into a heap.

Steps:
- Start from last non-leaf node
- Heapify down till root

Why O(n)?
👉 Most nodes are leaves → no work

---

## 11. Priority Queue Using Heap

- Min Heap → lower value = higher priority
- Max Heap → higher value = higher priority

Used in:
✔ CPU Scheduling  
✔ Dijkstra Algorithm  
✔ Event handling  
✔ Job queues  

---

## 12. Heap Sort (Using Max Heap)

Steps:
1. Build Max Heap
2. Swap root with last element
3. Reduce heap size
4. Heapify root
5. Repeat

Time Complexity: **O(n log n)**  
Space: **O(1)** (in-place)

---

## 13. Common Heap Problems (Must Practice)

1. Find Kth largest element
2. Find Kth smallest element
3. Merge K sorted arrays
4. Top K frequent elements
5. Median of data stream
6. Sort nearly sorted array
7. Connect ropes with minimum cost

---

## 14. When to Use Heap?

✔ When you need **fast min/max**
✔ When order matters by priority
✔ When sorting partially
✔ When continuous insert & delete

---

## 15. Heap vs BST

| Heap | BST |
|----|----|
| Complete Tree | Not necessarily |
| Fast min/max | Ordered traversal |
| No search | Search supported |
| Array-based | Pointer-based |

---

## ✅ SUMMARY

- Heap = Complete Binary Tree + Heap Property
- Two types: Min Heap & Max Heap
- Implemented using array
- Core operations are O(log n)
- Backbone of Priority Queue

---

🎯 You now fully understand HEAP.
