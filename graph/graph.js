/********************************************************************
 GRAPH PROBLEM 1: BFS Traversal of a Graph
 Problem:
 Given a graph, print BFS traversal starting from a given node.
********************************************************************/

function bfs(graph, start) {
  const visited = new Set();
  const queue = [];

  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Example
const graph1 = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

bfs(graph1, "A");

/********************************************************************
 GRAPH PROBLEM 2: DFS Traversal (Recursive)
********************************************************************/

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  visited.add(node);
  console.log(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}

// Example
dfs(graph1, "A");

/********************************************************************
 GRAPH PROBLEM 3: Detect Cycle in Undirected Graph
********************************************************************/

function hasCycle(graph) {
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
}

// Example
const graph2 = {
  0: ["1"],
  1: ["0", "2", "3"],
  2: ["1"],
  3: ["1"]
};

console.log(hasCycle(graph2)); // false

/********************************************************************
 GRAPH PROBLEM 4: Find Shortest Path (Unweighted Graph)
********************************************************************/

function shortestPath(graph, start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === end) return path;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}

// Example
console.log(shortestPath(graph1, "A", "E")); // [A, C, E]

/********************************************************************
 GRAPH PROBLEM 5: Number of Connected Components
********************************************************************/

function countComponents(graph) {
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }
  return count;
}

// Example
console.log(countComponents(graph2)); // 1

/********************************************************************
 GRAPH PROBLEM 6: Topological Sort (Directed Acyclic Graph)
********************************************************************/

function topoSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
    stack.push(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) dfs(node);
  }

  return stack.reverse();
}

// Example
const graph3 = {
  A: ["C"],
  B: ["C", "D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};

console.log(topoSort(graph3));

/********************************************************************
 GRAPH PROBLEM 7: Check if Path Exists Between Two Nodes
********************************************************************/

function pathExists(graph, src, dest, visited = new Set()) {
  if (src === dest) return true;
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      if (pathExists(graph, neighbor, dest, visited)) return true;
    }
  }
  return false;
}

// Example
console.log(pathExists(graph1, "A", "E")); // true
console.log(pathExists(graph1, "B", "E")); // false
