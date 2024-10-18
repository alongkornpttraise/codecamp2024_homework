let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  // ใช้ reduce() เพื่อรวมค่าอายุทั้งหมดใน array
  const totalAge = arr.reduce((acc, person) => acc + person.age, 0);
  
  // หารด้วยจำนวนคนใน array เพื่อหาอายุเฉลี่ย
  return totalAge / arr.length;
}

console.log(getAverageAge(arr)); // ผลลัพธ์: 24.33
