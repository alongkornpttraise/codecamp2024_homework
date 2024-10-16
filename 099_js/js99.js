const a = [1, 5, 7, 11];
const b = [2, 3, 6];

// ใช้ map เพื่อคูณ element ในตำแหน่งเดียวกันของทั้งสอง array
const result = a.map((value, index) => {
    return value * (b[index] !== undefined ? b[index] : 1); // ถ้าไม่มีค่าใน b ให้ใช้ค่า 1
});

console.log(result);  // ผลลัพธ์: [2, 15, 42, 11]
