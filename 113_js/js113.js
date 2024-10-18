const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  function updateTask(id, newName) {
      // ใช้ find เพื่อค้นหา element ที่มี id ตรงกับที่ระบุ
      const task = tasks.find(task => task.id === id);
      
      // ถ้าเจอ element ที่มี id ตรงกับที่ระบุ ให้แก้ไขชื่อ
      if (task) {
          task.name = newName;
      }
  }
  
  // เรียกใช้ฟังก์ชัน updateTask
  updateTask(2, 'Travelling');
  console.log(tasks);
  