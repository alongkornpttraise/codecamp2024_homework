// โจทย์ที่ 1: ค่าที่มากกว่า 10
const array1 = [9, 17, 23, 5];
const result1 = array1.filter(num => num > 10);
console.log("Result 1 (ค่าที่มากกว่า 10):", result1);  // ผลลัพธ์: [17, 23]

// โจทย์ที่ 2: ค่าที่เป็นเลขคี่
const array2 = [1, 2, 3, 4];
const result2 = array2.filter(num => num % 2 !== 0);
console.log("Result 2 (ค่าที่เป็นเลขคี่):", result2);  // ผลลัพธ์: [1, 3]

// โจทย์ที่ 3: ค่าที่ประเภทข้อมูลเป็น Number
const array3 = [1, '1', 2, {}];
const result3 = array3.filter(item => typeof item === 'number');
console.log("Result 3 (ค่าที่เป็น Number):", result3);  // ผลลัพธ์: [1, 2]
