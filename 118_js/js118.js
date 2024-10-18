const array = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];
  
  // ใช้ map() เพื่อดึงค่า name ของแต่ละ object ใน array
  const result = array.map(item => item.name);
  
  console.log(result);  // ผลลัพธ์: ["apple", "banana", "watermelon"]
  