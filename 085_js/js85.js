function truncate(str, length) {
    // ถ้าความยาวของข้อความสั้นกว่าหรือเท่ากับความยาวที่กำหนด ให้ return ข้อความเดิม
    if (str.length <= length) {
        return str;
    }
    
    // ตัดข้อความให้เท่ากับความยาวที่กำหนดแล้วต่อท้ายด้วย "…"
    return str.slice(0, length - 1) + '…';
}

// ทดสอบฟังก์ชัน
console.log(truncate('Hello, world!', 8));     // ผลลัพธ์: "Hello,…"
console.log(truncate('Hello', 10));            // ผลลัพธ์: "Hello" (ข้อความสั้นกว่าความยาวที่กำหนด)
console.log(truncate('This is a long sentence', 15));  // ผลลัพธ์: "This is a lo…"
