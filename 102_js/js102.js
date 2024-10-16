function dashToCamelCase(str) {
    return str.split('-')  // แยกคำที่มีขีดออกเป็น array
              .map((word, index) => {
                  if (index === 0) {
                      return word;  // คำแรกไม่เปลี่ยนแปลง
                  }
                  // คำถัดไปให้ทำตัวอักษรแรกเป็นตัวใหญ่
                  return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join('');  // รวมคำกลับเป็น string เดียวกัน
}

// ทดสอบฟังก์ชัน
console.log(dashToCamelCase('background-color'));  // ผลลัพธ์: backgroundColor
console.log(dashToCamelCase('font-size'));         // ผลลัพธ์: fontSize
console.log(dashToCamelCase('border-radius'));     // ผลลัพธ์: borderRadius
