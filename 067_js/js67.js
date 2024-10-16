const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// สร้าง Constructor Function ชื่อ Calculator
function Calculator() {
  // Method สำหรับรับค่า input 2 ค่า
  this.read = function() {
    return new Promise((resolve) => {
      rl.question('Enter the first number: ', (firstInput) => {
        this.a = parseFloat(firstInput);
        rl.question('Enter the second number: ', (secondInput) => {
          this.b = parseFloat(secondInput);
          resolve(); // จบการรับ input
        });
      });
    });
  };

  // Method สำหรับคำนวณผลบวก
  this.sum = function() {
    return this.a + this.b;
  };

  // Method สำหรับคำนวณผลคูณ
  this.mul = function() {
    return this.a * this.b;
  };
}

// สร้าง instance ของ Calculator
const calculator2 = new Calculator();

// เรียกใช้ method read เพื่อรับค่า แล้วแสดงผลลัพธ์ของ sum และ mul
calculator2.read().then(() => {
  console.log('Sum:', calculator2.sum()); // แสดงผลบวกของเลขทั้งสอง
  console.log('Multiplication:', calculator2.mul()); // แสดงผลคูณของเลขทั้งสอง
  rl.close(); // ปิด readline interface
});
