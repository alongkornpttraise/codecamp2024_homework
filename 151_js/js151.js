const doubleAndReturnArgs = (arr, ...numbers) => {
    // คูณสองค่าของ numbers และรวมกับ array เดิม
    const doubledNumbers = numbers.map(num => num * 2);
    return [...arr, ...doubledNumbers];
  };
  
  // ทดสอบฟังก์ชัน
  console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
  // ผลลัพธ์: [1, 2, 3, 8, 8]
  
  console.log(doubleAndReturnArgs([2], 10, 4));
  // ผลลัพธ์: [2, 20, 8]
  