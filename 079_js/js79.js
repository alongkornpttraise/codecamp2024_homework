// ฟังก์ชันคำนวณความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้า
function calculateDiagonal() {
    // รับค่าความกว้างและความยาวจาก input
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    // ตรวจสอบว่าค่าที่กรอกเป็นตัวเลขหรือไม่
    if (isNaN(width) || isNaN(height)) {
        document.getElementById('result').innerText = "Please enter valid numbers for both width and height.";
        return;
    }

    // คำนวณความยาวเส้นทแยงมุม
    const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

    // แสดงผลลัพธ์
    document.getElementById('result').innerText = `Diagonal: ${diagonal.toFixed(2)} mm`;
}
