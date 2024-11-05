let user = {
    name: 'John',
    years: 27
  };
  
  // ใช้ Object Destructuring พร้อมกำหนดค่าเริ่มต้นให้กับ isAdmin
  let { name, years: age, isAdmin = false } = user;
  
  console.log(name);    // "John"
  console.log(age);     // 27
  console.log(isAdmin); // false
  