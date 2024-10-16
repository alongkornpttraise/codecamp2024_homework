// ถามชื่อผู้ใช้
let user = prompt("Please enter your username:");

// ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้กำหนด default value ของตัวแปร user เป็น guest
if (user === null || user.trim() === "") {
    user = "guest";
} else if (user === "codecamp") {
    // ถ้าผู้ใช้กรอกชื่อผู้ใช้ว่า “codecamp” ให้ถาม password
    let password = prompt("Please enter your password:");
    
    if (password === "123456") {
        // ถ้าผู้ใช้กรอก password เป็น “123456” ให้ตัวแปร user มีค่าเท่ากับ codecamp
        user = "codecamp";
    } else {
        // ถ้าผู้ใช้กรอก password ไม่ใช่ “123456” ให้ alert “Wrong password”
        alert("Wrong password");
        user = "guest";
    }
} else {
    // ถ้าผู้ใช้กรอกชื่อผู้ใช้อย่างอื่นที่ไม่ใช่ “codecamp” ให้ user มีค่าเป็น guest
    user = "guest";
}

// แสดงข้อความ “Welcome” ตามด้วยค่าในตัวแปร user
alert(`Welcome ${user}`);
