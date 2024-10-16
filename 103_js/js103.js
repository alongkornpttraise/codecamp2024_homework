function isArray(input) {
    return Array.isArray(input);  // ใช้ Array.isArray เพื่อตรวจสอบว่า input เป็น array หรือไม่
}

// ทดสอบฟังก์ชัน
console.log(isArray([1, 2, 3]));  // ผลลัพธ์: true
console.log(isArray('hello'));    // ผลลัพธ์: false
console.log(isArray({key: 'value'})); // ผลลัพธ์: false
console.log(isArray(123));        // ผลลัพธ์: false
console.log(isArray([]));         // ผลลัพธ์: true
