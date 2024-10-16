const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ฟังก์ชันสำหรับรับค่าจากผู้ใช้งาน
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  // รับค่าจากผู้ใช้งาน
  const username = await askQuestion("Enter your username: ");
  const email = await askQuestion("Enter your email: ");
  const password = await askQuestion("Enter your password: ");
  
  // สร้าง object user โดยใช้ค่าในตัวแปรที่รับมา
  const user = {
    username: username,
    email: email,
    password: password
  };

  // แสดงผล object user ใน console
  console.log("User object:", user);

  // ปิด readline interface
  rl.close();
}

// เรียกใช้งานฟังก์ชัน main
main();
