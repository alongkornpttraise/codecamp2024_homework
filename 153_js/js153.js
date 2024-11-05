const cloneArray = (arr) => {
    return [...arr];
  };
  
  // ทดสอบฟังก์ชัน
  const originalArray = [1, 2, 3, 4];
  const clonedArray = cloneArray(originalArray);
  
  console.log("Original Array:", originalArray); // [1, 2, 3, 4]
  console.log("Cloned Array:", clonedArray);     // [1, 2, 3, 4]
  
  // ตรวจสอบว่า originalArray กับ clonedArray เป็นคนละ array กัน
  console.log(originalArray === clonedArray); // false
  