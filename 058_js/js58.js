const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Object เก็บข้อมูลพนักงาน
  const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };
  
  // ฟังก์ชันสำหรับรับข้อมูลชื่อพนักงาน
  function findEmployee() {
    rl.question('Enter employee name: ', (name) => {
      const employee = employees[name.toLowerCase()]; // ค้นหาข้อมูลพนักงานโดยไม่สนใจตัวพิมพ์ใหญ่พิมพ์เล็ก
  
      if (employee) {
        console.log(`Name: ${name}, salary: ${employee.salary}, address: ${employee.address.district}, ${employee.address.province}`);
      } else {
        console.log('Not Found');
      }
  
      rl.close(); // ปิดอินเตอร์เฟซเมื่อเสร็จสิ้นการใช้งาน
    });
  }
  
  // เริ่มการรับข้อมูลจากผู้ใช้
  findEmployee();