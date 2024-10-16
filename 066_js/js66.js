const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calculator = {
  // Method สำหรับรับค่า input 2 ค่า
  read() {
    return new Promise((resolve) => {
      rl.question('Enter the first number: ', (firstInput) => {
        this.a = parseFloat(firstInput);
        rl.question('Enter the second number: ', (secondInput) => {
          this.b = parseFloat(secondInput);
          resolve();  // จบการรับ input
        });
      });
    });
  },

  // Method สำหรับคำนวณผลบวก
  sum() {
    return this.a + this.b;
  },

  // Method สำหรับคำนวณผลคูณ
  mul() {
    return this.a * this.b;
  }
};

// เรียกใช้ method read เพื่อรับค่า แล้วแสดงผลลัพธ์ของ sum และ mul
calculator.read().then(() => {
  console.log('Sum:', calculator.sum()); // แสดงผลบวกของเลขทั้งสอง
  console.log('Multiplication:', calculator.mul()); // แสดงผลคูณของเลขทั้งสอง
  rl.close();  // ปิด readline interface
});
