console.log(typeof 'x');         // ผลลัพธ์: string
console.log(typeof x);           // ผลลัพธ์: undefined (ถ้า x ยังไม่ถูกประกาศ)
console.log(typeof ``);          // ผลลัพธ์: string
console.log(typeof Infinity);    // ผลลัพธ์: number
console.log(typeof (100 / 0));   // ผลลัพธ์: number (เพราะ Infinity เป็น number)
console.log(typeof (1 + '3'));   // ผลลัพธ์: string (เพราะ '3' เป็น string การบวกกับ 1 จะเป็นการต่อ string)
console.log(typeof (1 * 'a'));   // ผลลัพธ์: number (NaN เป็น number)
console.log(typeof null);        // ผลลัพธ์: object (นี่เป็น behavior ที่แปลกของ JavaScript)
