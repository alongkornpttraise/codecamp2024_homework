function sortNumbers() {
    // รับค่าตัวเลขจากฟิลด์อินพุต
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    // เก็บตัวเลขในอาร์เรย์
    let numbers = [num1, num2, num3];

    // จัดเรียงอาร์เรย์จากมากไปน้อย
    numbers.sort((a, b) => b - a);

    // แสดงผลตัวเลขที่เรียงแล้ว
    document.getElementById('result').innerText = `ตัวเลขที่เรียงลำดับ: ${numbers.join(', ')}`;
}
