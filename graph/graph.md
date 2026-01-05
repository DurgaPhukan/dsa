# Graph Data Structure – Ultimate Complete Lesson

> This single document contains **everything** you need to master Graphs from scratch:
>
> * Deep theory (zero assumptions)
> * Visual intuition
> * Step‑by‑step dry runs
> * Time & space complexity
> * Real‑world use cases
> * Interview‑level problems
> * **Complete JavaScript implementation** (grouped at the end like a `.js` file)

You do **NOT** need to read any other blog, watch any video, or open another document.

---

## 1. What is a Graph?

A **Graph** is a non‑linear data structure used to represent **relationships** between objects.

A graph consists of:

* **Vertices (Nodes)** → entities
* **Edges** → connections between entities

### Real‑world examples

* Social networks (people = nodes, friendships = edges)
* Google Maps (cities = nodes, roads = edges)
* Internet (routers = nodes, cables = edges)
* Course prerequisites
* Recommendation systems

---

## 2. Basic Terminology

| Term               | Meaning                                    |
| ------------------ | ------------------------------------------ |
| Vertex (Node)      | Individual data element                    |
| Edge               | Connection between two vertices            |
| Degree             | Number of edges connected to a vertex      |
| Path               | Sequence of vertices connected by edges    |
| Cycle              | Path where start and end vertex are same   |
| Connected Graph    | Path exists between every pair of vertices |
| Disconnected Graph | At least one vertex is unreachable         |

---

## 3. Types of Graphs

### 3.1 Undirected Graph

Edge has **no direction**

```
A —— B
```

### 3.2 Directed Graph (Digraph)

Edge has **direction**

```
A → B
```

### 3.3 Weighted Graph

Edges have weights (cost, distance, time)

```
A --5--> B
```

### 3.4 Cyclic vs Acyclic

* **Cyclic** → contains a loop
* **Acyclic** → no loop (Trees are acyclic graphs)

---

## 4. Graph Representation

### 4.1 Adjacency Matrix

```
   A B C
A  0 1 1
B  1 0 0
C  1 0 0
```

**Pros**

* Fast edge lookup O(1)

**Cons**

* Wastes space O(V²)

---

### 4.2 Adjacency List (MOST USED)

```
A → [B, C]
B → [A]
C → [A]
```

**Pros**

* Space efficient O(V + E)
* Easy traversal

**Cons**

* Edge lookup O(deg(V))

👉 We will use **Adjacency List** in all implementations

---

## 5. Graph Traversal

Traversal = visiting all vertices

Two major techniques:

1. **Breadth First Search (BFS)**
2. **Depth First Search (DFS)**

---

## 6. Breadth First Search (BFS)

### Idea

* Visit **level by level**
* Uses **Queue**

### Example Graph

```
A —— B
|    |
C —— D
```

### BFS from A

### Step‑by‑step Dry Run

| Step    | Queue  | Visited    |
| ------- | ------ | ---------- |
| Start   | [A]    | A          |
| Visit A | [B, C] | A, B, C    |
| Visit B | [C, D] | A, B, C, D |
| Visit C | [D]    | unchanged  |
| Visit D | []     | done       |

**Result:** `A → B → C → D`

### Complexity

* **Time:** O(V + E)
* **Space:** O(V)

---

## 7. Depth First Search (DFS)

### Idea

* Go **deep first**, then backtrack
* Uses **Recursion or Stack**

### DFS from A (Recursive)

### Dry Run

```
DFS(A)
 → DFS(B)
   → DFS(D)
 → DFS(C)
```

**Result:** `A → B → D → C`

### Complexity

* **Time:** O(V + E)
* **Space:** O(V)

---

## 8. Detect Cycle in Graph (Undirected)

### Logic

If you visit an already visited node **that is not the parent**, cycle exists.

### Use cases

* Deadlock detection
* Dependency resolution

---

## 9. Shortest Path (Unweighted Graph)

Use **BFS**

### Why BFS?

Because BFS explores in increasing edge count order.

### Example

```
A — B — D
|         
C ———— E
```

Shortest path A → D = `A → B → D`

---

## 10. Connected Components

Count how many independent graphs exist inside a graph.

### Use cases

* Social groups
* Network clusters

---

## 11. Top Graph Interview Problems

1. BFS traversal
2. DFS traversal
3. Detect cycle
4. Number of connected components
5. Shortest path
6. Clone graph
7. Course schedule
8. Flood fill
9. Island count (matrix → graph)

---

# ===============================

# JavaScript Graph Implementation

# (This section acts as your `.js` file)

# ===============================

