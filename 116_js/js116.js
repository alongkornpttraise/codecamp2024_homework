// โจทย์ที่ 1: แปลงผลไม้ทั้งหมดให้เป็นตัวพิมพ์ใหญ่
const array1 = ['apple', 'banana', 'orange'];
const result1 = array1.map(fruit => fruit.toUpperCase());
console.log("Result 1:", result1);  // ผลลัพธ์: ["APPLE", "BANANA", "ORANGE"]

// โจทย์ที่ 2: แปลงตัวเลขเป็น "odd" หรือ "even"
const array2 = [1, 3, 4, 5, 6, 7, 8];
const result2 = array2.map(num => num % 2 === 0 ? 'even' : 'odd');
console.log("Result 2:", result2);  // ผลลัพธ์: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// โจทย์ที่ 3: แปลงตัวเลขลบให้เป็นบวก
const array3 = [1, -3, 2, 8, -4, 5];
const result3 = array3.map(num => Math.abs(num));
console.log("Result 3:", result3);  // ผลลัพธ์: [1, 3, 2, 8, 4, 5]
