const state1 = { 
    username: 'john', 
    point: 100, 
    loading: true 
  };
  
  // สร้าง object ใหม่โดยใช้ Object.assign และปรับเปลี่ยนค่า
  const state2 = Object.assign({}, state1, {
    point: 75,           // เปลี่ยนค่า point เป็น 75
    loading: false,      // เปลี่ยนค่า loading เป็น false
    success: true        // เพิ่ม property success ที่มีค่าเป็น true
  });
  
  console.log(state2);
  