```js
// Graph using Adjacency List
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(v1, v2, directed = false) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList[v1].push(v2);
    if (!directed) {
      this.adjList[v2].push(v1);
    }
  }

  // BFS Traversal
  bfs(start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    visited.add(start);

    while (queue.length) {
      const node = queue.shift();
      result.push(node);

      for (const neighbor of this.adjList[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  // DFS Traversal
  dfs(start) {
    const visited = new Set();
    const result = [];

    const dfsHelper = (node) => {
      visited.add(node);
      result.push(node);

      for (const neighbor of this.adjList[node]) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(start);
    return result;
  }

  // Detect Cycle (Undirected Graph)
  hasCycle() {
    const visited = new Set();

    const dfs = (node, parent) => {
      visited.add(node);

      for (const neighbor of this.adjList[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node)) return true;
        } else if (neighbor !== parent) {
          return true;
        }
      }
      return false;
    };

    for (const vertex in this.adjList) {
      if (!visited.has(vertex)) {
        if (dfs(vertex, null)) return true;
      }
    }
    return false;
  }

  // Count Connected Components
  connectedComponents() {
    const visited = new Set();
    let count = 0;

    const dfs = (node) => {
      visited.add(node);
      for (const neighbor of this.adjList[node]) {
        if (!visited.has(neighbor)) dfs(neighbor);
      }
    };

    for (const vertex in this.adjList) {
      if (!visited.has(vertex)) {
        dfs(vertex);
        count++;
      }
    }
    return count;
  }
}

// Example Usage
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph.bfs('A')); // [ 'A', 'B', 'C', 'D' ]
console.log(graph.dfs('A')); // [ 'A', 'B', 'D', 'C' ]
console.log(graph.hasCycle()); // true
console.log(graph.connectedComponents()); // 1
```

---

# ===============================

# ADVANCED GRAPH KNOWLEDGE (INTERVIEW + REAL WORLD)

# ===============================

## 13. Directed Graphs (Digraph) – Deep Dive

In a **directed graph**, edges have direction.

```
A → B → C
↑       ↓
└────── D
```

### Key Concepts

* **In-degree**: number of incoming edges
* **Out-degree**: number of outgoing edges

### Real-world use cases

* Course prerequisites
* Workflow pipelines
* Dependency graphs

---

## 14. Topological Sorting (VERY IMPORTANT 🔥)

### What is it?

Ordering of vertices such that **for every directed edge u → v, u comes before v**.

### When possible?

Only for **Directed Acyclic Graphs (DAG)**.

### Example

```
Course A → Course B → Course C
```

Valid order:

```
A → B → C
```

### Interview Use Case

* Course Schedule (LeetCode 207)
* Build systems
* Task scheduling

### Algorithm (Kahn’s BFS)

1. Compute in-degree of all nodes
2. Push nodes with in-degree 0 into queue
3. Pop → reduce in-degree of neighbors

### Dry Run

Courses: 0 → 1 → 2

| Step  | Queue | In-degree |
| ----- | ----- | --------- |
| Init  | [0]   | [0,1,1]   |
| Pop 0 | [1]   | [0,0,1]   |
| Pop 1 | [2]   | [0,0,0]   |
| Pop 2 | []    | done      |

---

## 15. Shortest Path Algorithms

### 15.1 BFS (Unweighted Graph)

Already covered – fastest for unit weights

---

### 15.2 Dijkstra Algorithm (Weighted Graph)

Used when **weights ≥ 0**

### Idea

Always expand the **minimum distance node** first

### Example

```
A --1--> B --2--> D
 \       |
  4      1
   \     |
     --> C --3--> D
```

### Shortest Path A → D = 1 + 2 = 3

### Time Complexity

* Using Min Heap: O((V + E) log V)

---

## 16. Minimum Spanning Tree (MST)

### Definition

Connect all vertices with **minimum total edge weight** (no cycles)

### Algorithms

* **Kruskal** (Sort edges)
* **Prim** (Grow tree)

### Use cases

* Network cabling
* Road construction
* Cluster formation

---

## 17. Graphs from Matrix (EXTREMELY IMPORTANT)

Most interview problems are actually **graphs hidden in 2D grids**

### Example – Number of Islands

```
1 1 0 0
0 1 0 1
0 0 1 1
```

* Each cell = node
* Adjacent 1s = edges

### DFS Dry Run

Start at (0,0) → mark all connected 1s → island count +1

---

## 18. Must-Know Interview Patterns

### Pattern 1: Traversal

* BFS / DFS
* Flood fill

### Pattern 2: Cycle Detection

* Directed → DFS stack
* Undirected → parent check

### Pattern 3: Shortest Path

* BFS (unweighted)
* Dijkstra (weighted)

### Pattern 4: Dependency Resolution

* Topological Sort

---

# ===============================

# INTERVIEW PROBLEMS (WITH APPROACH)

# ===============================

## Problem 1: Number of Connected Components

### Question

Given n nodes and edges, count connected components.

### Approach

* Build graph
* DFS from each unvisited node

---

## Problem 2: Detect Cycle in Directed Graph

### Trick

Use **recursion stack**

If node is visited AND in recursion stack → cycle

---

## Problem 3: Course Schedule

### Input

numCourses = 4
prerequisites = [[1,0],[2,1],[3,2]]

### Output

true

### Solution

Topological Sort

---

## Problem 4: Shortest Path in Binary Matrix

### Allowed moves

Up, Down, Left, Right

### Solution

Multi-source BFS

---

## Problem 5: Clone Graph

### Key Idea

Use HashMap (Old → New)

---

# ===============================

# FINAL MASTERY CHECKLIST ✅

# ===============================

If you can answer YES to all below, you are graph-strong:

* I can implement BFS & DFS from scratch
* I can detect cycles (directed & undirected)
* I can solve matrix → graph problems
* I know when to use BFS vs Dijkstra
* I understand topological sorting deeply

---

## What I Recommend Next (Tell Me 🔥)

1. Step-by-step **Dijkstra + Min Heap JS implementation**
2. 20 **LeetCode Graph Problems with full dry runs**
3. Graph problems asked in **Google / Amazon / Uber**
4. Visual explanation of **matrix graph problems**

Say the word and we go even deeper 🚀
