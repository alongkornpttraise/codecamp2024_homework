const cloneObject = (obj) => {
    return { ...obj };
  };
  
  // ทดสอบฟังก์ชัน
  const originalObject = { name: "Alice", age: 25, city: "Bangkok" };
  const clonedObject = cloneObject(originalObject);
  
  console.log("Original Object:", originalObject); // { name: 'Alice', age: 25, city: 'Bangkok' }
  console.log("Cloned Object:", clonedObject);     // { name: 'Alice', age: 25, city: 'Bangkok' }
  
  // ตรวจสอบว่า originalObject กับ clonedObject เป็นคนละ object กัน
  console.log(originalObject === clonedObject); // false
  