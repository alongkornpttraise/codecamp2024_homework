let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// วิธีที่ 1: ใช้ Object.values() เพื่อดึงค่า values ออกมาแล้วรวมกัน
let totalSalary = Object.values(salaries).reduce((sum, salary) => sum + salary, 0);

console.log('Total salary (using Object.values):', totalSalary);

// วิธีที่ 2: ใช้ Object.keys() เพื่อดึงชื่อ key (ชื่อพนักงาน) ออกมา
let keys = Object.keys(salaries);
console.log('Keys (using Object.keys):', keys);

// วิธีที่ 3: ใช้ Object.entries() เพื่อแสดงเป็นคู่ของ key-value
let entries = Object.entries(salaries);
console.log('Entries (using Object.entries):', entries);
