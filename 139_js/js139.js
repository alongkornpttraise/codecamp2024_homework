let str = '31 45 12 67 34 86 23 37 19 41';

// แปลง string เป็น array ของตัวเลข
let numbers = str.split(' ').map(Number);

// กรองเลขที่น้อยกว่า 40 และหาผลรวม
let result = numbers
  .filter(num => num < 40)    // กรองเลขที่น้อยกว่า 40
  .reduce((acc, num) => acc + num, 0); // หาผลรวมของเลขที่กรองมาได้

console.log(result); // ผลลัพธ์: 85
