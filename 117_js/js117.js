// โจทย์ที่ 1: แปลงตัวเลขให้เป็น string ที่มีทศนิยม 2 ตำแหน่ง
const array1 = [100, 200.25, 300.84, 400.3];
const result1 = array1.map(num => num.toFixed(2)); // แปลงเป็นทศนิยม 2 ตำแหน่ง
console.log("Result 1:", result1);  // ผลลัพธ์: ["100.00", "200.25", "300.84", "400.30"]

// โจทย์ที่ 2: แปลงตัวเลขให้เป็นชื่อเดือน
const array2 = [0, 5, 10, 7, 6, 5, 0];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const result2 = array2.map(num => months[num]); // ใช้ตัวเลขเพื่อดึงชื่อเดือนจาก array months
console.log("Result 2:", result2);  // ผลลัพธ์: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// โจทย์ที่ 3: แปลงตัวเลขที่เป็นกำลังสองให้กลายเป็นรากที่สอง
const array3 = [1, 16, 81, 256, 625, 1296];
const result3 = array3.map(num => Math.sqrt(num)); // คำนวณรากที่สองของแต่ละตัวเลข
console.log("Result 3:", result3);  // ผลลัพธ์: [1, 2, 3, 4, 5, 6]
