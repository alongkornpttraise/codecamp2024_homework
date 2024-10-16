function clone(arr) {
    // ใช้ spread operator เพื่อ clone array
    return [...arr];
}

// ทดสอบฟังก์ชัน
const originalArray = [1, 2, 3, 4];
const clonedArray = clone(originalArray);

console.log(clonedArray);  // ผลลัพธ์: [1, 2, 3, 4]
console.log(clonedArray === originalArray);  // ผลลัพธ์: false (เป็นคนละ array)
