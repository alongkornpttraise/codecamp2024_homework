function findPrimeNumbers(start, end) {
    // สร้างลิสต์สำหรับเก็บเลขจำนวนเฉพาะ
    const primeNumbers = [];

    // ฟังก์ชันสำหรับตรวจสอบว่าตัวเลขเป็นจำนวนเฉพาะหรือไม่
    function isPrime(num) {
        if (num < 2) return false;  // จำนวนเฉพาะต้องมากกว่า 1
        for (let i = 2; i <= Math.sqrt(num); i++) {  // ตรวจสอบตัวหารที่น้อยกว่าหรือเท่ากับรากที่สองของ num
            if (num % i === 0) return false;  // ถ้า num ถูกหารลงตัว แสดงว่าไม่ใช่จำนวนเฉพาะ
        }
        return true;  // ถ้าไม่มีตัวหารใดๆ ที่ทำให้หารลงตัว ก็เป็นจำนวนเฉพาะ
    }

    // วนลูปตั้งแต่ start ถึง end เพื่อหาจำนวนเฉพาะ
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);  // ถ้าเป็นจำนวนเฉพาะ ให้เพิ่มลงในลิสต์
        }
    }

    return primeNumbers;  // คืนค่าลิสต์ของเลขจำนวนเฉพาะ
}

// ตัวอย่างการใช้งาน
console.log(findPrimeNumbers(10, 30)); // Output: [11, 13, 17, 19, 23, 29]
console.log(findPrimeNumbers(1, 10));  // Output: [2, 3, 5, 7]
console.log(findPrimeNumbers(14, 16)); // Output: []
