function checkForbiddenWords(str) {
    // แปลงข้อความทั้งหมดให้เป็นตัวพิมพ์เล็กเพื่อทำการตรวจสอบ
    let lowerStr = str.toLowerCase();
    
    // ตรวจสอบว่ามีคำต้องห้ามหรือไม่
    return lowerStr.includes('xxx') || lowerStr.includes('sex') || lowerStr.includes('porn');
}

// ทดสอบฟังก์ชัน
console.log(checkForbiddenWords('This is XXX content'));  // ผลลัพธ์: true
console.log(checkForbiddenWords('No sensitive words here'));  // ผลลัพธ์: false
console.log(checkForbiddenWords('This is pOrn material'));  // ผลลัพธ์: true
console.log(checkForbiddenWords('The topic is sEX education'));  // ผลลัพธ์: true
