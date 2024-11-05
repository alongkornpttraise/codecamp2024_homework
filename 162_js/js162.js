function checkAge({ firstName, lastName, age }) {
    if (age > 18) {
      console.log(`Hello ${firstName} ${lastName}`);
    } else {
      console.log("ไม่มีสิทธิ์เข้าใช้งาน");
    }
  }
  
  // ทดสอบฟังก์ชัน
  const user1 = { firstName: "John", lastName: "Doe", age: 20 };
  const user2 = { firstName: "Jane", lastName: "Smith", age: 18 };
  
  checkAge(user1); // Hello John Doe
  checkAge(user2); // ไม่มีสิทธิ์เข้าใช้งาน
  