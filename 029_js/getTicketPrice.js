function getTicketPrice() {
    // รับค่าจากฟิลด์อินพุต
    let zone = document.getElementById('zone').value.toUpperCase().trim();
    let price;

    // ตรวจสอบ zone และกำหนดราคาบัตร
    switch (zone) {
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
            price = 4000;
            break;
        case 'SF':
        case 'SG':
        case 'SH':
        case 'SI':
        case 'SJ':
        case 'SK':
        case 'SL':
        case 'SM':
            price = 5000;
            break;
        case 'SB':
        case 'SC':
        case 'SD':
        case 'SE':
            price = 5500;
            break;
        case 'AA':
        case 'BB':
            price = 6500;
            break;
        default:
            price = "Zone not recognized. Please enter a valid zone.";
    }

    // แสดงราคาบัตรหรือข้อความแจ้งเตือน
    document.getElementById('result').innerText = typeof price === "number" ? `ราคาบัตร: ${price} บาท` : price;
}
