function multiplyNumeric(obj, num) {
    // วนซ้ำผ่านทุก property ใน object
    for (let key in obj) {
        // ตรวจสอบว่าค่าเป็น number หรือไม่
        if (typeof obj[key] === 'number') {
            obj[key] *= num; // คูณค่าใน property ด้วย num
        }
    }
}

// ตัวอย่างการใช้งาน
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

multiplyNumeric(menu, 3);

console.log(menu);
// Output:
// {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// }
