function checkPermission(role, grant, deny) {
    if (role === 'ADMIN') {
        grant();  // ถ้า role เป็น ADMIN ให้เรียกฟังก์ชัน grant
    } else {
        deny();   // ถ้า role ไม่ใช่ ADMIN ให้เรียกฟังก์ชัน deny
    }
}

// เรียกใช้ฟังก์ชัน checkPermission
checkPermission(
    'ADMIN',                          // role
    function() { console.log('ACCESS GRANTED'); }, // ฟังก์ชันเมื่อเป็น ADMIN
    function() { console.log('ACCESS DENIED'); }   // ฟังก์ชันเมื่อไม่ใช่ ADMIN
);

checkPermission(
    'USER',                           // role ไม่ใช่ ADMIN
    function() { console.log('ACCESS GRANTED'); },
    function() { console.log('ACCESS DENIED'); }
);
