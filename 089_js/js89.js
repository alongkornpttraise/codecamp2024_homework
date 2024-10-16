const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
];

const summary = sales.map(item => {
    // คำนวณ netPrice โดยตรวจสอบว่ามี discount หรือไม่
    const netPrice = item.discount ? item.price * (1 - item.discount) : item.price;

    // คืนค่าเป็น object ที่มี netPrice
    return { netPrice: netPrice };
});

// แสดงผล summary
console.log(summary);
// ผลลัพธ์: [ { netPrice: 900 }, { netPrice: 475 }, { netPrice: 100 } ]
