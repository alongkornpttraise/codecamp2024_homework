let company = prompt('Which company created JavaScript?');
company == 'Netscape' ? alert('Right!') : alert('Wrong.');


// prompt จะเปิดหน้าต่างป๊อปอัปเพื่อให้ผู้ใช้ป้อนข้อมูล ซึ่งจะเก็บค่าที่ป้อนเข้ามาไว้ในตัวแปร company.
// โค้ดใช้ Ternary Operator (? :) เพื่อตรวจสอบว่าค่าที่ป้อนเข้ามาใน company เท่ากับ 'Netscape' หรือไม่:
// ถ้าใช่ (true) จะเรียกใช้คำสั่ง alert('Right!') เพื่อแสดงข้อความ "Right!".
// ถ้าไม่ใช่ (false) จะเรียกใช้คำสั่ง alert('Wrong.') เพื่อแสดงข้อความ "Wrong.".
// สรุป:
// โค้ดนี้ทำงานได้ถูกต้องตามที่ตั้งใจไว้ครับ 