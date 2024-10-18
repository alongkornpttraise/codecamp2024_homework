const nums = [-3, 2, 11, -7, 4, 6];

// ใช้ reduce() เพื่อคำนวณผลคูณของ element ทั้งหมดใน array
const product = nums.reduce((acc, num) => acc * num, 1);

console.log(product);  // ผลลัพธ์: 5544
