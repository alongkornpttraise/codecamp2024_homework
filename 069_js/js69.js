class Calculator {
    // Constructor รับค่าเริ่มต้นของ value
    constructor(value = 0) {
      this.value = value;
    }
  
    // Method สำหรับบวกค่าเข้ากับ value
    add(number) {
      this.value += number;
    }
  
    // Method สำหรับลบค่าออกจาก value
    subtract(number) {
      this.value -= number;
    }
  
    // Method สำหรับคูณค่าเข้ากับ value
    multiply(number) {
      this.value *= number;
    }
  
    // Method สำหรับหารค่าออกจาก value
    divide(number) {
      if (number !== 0) {
        this.value /= number;
      } else {
        console.log("Cannot divide by zero");
      }
    }
  
    // Method สำหรับแสดงค่า value
    show() {
      console.log(`Current value: ${this.value}`);
    }
  }
  
  // ตัวอย่างการใช้งาน
  
  // สร้าง instance ของ Calculator เริ่มต้นที่ค่า 10
  const calculator = new Calculator(10);
  
  // บวกค่า 5 เข้าไปใน value
  calculator.add(5);
  calculator.show(); // แสดงค่า value: 15
  
  // ลบค่า 3 ออกจาก value
  calculator.subtract(3);
  calculator.show(); // แสดงค่า value: 12
  
  // คูณค่า 2 เข้ากับ value
  calculator.multiply(2);
  calculator.show(); // แสดงค่า value: 24
  
  // หารค่า 4 ออกจาก value
  calculator.divide(4);
  calculator.show(); // แสดงค่า value: 6
  
  // หารค่า 0 (ตรวจสอบข้อผิดพลาด)
  calculator.divide(0); // แสดงข้อความ "Cannot divide by zero"
  calculator.show(); // แสดงค่า value: 6
  