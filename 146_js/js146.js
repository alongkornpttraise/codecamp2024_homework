const filterOutOdds = (...numbers) => {
    return numbers.filter(num => num % 2 === 0);
  };
  
  console.log(filterOutOdds(1, 2, 3, 4, 5, 6)); // ผลลัพธ์: [2, 4, 6]
  console.log(filterOutOdds(13, 17, 19));       // ผลลัพธ์: []
  console.log(filterOutOdds(10, 20, 30));       // ผลลัพธ์: [10, 20, 30]
  