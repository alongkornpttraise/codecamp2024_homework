const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

// ใช้ find เพื่อหา element ที่มี name เท่ากับ 'cherries'
const result = inventory.find(item => item.name === 'cherries');

console.log(result);  // ผลลัพธ์: { name: 'cherries', quantity: 5 }
