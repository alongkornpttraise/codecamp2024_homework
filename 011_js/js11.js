let a = undefined;
let b = null;
let c = b + '4 2';

// แปลง a, b และ c ให้เป็น Number แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
let d = Number(a);
let e = Number(b);
let f = Number(c);

// ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
console.log(`d: ${d}`); // ผลลัพธ์: d: NaN
console.log(`e: ${e}`); // ผลลัพธ์: e: 0
console.log(`f: ${f}`); // ผลลัพธ์: f: NaN
