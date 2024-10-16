function rollDice() {
    // Math.floor(Math.random() * 6) จะให้ผลลัพธ์เป็นจำนวนเต็มตั้งแต่ 0 ถึง 5
    // เราจึงบวก 1 เพื่อให้ช่วงเป็น 1 ถึง 6
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // ตัวอย่างการใช้งาน
  console.log(rollDice());  // ผลลัพธ์จะเป็นตัวเลขระหว่าง 1 ถึง 6
  console.log(rollDice());  // ผลลัพธ์จะเป็นตัวเลขระหว่าง 1 ถึง 6
  console.log(rollDice());  // ผลลัพธ์จะเป็นตัวเลขระหว่าง 1 ถึง 6
  