// ฟังก์ชันคำนวณพื้นที่วงกลม
function calculateArea() {
    const radius = parseFloat(document.getElementById('radius').value);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById('area-result').innerText = "Please enter a valid positive number.";
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById('area-result').innerText = `The area of the circle is ${area.toFixed(4)} square units.`;
}

// ฟังก์ชันกลับไปยังหน้าแรก
function goToHome() {
    window.location.href = "index.html"; // เปลี่ยนหน้าจอไปยัง index.html
}
