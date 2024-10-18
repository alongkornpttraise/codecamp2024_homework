let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];
  
  // ใช้ flat() เพื่อกระจาย element ใน array ชั้นนอกสุด
  let result = flattened.flat();
  
  console.log(result); // ผลลัพธ์: [0, 1, 2, 3, 4, 5]
  