// ฟังก์ชันคำนวณการแปลงจากองศาเป็นเรเดียน
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// ฟังก์ชันที่เรียกใช้เมื่อผู้ใช้กดปุ่ม Convert
function convertToRadians() {
    const degrees = parseFloat(document.getElementById('degrees').value);

    if (isNaN(degrees)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }

    const radians = degreesToRadians(degrees);
    document.getElementById('result').innerText = `${degrees} degrees is ${radians.toFixed(4)} radians.`;

    const radianText = document.getElementById('radian-text');
    radianText.innerText = `${radians.toFixed(4)} rad`;

    // แสดงและหมุนขีดสีน้ำเงินตามมุมที่กำหนด
    const angleIndicator = document.getElementById('angle-indicator');
    angleIndicator.style.transform = `rotate(${degrees}deg)`;
    angleIndicator.style.display = 'block';
}

// ฟังก์ชันไปยังหน้าถัดไป
function goToNextStep() {
    window.location.href = "circle-area.html"; // เปลี่ยนหน้าจอไปยัง circle-area.html
}
