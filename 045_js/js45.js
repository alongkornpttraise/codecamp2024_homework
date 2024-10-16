const readline = require('readline');

// สร้างอินเตอร์เฟซเพื่อรับอินพุตจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ฟังก์ชันสำหรับรับตัวเลขจากผู้เล่นคนแรก
function getSecretNumber() {
  return new Promise((resolve) => {
    rl.question("Player 1: Please enter a number between 1 and 100 (Player 2 should not look!): ", (answer) => {
      const secretNumber = parseInt(answer, 10);
      if (!isNaN(secretNumber) && secretNumber >= 1 && secretNumber <= 100) {
        resolve(secretNumber);
      } else {
        console.log("Invalid input. Please enter a number between 1 and 100.");
        resolve(getSecretNumber());
      }
    });
  });
}

// ฟังก์ชันสำหรับให้ผู้เล่นคนที่สองทายตัวเลข
function guessNumber(secretNumber) {
  rl.question("Player 2: Guess the number between 1 and 100: ", (answer) => {
    const guess = parseInt(answer, 10);
    if (isNaN(guess)) {
      console.log("Invalid input. Please enter a valid number.");
      guessNumber(secretNumber);
    } else if (guess < secretNumber) {
      console.log("Too low! Try again.");
      guessNumber(secretNumber);
    } else if (guess > secretNumber) {
      console.log("Too high! Try again.");
      guessNumber(secretNumber);
    } else {
      console.log("Congratulations! You guessed the right number.");
      rl.close();
    }
  });
}

// เริ่มเกม
getSecretNumber().then((secretNumber) => {
  console.clear();  // ล้างหน้าจอเพื่อไม่ให้ผู้เล่นคนที่สองเห็นเลขที่ผู้เล่นคนแรกป้อน
  guessNumber(secretNumber);
});
