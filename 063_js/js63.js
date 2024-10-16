const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permission = Object.assign({}, 
  permission1,  // เริ่มด้วย permission1
  permission2,  // ต่อด้วย permission2
  permission3,  // แล้ว permission3 จะ override ค่าเดิมหาก key ซ้ำ
  permission4   // สุดท้าย permission4 จะ override ค่าเดิมหาก key ซ้ำ
);

console.log(permission);
