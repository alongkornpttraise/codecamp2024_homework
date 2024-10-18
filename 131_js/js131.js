const arr = [-3, 2, 0, -7, 4, 6];

// ใช้ sort() เพื่อเรียงลำดับตามค่า element ยกกำลัง 2 จากน้อยไปหามาก
const sortedArr = arr.sort((a, b) => (a * a) - (b * b));

console.log(sortedArr);  // ผลลัพธ์: [0, 2, -3, 4, 6, -7]
