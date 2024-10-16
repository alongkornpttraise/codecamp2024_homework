function checkLogin() {
    // รับค่า username จาก prompt
    let login = prompt('Enter username');

    // ใช้ Ternary Operator เพื่อตรวจสอบค่าและกำหนดข้อความ
    let message = (login == 'Employee') ? 'Hello' :
                  (login == 'Director') ? 'Greetings' :
                  (login == '') ? 'No login' :
                  '';

    // แสดงผลข้อความ
    alert(message);
}
