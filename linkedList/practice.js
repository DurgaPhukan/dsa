/****************************************************
 * LINKED LIST PROBLEMS (EASY → HARD)
 * Covers all important concepts
 ****************************************************/

/*
 Basic Node definition
*/
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/*
 Helper functions (used in testing)
*/
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let val of arr) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return dummy.next;
}

function listToArray(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

/****************************************************
 * EASY LEVEL
 ****************************************************/

/*
 1. Print Linked List
 Concept: Traversal
*/
function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

/*
 2. Count Length of Linked List
 Concept: Traversal
*/
function getLength(head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}

/*
 3. Search an Element
 Concept: Linear search
*/
function searchElement(head, target) {
  while (head) {
    if (head.val === target) return true;
    head = head.next;
  }
  return false;
}

/*
 4. Insert at Beginning
 Concept: Head manipulation
*/
function insertAtHead(head, val) {
  return new ListNode(val, head);
}

/*
 5. Insert at End
 Concept: Traversal + insertion
*/
function insertAtTail(head, val) {
  if (!head) return new ListNode(val);

  let curr = head;
  while (curr.next) curr = curr.next;
  curr.next = new ListNode(val);
  return head;
}

/*
 6. Delete Head Node
 Concept: Pointer update
*/
function deleteHead(head) {
  if (!head) return null;
  return head.next;
}

/****************************************************
 * MEDIUM LEVEL
 ****************************************************/

/*
 7. Delete a Node with Given Value
 Concept: Pointer manipulation
*/
function deleteValue(head, val) {
  if (!head) return null;

  if (head.val === val) return head.next;

  let curr = head;
  while (curr.next && curr.next.val !== val) {
    curr = curr.next;
  }

  if (curr.next) curr.next = curr.next.next;
  return head;
}

/*
 8. Reverse a Linked List (Iterative)
 Concept: Pointer reversal ⭐⭐⭐
*/
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

/*
 9. Find Middle of Linked List
 Concept: Slow & Fast pointer ⭐⭐⭐
*/
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

/*
 10. Detect Cycle in Linked List
 Concept: Floyd’s Cycle Detection ⭐⭐⭐
*/
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

/****************************************************
 * HARD LEVEL
 ****************************************************/

/*
 11. Find Starting Point of Cycle
 Concept: Floyd’s algorithm (advanced)
 TODO: Solve
*/
function detectCycleStart(head) {
  // TODO
}

/*
 12. Remove Nth Node from End
 Concept: Two pointers
 TODO: Solve
*/
function removeNthFromEnd(head, n) {
  // TODO
}

/*
 13. Check if Linked List is Palindrome
 Concept: Reverse second half
 TODO: Solve
*/
function isPalindrome(head) {
  // TODO
}

/*
 14. Merge Two Sorted Linked Lists
 Concept: Merge logic
 TODO: Solve
*/
function mergeTwoLists(l1, l2) {
  // TODO
}

/*
 15. Add Two Numbers (Linked List)
 Concept: Carry handling ⭐⭐⭐
 TODO: Solve
*/
function addTwoNumbers(l1, l2) {
  // TODO
}

/*
 16. Reverse Nodes in K-Group
 Concept: Recursion + pointers (VERY IMPORTANT)
 TODO: Solve
*/
function reverseKGroup(head, k) {
  // TODO
}

/*
 17. Flatten a Multilevel Linked List
 Concept: DFS
 TODO: Solve
*/
function flatten(head) {
  // TODO
}

/****************************************************
 * BONUS (INTERVIEW LEVEL)
 ****************************************************/

/*
 18. Clone a Linked List with Random Pointer
 Concept: HashMap / O(1) trick
 TODO: Solve
*/
function copyRandomList(head) {
  // TODO
}

/*
 19. Sort a Linked List
 Concept: Merge Sort on Linked List
 TODO: Solve
*/
function sortList(head) {
  // TODO
}

/*
 20. Intersection of Two Linked Lists
 Concept: Length difference / pointer sync
 TODO: Solve
*/
function getIntersectionNode(headA, headB) {
  // TODO
}


/****************************************************
 * LINKED LIST PROBLEMS – ADVANCED SET
 * Focus: Patterns, Edge cases, Interviews
 ****************************************************/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
    this.random = null; // used in some problems
  }
}

/****************************************************
 * PATTERN 1: TWO POINTER VARIATIONS
 ****************************************************/

/*
 1. Find Kth Node from Beginning
*/
function kthFromStart(head, k) {
  let curr = head;
  while (curr && k > 1) {
    curr = curr.next;
    k--;
  }
  return curr || null;
}

