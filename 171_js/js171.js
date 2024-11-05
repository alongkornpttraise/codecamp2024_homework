const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Dann' },
    { firstName: 'Joe', lastName: 'Dunne' }
  ];
  
  // ใช้ for...of loop และ destructuring ในแต่ละ iteration
  for (const { firstName, lastName } of names) {
    console.log(`Full name: ${firstName} ${lastName}`);
  }
  