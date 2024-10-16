const readline = require('readline');

// สร้าง interface เพื่อรับ input จากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ถามผู้ใช้ว่า "ทายชื่อของฉันสิ"
rl.question('ทายชื่อของฉันสิ: ', (userInput) => {
  // กำหนดชื่อของคุณ
  const myName = "Javascript";
  
  // ตรวจสอบว่าข้อมูลที่รับเข้ามาตรงกับชื่อของคุณหรือไม่
  if (userInput === myName) {
    console.log("ถูกต้อง");
  } else {
    console.log("ผิด");
  }
  
  // ปิด interface
  rl.close();
});
