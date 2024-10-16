const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userObject = {}; // Object ที่จะเก็บข้อมูล

// ฟังก์ชันรับข้อมูล key และ value
function askForKey() {
  rl.question('Enter key (or type "stop" to finish): ', (key) => {
    if (key.toLowerCase() === 'stop') {
      console.log('Final object:', userObject);
      rl.close();
    } else {
      rl.question('Enter value: ', (value) => {
        userObject[key] = value; // เพิ่ม key และ value เข้าไปใน object
        askForKey(); // ถาม key และ value ใหม่
      });
    }
  });
}

// เริ่มการรับข้อมูล
askForKey();
