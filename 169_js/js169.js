const q = { prop: 5, prop2: [10, 100] };

// ใช้ Destructuring เพื่อให้ x = 5 และ y = 100
const { prop: x, prop2: [, y] } = q;

console.log(x); // 5
console.log(y); // 100
