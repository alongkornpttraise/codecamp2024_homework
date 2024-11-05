const q = {
    prop: 'Hello',
    prop2: {
      prop2: {
        nested: ['a', 'b', 'c']
      }
    }
  };
  
  // ใช้ Destructuring เพื่อให้ x เท่ากับ 'Hello' และ y เท่ากับ 'b'
  const { prop: x, prop2: { prop2: { nested: [, y] } } } = q;
  
  console.log(x); // Hello
  console.log(y); // b
  