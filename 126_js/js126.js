const array = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 }
  ];
  
  // ใช้ filter() เพื่อกรองผู้ที่มีอายุไม่น้อยกว่า 18
  const result = array.filter(person => person.age >= 18);
  
  console.log(result);