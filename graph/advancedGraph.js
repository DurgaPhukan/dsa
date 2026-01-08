/********************************************************************
 PROBLEM 1: Dijkstra’s Algorithm (Shortest Path - Weighted Graph)
********************************************************************/

function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();

  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    let currNode = null;
    let minDist = Infinity;

    for (let node in distances) {
      if (!visited.has(node) && distances[node] < minDist) {
        minDist = distances[node];
        currNode = node;
      }
    }

    if (currNode === null) break;

    visited.add(currNode);

    for (let [neighbor, weight] of graph[currNode]) {
      if (distances[currNode] + weight < distances[neighbor]) {
        distances[neighbor] = distances[currNode] + weight;
      }
    }
  }

  return distances;
}

// Example
const weightedGraph = {
  A: [["B", 1], ["C", 4]],
  B: [["C", 2], ["D", 5]],
  C: [["D", 1]],
  D: []
};

console.log(dijkstra(weightedGraph, "A"));

/********************************************************************
 PROBLEM 2: Bellman-Ford (Detect Negative Cycle)
********************************************************************/

function bellmanFord(edges, nodes, start) {
  const dist = {};
  for (let node of nodes) dist[node] = Infinity;
  dist[start] = 0;

  for (let i = 0; i < nodes.length - 1; i++) {
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  for (let [u, v, w] of edges) {
    if (dist[u] + w < dist[v]) {
      return "Negative Cycle Detected";
    }
  }

  return dist;
}

// Example
const edges = [
  ["A", "B", 1],
  ["B", "C", -1],
  ["C", "A", -1]
];

console.log(bellmanFord(edges, ["A", "B", "C"], "A"));

/********************************************************************
 PROBLEM 3: Floyd-Warshall (All Pairs Shortest Path)
********************************************************************/

function floydWarshall(matrix) {
  const n = matrix.length;

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][k] + matrix[k][j] < matrix[i][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }
  return matrix;
}

// Example
const INF = 1e9;
const graphMatrix = [
  [0, 3, INF],
  [INF, 0, 1],
  [2, INF, 0]
];

console.log(floydWarshall(graphMatrix));

/********************************************************************
 PROBLEM 4: Minimum Spanning Tree - Kruskal’s Algorithm
********************************************************************/

function kruskal(edges) {
  edges.sort((a, b) => a[2] - b[2]);

  const parent = {};
  function find(x) {
    if (parent[x] === undefined) parent[x] = x;
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(a, b) {
    parent[find(a)] = find(b);
  }

  const mst = [];
  for (let [u, v, w] of edges) {
    if (find(u) !== find(v)) {
      union(u, v);
      mst.push([u, v, w]);
    }
  }

  return mst;
}

// Example
console.log(
  kruskal([
    ["A", "B", 1],
    ["B", "C", 2],
    ["A", "C", 3]
  ])
);

/********************************************************************
 PROBLEM 5: Bipartite Graph Check
********************************************************************/

function isBipartite(graph) {
  const color = {};

  for (let node in graph) {
    if (color[node] === undefined) {
      const queue = [node];
      color[node] = 0;

      while (queue.length) {
        const curr = queue.shift();
        for (let neighbor of graph[curr]) {
          if (color[neighbor] === undefined) {
            color[neighbor] = 1 - color[curr];
            queue.push(neighbor);
          } else if (color[neighbor] === color[curr]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

// Example
console.log(
  isBipartite({
    0: [1, 3],
    1: [0, 2],
    2: [1, 3],
    3: [0, 2]
  })
);

/********************************************************************
 PROBLEM 6: Strongly Connected Components (Kosaraju)
********************************************************************/

function kosaraju(graph) {
  const visited = new Set();
  const stack = [];

  function dfs1(node) {
    visited.add(node);
    for (let n of graph[node]) {
      if (!visited.has(n)) dfs1(n);
    }
    stack.push(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) dfs1(node);
  }

  const reversed = {};
  for (let u in graph) {
    for (let v of graph[u]) {
      if (!reversed[v]) reversed[v] = [];
      reversed[v].push(u);
    }
    if (!reversed[u]) reversed[u] = [];
  }

  visited.clear();
  const scc = [];

  function dfs2(node, comp) {
    visited.add(node);
    comp.push(node);
    for (let n of reversed[node]) {
      if (!visited.has(n)) dfs2(n, comp);
    }
  }

  while (stack.length) {
    const node = stack.pop();
    if (!visited.has(node)) {
      const component = [];
      dfs2(node, component);
      scc.push(component);
    }
  }

  return scc;
}

// Example
console.log(
  kosaraju({
    A: ["B"],
    B: ["C"],
    C: ["A", "D"],
    D: ["E"],
    E: []
  })
);

/********************************************************************
 PROBLEM 7: Alien Dictionary (Topological Sort with Order)
********************************************************************/

function alienOrder(words) {
  const graph = {};
  const indegree = {};

  for (let word of words) {
    for (let ch of word) {
      graph[ch] = graph[ch] || [];
      indegree[ch] = indegree[ch] || 0;
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i], w2 = words[i + 1];
    let min = Math.min(w1.length, w2.length);

    for (let j = 0; j < min; j++) {
      if (w1[j] !== w2[j]) {
        graph[w1[j]].push(w2[j]);
        indegree[w2[j]]++;
        break;
      }
    }
  }

  const queue = [];
  for (let ch in indegree) {
    if (indegree[ch] === 0) queue.push(ch);
  }

  let order = "";
  while (queue.length) {
    const ch = queue.shift();
    order += ch;
    for (let n of graph[ch]) {
      if (--indegree[n] === 0) queue.push(n);
    }
  }

  return order;
}

// Example
console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
