// ให้ User กรอกข้อมูลที่เป็นตัวเลข 2 ครั้ง โดยใช้คำสั่ง prompt
let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");

// แปลงค่าที่กรอกจาก string เป็นตัวเลข
num1 = Number(num1);
num2 = Number(num2);

// คำนวณผลบวกของตัวเลขทั้งสอง
let sum = num1 + num2;

// แสดงผลบวกของตัวเลขทั้งสองโดยใช้คำสั่ง alert
alert(`The sum of the two numbers is: ${sum}`);
