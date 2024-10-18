function ucFirst(str) {
    if (!str) return str;  // ตรวจสอบว่าถ้า string ว่าง ให้คืนค่ากลับไปเหมือนเดิม
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ทดสอบฟังก์ชัน
console.log(ucFirst('hello'));  // ผลลัพธ์: Hello
console.log(ucFirst('world'));  // ผลลัพธ์: World
console.log(ucFirst(''));       // ผลลัพธ์: (คืนค่าว่าง)
