// สร้าง object ชื่อ user
const user = {};

// เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
user.name = "John";

// เพิ่ม property ชื่อ surname ให้มีค่าเท่ากับ Do
user.surname = "Do";

// Update property name ให้มีค่าเป็น Matt
user.name = "Matt";

// ลบ property name
delete user.name;

console.log(user); // ผลลัพธ์จะเป็น { surname: "Do" }
