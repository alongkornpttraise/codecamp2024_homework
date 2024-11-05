let guest = "Jane";
let admin = "Pete";

// ใช้ Array Destructuring เพื่อสลับค่าของ guest และ admin
[guest, admin] = [admin, guest];

console.log(guest); // Pete
console.log(admin); // Jane
