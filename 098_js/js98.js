const cars = ['volvo', 'toyota', 'honda', 'ford'];

// เพิ่ม "mazda", "bmw", "nissan" หลังจาก "honda" (ตำแหน่ง index 3)
cars.splice(3, 0, 'mazda', 'bmw', 'nissan');

console.log(cars);  // ผลลัพธ์: ['volvo', 'toyota', 'honda', 'mazda', 'bmw', 'nissan', 'ford']
