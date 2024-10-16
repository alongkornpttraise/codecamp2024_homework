let a = undefined;
let b = ' ';
let c = !b;

// แปลง a, b และ c ให้เป็น Boolean แล้วเก็บไว้ในตัวแปร d, e และ f ตามลำดับ
let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);

// ใช้คำสั่ง console.log เพื่อแสดงค่าตัวแปร d, e และ f
console.log(`d: ${d}`); // ผลลัพธ์: d: false
console.log(`e: ${e}`); // ผลลัพธ์: e: true
console.log(`f: ${f}`); // ผลลัพธ์: f: false

// ผลลัพธ์และเหตุผล
// การแปลง a (undefined) เป็น Boolean

// undefined เมื่อถูกแปลงเป็น Boolean จะให้ผลลัพธ์เป็น false.
// ดังนั้น d จะมีค่าเป็น false.
// การแปลง b (string ที่มีช่องว่าง) เป็น Boolean

// ทุก string ที่ไม่ใช่ string ว่าง (empty string) เมื่อถูกแปลงเป็น Boolean จะให้ผลลัพธ์เป็น true.
// ดังนั้น e จะมีค่าเป็น true.
// ค่าของ c หลังจากการทำ NOT operation กับ b

// b เป็น string ที่มีช่องว่าง ซึ่งแปลงเป็น Boolean จะให้ค่า true.
// การทำ NOT (!) กับ true จะให้ผลลัพธ์เป็น false.
// ดังนั้น c จะมีค่าเป็น false.
// การแปลง c (false) เป็น Boolean

// false เมื่อถูกแปลงเป็น Boolean จะยังคงเป็น false.
// ดังนั้น f จะมีค่าเป็น false.
// สรุปผลลัพธ์:
// d จะเป็น false เพราะ a คือ undefined.
// e จะเป็น true เพราะ b เป็น string ที่ไม่ว่างเปล่า.
// f จะเป็น false เพราะ c เป็นผลลัพธ์ของ !b, ซึ่ง b คือ string ที่ไม่ว่างเปล่าจึงทำให้ !b เป็น false.
// หากคุณรันโค้ดนี้ใน VS Code โดยทำตามขั้นตอนต่อไปนี้:

// เปิด VS Code และสร้างไฟล์ใหม่ (เช่น dynamicType.js).
// คัดลอกและวางโค้ดนี้ลงในไฟล์แล้วบันทึก.
// เปิด Terminal ใน VS Code.
// รันไฟล์โดยใช้คำสั่ง node dynamicType.js.