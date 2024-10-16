const number = 255;

// แปลงเลข 255 เป็นเลขฐาน 2
const binary = number.toString(2);

// แปลงเลข 255 เป็นเลขฐาน 8
const octal = number.toString(8);

// แปลงเลข 255 เป็นเลขฐาน 16
const hexadecimal = number.toString(16);

console.log(`Binary (base 2): ${binary}`); // Output: 11111111
console.log(`Octal (base 8): ${octal}`); // Output: 377
console.log(`Hexadecimal (base 16): ${hexadecimal}`); // Output: ff
