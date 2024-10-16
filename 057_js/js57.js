const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ฟังก์ชันสำหรับรับข้อมูลสินค้าและสร้าง object
function createProductObject() {
  rl.question('Enter product name: ', (name) => {
    rl.question('Enter quantity sold: ', (quantity) => {
      rl.question('Enter price per unit: ', (price) => {
        rl.question('Enter discount per unit (in %): ', (discount) => {
          quantity = parseInt(quantity, 10);
          price = parseFloat(price);
          discount = parseFloat(discount);

          const product = {
            name: name,
            quantity: quantity,
            price: price
          };

          // เพิ่ม key-value ส่วนลดถ้ามีค่าและไม่เท่ากับ 0
          if (!isNaN(discount) && discount > 0) {
            product.discount = discount;
          }

          console.log('Product Object:', product);

          // คำนวณราคาที่แท้จริงหลังหักส่วนลด
          const finalPrice = calculateFinalPrice(product);
          console.log(`The final price after discount is: ${finalPrice.toFixed(2)} THB`);

          rl.close();
        });
      });
    });
  });
}

// ฟังก์ชันคำนวณราคาที่แท้จริงหลังหักส่วนลด
function calculateFinalPrice(product) {
  const discount = product.discount ? (product.discount / 100) : 0;
  const priceAfterDiscount = product.price * (1 - discount);
  return product.quantity * priceAfterDiscount;
}

// เริ่มการรับข้อมูลและสร้าง object
createProductObject();
