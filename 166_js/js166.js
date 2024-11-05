const obj = { prop: 5, prop2: 10 };

// ใช้ Object Destructuring และกำหนดชื่อใหม่ให้ตัวแปร
const { prop: a, prop2: b } = obj;

console.log(a); // 5
console.log(b); // 10
