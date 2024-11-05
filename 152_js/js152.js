const removeRandom = (arr) => {
    // สุ่มตำแหน่งที่จะลบ โดยคำนวณจากความยาวของ array
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    // ใช้ spread operator เพื่อสร้าง array ใหม่ โดยไม่รวม element ที่ตำแหน่งที่ถูกสุ่ม
    return [...arr.slice(0, randomIndex), ...arr.slice(randomIndex + 1)];
  };
  
  // ทดสอบฟังก์ชัน
  console.log(removeRandom([1, 2, 3, 4, 5])); // ผลลัพธ์ที่เป็นไปได้: [1, 2, 4, 5], [1, 3, 4, 5], เป็นต้น
  console.log(removeRandom(['a', 'b', 'c', 'd'])); // ผลลัพธ์ที่เป็นไปได้: ['b', 'c', 'd'], ['a', 'c', 'd'], เป็นต้น
  