const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  function deleteTask(id) {
      // ใช้ filter เพื่อสร้าง array ใหม่ที่ไม่มี task ที่มี id ตรงกับที่ระบุ
      const index = tasks.findIndex(task => task.id === id);
      
      if (index !== -1) {
          tasks.splice(index, 1); // ลบ task ที่ตำแหน่ง index นั้นออก
      }
  }
  
  // เรียกใช้ฟังก์ชัน deleteTask
  deleteTask(1);
  console.log(tasks);
  