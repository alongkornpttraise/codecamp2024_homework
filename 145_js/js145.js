const multiply = (...numbers) => {
    return numbers.reduce((acc, num) => acc * num, 1);
  };
  
  console.log(multiply(2, 3, 4));       // ผลลัพธ์: 24
  console.log(multiply(5, 10));         // ผลลัพธ์: 50
  console.log(multiply(1, 2, 3, 4, 5)); // ผลลัพธ์: 120
  console.log(multiply());              // ผลลัพธ์: 1 (ไม่มีค่าใดๆ ให้ผลลัพธ์เป็นค่าเริ่มต้น)
  