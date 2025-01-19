// Linear search
// let arr = [3, 2, 5, 4, 6, 7, 5, 4, 8, 4, 3, 9, 98, 6, 4, 6];
// let findValue = 9;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === findValue) {
//     console.log("Value found at index: ", i);
//   }
// }

// Binary search

function BSearchRec(arr, val, start, end) {
  if (start > end) return;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) return true;

  if (arr[mid] > val) {
    return BSearchRec(arr, val, start, mid - 1);
  } else {
    return BSearchRec(arr, val, mid + 1, end);
  }
}

let arr = [11, 12, 13, 14, 15, 16, 17, 19, 23, 26, 27, 31, 34, 35, 37, 39];
let val = 5;
if (BSearchRec(arr, val, 0, arr.length - 1)) {
  console.log("Element is Found!");
} else {
  console.log("Element is not found!!!");
}
