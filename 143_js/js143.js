const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  
  const productObject = products.reduce((acc, product) => {
    // ใช้ id ของ product เป็น key และตั้งค่า value ให้เป็น object ที่มี property name
    acc[product.id] = { name: product.name };
    return acc;
  }, {});
  
  console.log(productObject);
  