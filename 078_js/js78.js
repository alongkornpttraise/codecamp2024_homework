// ฟังก์ชันคำนวณความยาวเส้นรอบวงของวงกลม
function calculateCircumference() {
    // รับค่าเส้นผ่านศูนย์กลางจาก input
    const diameter = document.getElementById('diameter').value;

    // คำนวณรัศมี (radius) จากเส้นผ่านศูนย์กลาง
    const radius = diameter / 2;

    // คำนวณความยาวเส้นรอบวง
    const circumference = 2 * Math.PI * radius;

    // แสดงผลลัพธ์
    document.getElementById('result').innerText = `Circumference: ${circumference.toFixed(2)} mm`;
}
