function topSalaries(salaries) {
    // ตรวจสอบว่าถ้า salaries เป็น empty object ให้ return null
    if (Object.keys(salaries).length === 0) {
      return null;
    }
  
    // ใช้ Object.entries เพื่อแปลง salaries เป็น array ของ [key, value]
    // แล้วหา entry ที่มีค่าสูงสุด
    let maxSalary = -Infinity;
    let topEmployee = null;
  
    for (const [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        topEmployee = name;
      }
    }
  
    return topEmployee;
  }
  
  // ทดสอบฟังก์ชัน
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250
  };
  
  console.log(topSalaries(salaries)); // Pete
  