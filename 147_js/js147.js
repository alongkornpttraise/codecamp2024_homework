const mergeObjects = (...objects) => {
    // ใช้ Object.assign โดยเรียงพารามิเตอร์จากหลังมาหน้าเพื่อให้ค่าของ key ตัวแรกถูกยึดตามลำดับที่มาก่อน
    return Object.assign({}, ...objects.reverse());
  };
  
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { b: 20, d: 4 };
  const obj3 = { c: 30, e: 5 };
  
  console.log(mergeObjects(obj1, obj2, obj3));
  // ผลลัพธ์: { a: 1, b: 2, c: 3, d: 4, e: 5 }
  