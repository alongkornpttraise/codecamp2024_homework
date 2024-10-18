let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let countNames = names.reduce((acc, name) => {
  // ถ้ามีชื่อนี้อยู่แล้วใน acc ให้เพิ่มค่า
  if (acc[name]) {
    acc[name]++;
  } else {
    // ถ้ายังไม่มีชื่อนี้ให้ตั้งค่าเป็น 1
    acc[name] = 1;
  }
  return acc;
}, {});

console.log(countNames); 
// ผลลัพธ์: { Jack: 1, John: 3, Bill: 2, Rick: 1 }
