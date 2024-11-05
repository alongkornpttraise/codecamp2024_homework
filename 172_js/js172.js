const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];
  
  // ใช้ for...of loop และ destructuring ในแต่ละ iteration พร้อมกำหนดค่าเริ่มต้นให้ age
  for (const { user, age = "unknown" } of users) {
    console.log(`user: ${user}, age: ${age}`);
  }
  