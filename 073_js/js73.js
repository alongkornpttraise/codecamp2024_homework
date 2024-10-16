function calculatePoints(amount) {
    // หารยอดซื้อขายด้วย 100 แล้วปัดเศษลง
    const points = Math.floor(amount / 100);
    return points;
  }
  
  // ตัวอย่างการใช้งาน
  const amount1 = 450; // ควรได้ 4 แต้ม
  const amount2 = 250; // ควรได้ 2 แต้ม
  const amount3 = 99;  // ควรได้ 0 แต้ม
  
  console.log(`Points for amount ${amount1}:`, calculatePoints(amount1)); // Output: 4
  console.log(`Points for amount ${amount2}:`, calculatePoints(amount2)); // Output: 2
  console.log(`Points for amount ${amount3}:`, calculatePoints(amount3)); // Output: 0
  