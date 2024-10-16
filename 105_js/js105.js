function checkEmptyObj(obj) {
    return Object.keys(obj).length === 0;
}

// ทดสอบฟังก์ชัน
console.log(checkEmptyObj({}));          // ผลลัพธ์: true (เป็น object ว่าง)
console.log(checkEmptyObj({name: 'John'})); // ผลลัพธ์: false (ไม่ใช่ object ว่าง)
console.log(checkEmptyObj({age: 25, city: 'Bangkok'})); // ผลลัพธ์: false (ไม่ใช่ object ว่าง)
