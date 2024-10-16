const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };
  
  const notebookClone1 = {}; // สร้าง object ว่างสำหรับการ clone
  
  // ใช้ for...in loop เพื่อคัดลอก key และ value
  for (let key in notebook) {
    notebookClone1[key] = notebook[key];
  }
  
  console.log(notebookClone1);
  