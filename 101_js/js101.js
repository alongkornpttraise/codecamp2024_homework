function first(arr, n) {
    // ถ้า n ไม่ถูกกำหนด หรือ n เท่ากับ 1 ให้ return element แรกของ arr
    if (n === undefined || n === 1) {
        return arr[0] !== undefined ? arr[0] : [];
    }

    // ถ้า n มากกว่า 1 ให้ return n element แรกของ arr
    return arr.slice(0, n);
}

// ทดสอบฟังก์ชัน
console.log(first([7, 9, 0, -2]));       // ผลลัพธ์: 7
console.log(first([], 3));                // ผลลัพธ์: []
console.log(first([7, 9, 0, -2], 3));     // ผลลัพธ์: [7, 9, 0]
