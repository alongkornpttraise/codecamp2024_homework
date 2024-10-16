// สร้าง Class ชื่อ Sale
class Sale {
    constructor(name) {
      this.name = name; // ตั้งค่า property name
    }
  
    // Method สำหรับคำนวณราคาหลังหักส่วนลด
    calcPrice() {
      return this.amount * this.price * (1 - this.discount);
    }
  }
  
  // สร้าง Class ชื่อ Beverage ซึ่งสืบทอดจาก Sale
  class Beverage extends Sale {
    constructor(name, amount, price, discount) {
      super(name); // เรียกใช้ constructor ของคลาสแม่ (Sale)
      this.amount = amount;     // จำนวนสินค้า
      this.price = price;       // ราคาต่อหน่วย
      this.discount = discount; // ส่วนลดในรูปแบบทศนิยม (0.1 = 10%)
    }
  }
  
  // สร้าง object ชื่อ beverage จาก Beverage
  const beverage = new Beverage("Pepsi", 3, 19, 0.1);
  
  // เรียก method calcPrice() และแสดงผลลัพธ์
  console.log(`Total price for ${beverage.name}: ${beverage.calcPrice()} THB`);
  