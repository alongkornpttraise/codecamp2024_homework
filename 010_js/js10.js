let a = undefined;
let b = 2;
let c = a++;

// แปลง a, b และ c ให้เป็น String แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
let d = String(a);
let e = String(b);
let f = String(c);

// ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
console.log(`d: ${d}`); // ผลลัพธ์: d: NaN
console.log(`e: ${e}`); // ผลลัพธ์: e: 2
console.log(`f: ${f}`); // ผลลัพธ์: f: NaN
