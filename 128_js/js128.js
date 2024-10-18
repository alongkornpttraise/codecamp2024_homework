const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  
  // ใช้ filter() เพื่อกรองข้อมูลที่เกิดในเดือน 6
  const result = array.filter(item => {
    const birthMonth = new Date(item.birth).getMonth() + 1; // ดึงค่าเดือน (0-based index, จึงต้อง +1)
    return birthMonth === 6;
  });
  
  console.log(result);