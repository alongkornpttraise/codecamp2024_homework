const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Constructor Function: Accumulator
function Accumulator(startingValue) {
  this.currentValue = startingValue;

  // Method สำหรับรับค่า input และบวกเข้ากับค่า currentValue
  this.read = function() {
    return new Promise((resolve) => {
      rl.question('Enter a number to add: ', (input) => {
        const number = parseFloat(input);
        if (!isNaN(number)) {
          this.currentValue += number;
        } else {
          console.log('Invalid input, please enter a valid number.');
        }
        resolve();
      });
    });
  };

  // Method สำหรับแสดงค่า currentValue
  this.show = function() {
    console.log('Current Value:', this.currentValue);
  };
}

// สร้าง instance ของ Accumulator โดยเริ่มต้นด้วยค่า 10
const accumulator = new Accumulator(10);

// ใช้ method read เพื่อรับค่า input และเพิ่มเข้ากับ currentValue
accumulator.read().then(() => {
  accumulator.show(); // แสดงค่า currentValue หลังจากเพิ่มค่าเข้าไป
  rl.close(); // ปิด readline interface
});
