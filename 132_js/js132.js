const arr = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
  ];
  
  // ใช้ sort() เพื่อเรียงลำดับตามค่า age จากน้อยไปหามาก
  const sortedArr = arr.sort((a, b) => a.age - b.age);
  
  console.log(sortedArr);
  