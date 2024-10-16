const array = [29, 17, 13, 47, 23, 31];

let sum = 0;  // สร้างตัวแปรเพื่อเก็บผลรวม

// ใช้ forEach เพื่อวนลูปแต่ละ element และเพิ่มค่าลงในตัวแปร sum
array.forEach(function(element) {
    sum += element;
});

console.log("ผลรวมของ array:", sum);  // ผลลัพธ์: 160
