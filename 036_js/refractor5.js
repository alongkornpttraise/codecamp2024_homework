function calculateGrade() {
    // รับคะแนนจากผู้ใช้
    let score = prompt('Enter your score:');
    score = parseFloat(score);

    // ใช้ Ternary Operator คำนวณเกรด
    let grade = (score >= 80) ? 'A' :
                (score >= 70) ? 'B' :
                (score >= 60) ? 'C' :
                (score >= 50) ? 'D' :
                'F';

    // แสดงผลเกรด
    alert(`Your grade is: ${grade}`);
}