/*
 2. Find Kth Node from End
 Concept: Fast pointer gap
*/
function kthFromEnd(head, k) {
  let slow = head;
  let fast = head;

  while (k-- && fast) fast = fast.next;
  if (k >= 0) return null;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

/****************************************************
 * PATTERN 2: LIST TRANSFORMATION
 ****************************************************/

/*
 3. Remove Duplicates from Sorted List
*/
function removeDuplicatesSorted(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

/*
 4. Remove Duplicates from Unsorted List
 Concept: HashSet
*/
function removeDuplicatesUnsorted(head) {
  let seen = new Set();
  let curr = head;
  let prev = null;

  while (curr) {
    if (seen.has(curr.val)) {
      prev.next = curr.next;
    } else {
      seen.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
}

/****************************************************
 * PATTERN 3: SEGMENT REVERSAL
 ****************************************************/

/*
 5. Reverse Linked List Between Positions (m, n)
*/
function reverseBetween(head, m, n) {
  if (!head) return null;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  for (let i = 1; i < m; i++) prev = prev.next;

  let curr = prev.next;
  for (let i = 0; i < n - m; i++) {
    let temp = curr.next;
    curr.next = temp.next;
    temp.next = prev.next;
    prev.next = temp;
  }

  return dummy.next;
}

/*
 6. Reverse Even Length Groups
 TODO
*/
function reverseEvenLengthGroups(head) {
  // TODO
}

/****************************************************
 * PATTERN 4: REORDERING
 ****************************************************/

/*
 7. Reorder List
 Input: 1 → 2 → 3 → 4 → 5
 Output: 1 → 5 → 2 → 4 → 3
*/
function reorderList(head) {
  if (!head || !head.next) return;

  // find middle
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null, curr = slow.next;
  slow.next = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // merge two halves
  let first = head;
  let second = prev;

  while (second) {
    let t1 = first.next;
    let t2 = second.next;
    first.next = second;
    second.next = t1;
    first = t1;
    second = t2;
  }
}

/****************************************************
 * PATTERN 5: MATH + LINKED LIST
 ****************************************************/

/*
 8. Multiply Two Numbers Represented as Linked List
 TODO
*/
function multiplyTwoLists(l1, l2) {
  // TODO
}

/*
 9. Increment Number Represented by Linked List
 Input: 1 → 2 → 9
 Output: 1 → 3 → 0
*/
function plusOne(head) {
  head = reverse(head);
  let curr = head;
  let carry = 1;

  while (curr && carry) {
    let sum = curr.val + carry;
    curr.val = sum % 10;
    carry = Math.floor(sum / 10);
    if (!curr.next && carry) {
      curr.next = new ListNode(carry);
      carry = 0;
    }
    curr = curr.next;
  }
  return reverse(head);
}

function reverse(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

/****************************************************
 * PATTERN 6: CYCLE & INTERSECTION
 ****************************************************/

/*
 10. Intersection Point of Two Lists (No extra space)
*/
function getIntersectionNode(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }
  return p1;
}

/*
 11. Length of Cycle
 TODO
*/
function cycleLength(head) {
  // TODO
}

/****************************************************
 * PATTERN 7: DESIGN PROBLEMS
 ****************************************************/

/*
 12. Design Linked List
*/
class MyLinkedList {
  constructor() {
    this.head = null;
  }

  get(index) {
    let curr = this.head;
    while (curr && index--) curr = curr.next;
    return curr ? curr.val : -1;
  }

  addAtHead(val) {
    this.head = new ListNode(val, this.head);
  }

  addAtTail(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = new ListNode(val);
  }

  deleteAtIndex(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    while (curr && index > 1) {
      curr = curr.next;
      index--;
    }
    if (curr && curr.next) curr.next = curr.next.next;
  }
}

/****************************************************
 * PATTERN 8: HARD INTERVIEW CLASSICS
 ****************************************************/

/*
 13. Split List into K Parts
 TODO
*/
function splitListToParts(head, k) {
  // TODO
}

/*
 14. Rotate List Right by K places
 TODO
*/
function rotateRight(head, k) {
  // TODO
}

/*
 15. Remove Zero Sum Consecutive Nodes
 TODO
*/
function removeZeroSumSublists(head) {
  // TODO
}

/*
 16. Odd Even Linked List
 Input: 1→2→3→4→5
 Output: 1→3→5→2→4
*/
function oddEvenList(head) {
  if (!head) return null;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}

/****************************************************
 * PATTERN 9: VERY HARD (OPTIONAL)
 ****************************************************/

/*
 17. Merge K Sorted Lists
 TODO
*/
function mergeKLists(lists) {
  // TODO
}

/*
 18. Reverse Alternating K Nodes
 TODO
*/
function reverseAlternateK(head, k) {
  // TODO
}
