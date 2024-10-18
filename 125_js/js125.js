// โจทย์ที่ 1: ค่าที่ขึ้นต้นด้วยตัว E
const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const result1 = array1.filter(item => item.startsWith('E'));
console.log("Result 1 (ค่าที่ขึ้นต้นด้วยตัว E):", result1);  // ผลลัพธ์: ['Elephant', 'Eagle']

// โจทย์ที่ 2: ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const result2 = array2.filter(item => item === item.toUpperCase());
console.log("Result 2 (ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด):", result2);  // ผลลัพธ์: ['APPLE', 'PEACH']

// โจทย์ที่ 3: ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
const result3 = array3.filter(item => item.toLowerCase().includes('buri'));
console.log("Result 3 (ค่าที่มีคำว่า buri):", result3);  // ผลลัพธ์: ['Chonburi', 'Saraburi']
