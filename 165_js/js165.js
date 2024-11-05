let arr = [1, [2, [[[3, 4], 5], 6]]];

// ใช้ Array Destructuring
let [a, [b, [[[c, d], e], f]]] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 6
