# HEAP PROBLEMS – COMPLETE PRACTICE SET (WITH DRY RUNS)

---

## PROBLEM 1: Find Kth Largest Element in an Array

### Example
Input:
nums = [3,2,1,5,6,4], k = 2

Output:
5

---

### INTUITION
- Use **Min Heap of size K**
- Keep top K largest elements
- Root of heap = Kth largest

---

### DRY RUN

nums = [3,2,1,5,6,4], k = 2

Insert first k elements:
Heap = [3,2] → heapify → [2,3]

Now iterate remaining elements:

1 → ignore (smaller than root)
5 → remove 2, insert 5 → [3,5]
6 → remove 3, insert 6 → [5,6]
4 → ignore

Root = **5** ✅

---

### Time Complexity
O(n log k)

---

## PROBLEM 2: Find Kth Smallest Element

### Approach
- Use **Max Heap of size K**
- Similar logic but reverse comparison

---

### Example
nums = [7,10,4,3,20,15], k = 3  
Output = 7

---

## PROBLEM 3: Merge K Sorted Arrays

### Example
arrays = [
  [1,4,5],
  [1,3,4],
  [2,6]
]

Output:
[1,1,2,3,4,4,5,6]

---

### INTUITION
- Use **Min Heap**
- Push first element of each array
- Extract min and push next element from same array

---

### DRY RUN (Short)
Heap stores (value, arrayIndex, elementIndex)

Push:
1(a0), 1(a1), 2(a2)

Extract 1 → push 4  
Extract 1 → push 3  
Extract 2 → push 6  
...

---

## PROBLEM 4: Top K Frequent Elements

### Example
nums = [1,1,1,2,2,3], k = 2  
Output = [1,2]

---

### INTUITION
1. Count frequency using Map
2. Use Min Heap based on frequency
3. Keep size = k

---

## PROBLEM 5: Median of Data Stream

### Idea (VERY IMPORTANT)
Use **two heaps**:
- Max Heap → left half
- Min Heap → right half

Balance sizes:
- Size difference ≤ 1

---

### Example
Insert: 1, 2, 3

After 1:
MaxHeap = [1]

After 2:
MaxHeap = [1]
MinHeap = [2]
Median = (1+2)/2

After 3:
MaxHeap = [2,1]
MinHeap = [3]
Median = 2

---

## PROBLEM 6: Sort a Nearly Sorted Array

Given array where each element is at most k away from its position.

### Example
arr = [6,5,3,2,8,10,9], k = 3

---

### Approach
- Use Min Heap of size k+1
- Extract min and insert next element

---

## PROBLEM 7: Connect Ropes with Minimum Cost

### Example
ropes = [4,3,2,6]

---

### DRY RUN

Heap = [2,3,4,6]

2+3 = 5 (cost=5)
Heap = [4,5,6]

4+5 = 9 (cost=14)
Heap = [6,9]

6+9 = 15 (cost=29)

✅ Answer = 29

---

## MUST-REMEMBER PATTERNS

| Problem Type | Heap Used |
|-------------|-----------|
| Kth largest | Min Heap |
| Kth smallest | Max Heap |
| Streaming median | Two heaps |
| Merge sorted | Min Heap |
| Priority based | Heap |

---

🎯 If you master these, heaps are DONE.
