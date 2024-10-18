const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
  
  function getWeightedAverage(scores) {
    // คำนวณผลรวมของคะแนนที่คูณน้ำหนัก
    const totalWeightedScore = scores.reduce((acc, item) => acc + item.score * item.weight, 0);
    
    // คำนวณผลรวมของน้ำหนักทั้งหมด
    const totalWeight = scores.reduce((acc, item) => acc + item.weight, 0);
    
    // หาค่าเฉลี่ยแบบถ่วงน้ำหนักโดยการหารผลรวมของคะแนนที่ถ่วงน้ำหนักด้วยผลรวมของน้ำหนัก
    return totalWeightedScore / totalWeight;
  }
  
  const result = getWeightedAverage(scores);
  console.log(result); // ผลลัพธ์: 89
  