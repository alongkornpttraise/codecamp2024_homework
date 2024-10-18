let str = 'I live in Thailand';

// แปลง string เป็นตัวพิมพ์เล็กทั้งหมดและลบช่องว่างออก
let result = str
  .toLowerCase()
  .split('')
  .filter(char => char !== ' ') // กรองเฉพาะตัวอักษร (ไม่เอาช่องว่าง)
  .reduce((acc, char) => {
    // ถ้ามีตัวอักษรนี้อยู่แล้วใน acc ให้เพิ่มค่า
    if (acc[char]) {
      acc[char]++;
    } else {
      // ถ้ายังไม่มีตัวอักษรนี้ให้ตั้งค่าเป็น 1
      acc[char] = 1;
    }
    return acc;
  }, {});

console.log(result);
// ผลลัพธ์: { i: 4, l: 2, v: 1, e: 1, n: 2, t: 1, h: 1, a: 2, d: 1 }
