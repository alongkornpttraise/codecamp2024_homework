function extractCurrencyValue(string, rate) {
    // ลบสัญลักษณ์ $ ออกแล้วแปลงค่าเป็นตัวเลข
    const valueInDollars = parseFloat(string.replace('$', ''));

    // คำนวณค่าเป็นบาท
    const valueInBaht = valueInDollars * rate;

    // คืนค่าผลลัพธ์เป็นสกุลเงินบาทในรูปแบบ 'THBxxxx'
    return `THB${valueInBaht}`;
}

// ทดสอบฟังก์ชัน
console.log(extractCurrencyValue('$120', 30)); // THB3600
