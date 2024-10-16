function formatNumber(num) {
    // ใช้ toFixed(2) เพื่อจัดรูปแบบให้มีทศนิยม 2 ตำแหน่ง
    return num.toFixed(2);
}

// ตัวอย่างการใช้งาน
console.log(formatNumber(10));     // Output: "10.00"
console.log(formatNumber(5.1));    // Output: "5.10"
console.log(formatNumber(3.1289)); // Output: "3.12"
