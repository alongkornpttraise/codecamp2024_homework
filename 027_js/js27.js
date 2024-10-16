function validateLogin() {
    // รับค่าจากฟิลด์อินพุต
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let result = document.getElementById('result');

    // ตรวจสอบค่าที่รับมา
    if (username === '') {
        result.innerText = "username is required";
    } else if (password === '') {
        result.innerText = "password is required";
    } else if ((username === 'admin' && password === '1234') || (username === 'john' && password === 'qwerty')) {
        result.innerText = `Hello ${username}`;
    } else {
        result.innerText = "invalid username or password";
    }
}
