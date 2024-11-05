const updateIndexThree = (array1) => {
    // สร้าง array ใหม่โดยใช้ spread operator และเปลี่ยนค่าที่ index 3 ให้เป็นค่าเดิมยกกำลังสอง
    return [
      ...array1.slice(0, 3),       // ค่าก่อน index 3
      array1[3] ** 2,              // ค่าที่ index 3 ยกกำลังสอง
      ...array1.slice(4)           // ค่าหลัง index 3
    ];
  };
  
  const array1 = [2, 4, 6, 3, 8, 10];
  const newArray = updateIndexThree(array1);
  
  console.log("Original array:", array1); // ผลลัพธ์: [2, 4, 6, 3, 8, 10]
  console.log("Updated array:", newArray); // ผลลัพธ์: [2, 4, 6, 9, 8, 10]
  