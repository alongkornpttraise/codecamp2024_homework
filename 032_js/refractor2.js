function checkBrowser() {
    // รับค่า input จาก prompt
    let browser = prompt('Please enter your browser:');

    // ใช้ if else เพื่อตรวจสอบค่าและแสดง alert
    if (browser === 'Edge') {
        alert("You've got the Edge!");
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }
}
