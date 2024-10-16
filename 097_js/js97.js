const person = ['John', 'Jay', 'Jim', 'Jame'];

// ลบ "Jay" (ตำแหน่ง index 1) และเพิ่ม "Jack" และ "Joe"
person.splice(1, 1, 'Jack', 'Joe');

console.log(person);  // ผลลัพธ์: ['John', 'Jack', 'Joe', 'Jim', 'Jame']
