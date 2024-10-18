let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

// ใช้ Set เพื่อเก็บเฉพาะค่าที่ไม่ซ้ำกัน และแปลงกลับเป็น array ด้วย spread operator
let uniqueAlphabets = [...new Set(alphabets)];

console.log(uniqueAlphabets); // ผลลัพธ์: ['a', 'b', 'c', 'e', 'd']
