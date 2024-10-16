function checkAge() {
    // รับค่าอายุจาก prompt
    let age = prompt('How old are you');

    // ใช้ Ternary Operator เพื่อตรวจสอบค่าและกำหนดข้อความ
    let message = (age >= 18) ? 'Allowed' : 'Not allowed';

    // แสดงผลข้อความ
    alert(message);
}
