function copySorted(arr) {
    // ใช้ spread operator เพื่อสร้างสำเนาของ array แล้วเรียงลำดับ
    return [...arr].sort();
  }
  
  let arr = ['React', 'Vue', 'Angular'];
  let sorted = copySorted(arr);
  
  console.log(sorted); // ['Angular', 'React', 'Vue']
  console.log(arr);    // ['React', 'Vue', 'Angular'] (ไม่มีการเปลี่ยนแปลง)