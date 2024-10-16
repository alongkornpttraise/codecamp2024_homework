const readline = require('readline');

// สร้าง interface เพื่อรับ input จากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ถามผู้ใช้ให้ใส่คะแนน
rl.question('กรุณาใส่คะแนน: ', (input) => {
  // แปลง input เป็นตัวเลข
  const score = parseFloat(input);

  // ตรวจสอบว่า input เป็นตัวเลขหรือไม่
  if (isNaN(score)) {
    console.log("Invalid number");
  } else {
    // คำนวณเกรดจากคะแนน
    let grade;
    if (score >= 80) {
      grade = 'A';
    } else if (score >= 70 && score < 80) {
      grade = 'B';
    } else if (score >= 60 && score < 70) {
      grade = 'C';
    } else if (score >= 50 && score < 60) {
      grade = 'D';
    } else if (score < 50) {
      grade = 'F';
    }

    // แสดงผลเกรด
    console.log(`เกรดของคุณคือ: ${grade}`);
  }

  // ปิด interface
  rl.close();
});
