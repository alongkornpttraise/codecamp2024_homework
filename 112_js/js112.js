const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
];

// ใช้ findIndex เพื่อหา index ที่มี id เท่ากับ 2
const index = tasks.findIndex(task => task.id === 2);

console.log(index);  // ผลลัพธ์: 1