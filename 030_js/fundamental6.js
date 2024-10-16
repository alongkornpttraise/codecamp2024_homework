function checkInput() {
    // รับค่าจากฟิลด์อินพุต
    let input = parseInt(document.getElementById('inputValue').value, 10);

    // ใช้ switch case เพื่อตรวจสอบค่าและแสดง alert
    switch (input) {
        case 1:
            alert("One");
            break;
        case 0:
            alert("Zero");
            break;
        case -1:
            alert("Minus");
            break;
        default:
            alert("Invalid number");
    }
}
