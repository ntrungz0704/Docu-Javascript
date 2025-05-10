//7. Các cách xuất dữ liệu biến trong JS
let soA = 25;
let soB = 5;

// Cách 1:
console.log("Căn bậc hai của " + soA + " là: " + soB);

//Cách 2:
console.log("Căn bậc hai của", soA, "là:", soB);

//Cách 3:
console.log(`Căn bậc hai của ${soA} là: ${soB}`);

//Cách 4:
console.log(`Căn bậc hai của %s là: %s`, soA, soB);

// Đề bài hãy viết ra câu lệnh 5 nhân 5 bằng 25
// cách 1
let myNum1 = 5;
let myNum2 = 5;
let myTotal = myNum1 * myNum2;
console.log(myNum1 + " nhân " + myNum2 + " bằng " + myTotal);
console.log(myNum1, "nhân", myNum2, "bằng", myTotal);
console.log(`${myNum1} nhân ${myNum2} bằng ${myTotal}`);
console.log(`%s nhân %s bằng %s`, myNum1, myNum2, myTotal);

let a = 4,
  b = 2;

console.log(a % b);
