function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(random(1, 5));  // ผลลัพธ์จะเป็นตัวเลขตั้งแต่ 1 (รวม) ถึง 5 (ไม่รวม)
  console.log(random(0, 1));  // ผลลัพธ์จะเป็นตัวเลขตั้งแต่ 0 (รวม) ถึง 1 (ไม่รวม)
  console.log(random(10, 20));  // ผลลัพธ์จะเป็นตัวเลขตั้งแต่ 10 (รวม) ถึง 20 (ไม่รวม)
  