const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

// รวม nums1 และ nums2 โดยเพิ่ม 5 ก่อนหน้า nums1 และ -6, -1 ระหว่าง nums1 และ nums2
const combinedArray = [5, ...nums1, -6, -1, ...nums2];

console.log("Combined Array:", combinedArray); // [5, 1, -2, 3, 4, -6, -1, 8, 3, -8, 1]

// หาผลรวมของทุก element ใน array
const sum = combinedArray.reduce((acc, num) => acc + num, 0);

console.log("Sum of elements:", sum); // ผลลัพธ์: 7
