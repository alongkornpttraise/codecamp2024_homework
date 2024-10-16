const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fruitsBasket = {}; // Object ที่จะเก็บข้อมูลผลไม้

// ฟังก์ชันสำหรับรับข้อมูลผลไม้
function askForFruit() {
  rl.question('Enter fruit name (or type "stop" to finish): ', (key) => {
    if (key.toLowerCase() === 'stop') {
      console.log('Final fruits basket:', fruitsBasket);
      rl.close();
    } else {
      rl.question('Enter quantity: ', (value) => {
        value = parseInt(value, 10); // แปลงค่า value เป็นตัวเลข
        if (!isNaN(value) && value > 0) { // ตรวจสอบว่าค่าที่ป้อนเป็นตัวเลขที่ถูกต้อง
          if (value > 1) {
            key += 's'; // ถ้าจำนวนมากกว่า 1 เติม s ที่ท้าย key
          }
          fruitsBasket[key] = value; // เพิ่ม key และ value ลงใน object
        } else {
          console.log('Invalid quantity. Please enter a positive number.');
        }
        askForFruit(); // ถามข้อมูลใหม่
      });
    }
  });
}

// เริ่มการรับข้อมูล
askForFruit();
