const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  const groupedBySex = persons.reduce((acc, person) => {
    // ตรวจสอบว่ามี key ของเพศ (M หรือ F) อยู่ใน acc หรือยัง
    if (!acc[person.sex]) {
      acc[person.sex] = [];  // ถ้ายังไม่มี ให้สร้าง array ว่าง
    }
    // เพิ่มชื่อเข้าไปใน array ของ key เพศนั้นๆ
    acc[person.sex].push(person.name);
    return acc;
  }, {});
  
  console.log(groupedBySex);
  