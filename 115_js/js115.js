// โจทย์ที่ 1: คูณทุกค่าใน array ด้วย 2
const array1 = [1, 2, 30, 400];
const result1 = array1.map(num => num * 2);
console.log("Result 1:", result1);  // ผลลัพธ์: [2, 4, 60, 800]

// โจทย์ที่ 2: แปลงทุกค่าใน array เป็น string
const array2 = [1, 2, 3, 4];
const result2 = array2.map(num => String(num));
console.log("Result 2:", result2);  // ผลลัพธ์: ["1", "2", "3", "4"]

// โจทย์ที่ 3: แสดงชนิดข้อมูล (type) ของแต่ละ element ใน array
const array3 = [1, '1', 2, {}];
const result3 = array3.map(item => typeof item);
console.log("Result 3:", result3);  // ผลลัพธ์: ["number", "string", "number", "object"]
