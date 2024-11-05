const createPersonProfile = (firstName, lastName, ...hobbies) => {
    return {
      firstName,            // ชื่อ
      lastName,             // นามสกุล
      hobbies,              // งานอดิเรก (เป็น array ที่เก็บงานอดิเรกทั้งหมด)
      hobbiesCount: hobbies.length  // จำนวนงานอดิเรก
    };
  };
  
  // ทดสอบฟังก์ชัน
  console.log(createPersonProfile("John", "Doe", "Reading", "Traveling", "Swimming"));
  // ผลลัพธ์: { firstName: 'John', lastName: 'Doe', hobbies: [ 'Reading', 'Traveling', 'Swimming' ], hobbiesCount: 3 }
  
  console.log(createPersonProfile("Jane", "Smith", "Painting"));
  // ผลลัพธ์: { firstName: 'Jane', lastName: 'Smith', hobbies: [ 'Painting' ], hobbiesCount: 1 }
  