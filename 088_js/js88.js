function squareArr(arr) {
    // ใช้ map เพื่อสร้าง array ใหม่ โดยยกกำลังสองของแต่ละ element
    return arr.map(num => num * num);
}

// ทดสอบฟังก์ชัน
const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr)); // [4, 9, 25, 49, 121]
