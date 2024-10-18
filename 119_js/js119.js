const array = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];
  
  // ใช้ map() เพื่อดึงค่า age ของแต่ละ object ใน array
  const result = array.map(item => item.age);
  
  console.log(result);  // ผลลัพธ์: [14, 18, 32]
  