const readline = require('readline');

// สร้าง interface เพื่อรับ input จากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ถามผู้ใช้ให้ใส่ตัวเลขแรก
rl.question('กรุณาใส่ตัวเลขตัวแรก: ', (input1) => {
  // ถามผู้ใช้ให้ใส่ตัวเลขที่สอง
  rl.question('กรุณาใส่ตัวเลขตัวที่สอง: ', (input2) => {
    // แปลง input เป็นตัวเลข
    const number1 = parseFloat(input1);
    const number2 = parseFloat(input2);

    // ตรวจสอบว่า input ทั้งสองเป็นตัวเลขหรือไม่
    if (isNaN(number1) || isNaN(number2)) {
      console.log("Invalid number");
    } else {
      // คำนวณผลบวกของตัวเลขทั้งสอง
      const sum = number1 + number2;
      console.log(`ผลบวกของตัวเลขทั้งสองคือ: ${sum}`);
    }

    // ปิด interface
    rl.close();
  });
});
