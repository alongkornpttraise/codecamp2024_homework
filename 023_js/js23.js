const readline = require('readline');

// สร้าง interface เพื่อรับ input จากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ถามผู้ใช้ให้ใส่ตัวเลข
rl.question('กรุณาใส่ตัวเลข: ', (userInput) => {
  // แปลง input เป็นตัวเลข
  const number = parseFloat(userInput);

  // ตรวจสอบว่า input เป็นตัวเลขหรือไม่
  if (isNaN(number)) {
    console.log("Invalid number");
  } else {
    // ตรวจสอบว่าหารด้วย 2 ลงตัวหรือไม่
    if (number % 2 === 0) {
      console.log("Even number");
    } else {
      console.log("Odd number");
    }
  }

  // ปิด interface
  rl.close();
});
