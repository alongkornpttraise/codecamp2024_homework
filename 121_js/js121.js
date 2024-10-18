const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
  ];
  
  // ฟังก์ชันคำนวณอายุจากวันเกิด
  const calculateAge = birthDate => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    
    // ตรวจสอบเดือนหรือวันที่ถ้าเลยวันเกิดมาแล้ว
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };
  
  // ใช้ map เพื่อสร้าง array ใหม่ที่มีการเพิ่ม age
  const result = array.map(item => ({
    name: item.name,
    birth: item.birth,
    age: calculateAge(item.birth)
  }));
  
  console.log(result);
  