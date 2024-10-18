const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
  ];
  
  // ฟังก์ชันเพื่อแปลงวันที่ให้เป็นรูปแบบ dd mmm yyyy
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).toLowerCase();
  }
  
  // ใช้ map เพื่อสร้าง array ใหม่ที่มีแท็ก <tr> และ <td>
  const result = array.map(item => 
    `<tr><td>${item.name}</td><td>${formatDate(item.birth)}</td></tr>`
  );
  
  console.log(result);
  