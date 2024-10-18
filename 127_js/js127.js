const array = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
  ];
  
  // ใช้ filter() เพื่อกรองข้อมูลที่ id ไม่เท่ากับ 4
  const result = array.filter(item => item.id !== 4);
  
  console.log(result);