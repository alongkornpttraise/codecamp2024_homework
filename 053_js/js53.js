function calSalary(salaries) {
    // ตรวจสอบว่า object ว่างหรือไม่ ถ้าว่าง return 0
    if (Object.keys(salaries).length === 0) {
        return 0;
    }

    // คำนวณผลรวมของ salaries
    let total = 0;
    for (let key in salaries) {
        total += salaries[key];
    }

    return total;
}

// ตัวอย่างการใช้งาน
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

console.log(calSalary(salaries)); // Output: 390
