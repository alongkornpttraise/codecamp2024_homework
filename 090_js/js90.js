function collectNumbers() {
    const numbers = [];  // สร้าง array สำหรับเก็บตัวเลข
    let input;

    // วนลูปรับค่าจาก prompt ไปเรื่อยๆ จนกว่าจะได้ค่าไม่ใช่ตัวเลขหรือ cancel
    while (true) {
        input = prompt('Please enter a number:'); // รับค่าจากผู้ใช้

        // ถ้าผู้ใช้กด cancel หรือใส่ค่าว่าง ให้หยุดการทำงานของลูป
        if (input === null || input === '') {
            break;
        }

        // แปลงค่า input เป็นตัวเลข
        const number = Number(input);

        // ตรวจสอบว่าค่าเป็นตัวเลขหรือไม่ ถ้าไม่ใช่ให้หยุดลูป
        if (isNaN(number)) {
            alert('Please enter a valid number.');
            continue; // ถ้าไม่ใช่ตัวเลข ให้กลับไปถามใหม่
        }

        // ถ้าเป็นตัวเลข ให้นำไปเก็บใน array
        numbers.push(number);
    }

    // หาผลรวมของตัวเลขทั้งหมดใน array
    const sum = numbers.reduce((total, num) => total + num, 0);

    // แสดงผลรวมของตัวเลข
    alert(`Sum of numbers: ${sum}`);
}

// เรียกใช้งานฟังก์ชัน
collectNumbers();
