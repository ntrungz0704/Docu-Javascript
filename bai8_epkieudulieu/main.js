// Cách ép kiểu dữ liệu

// let numberA = prompt("Nhập số A: ");
// console.log(typeof numberA);

// Ép kiểu sang số nguyên / parseInt()
// let numberInt = parseInt(prompt("Mời nhập vào số nguyên: "));
// console.log(`NumberInt: ${numberInt}`);

// Ép kiểu sang số thực / parseFloat()
// let numberFloat = parseFloat(prompt("Mời nhập vào số thực: "));
// console.log(`NumberFloat: ${numberFloat}`);

// Hoặc đơn giản sẽ dùng / hàm Number() để tự động nhận kiểu số nguyên or thực
let epKieuSoDuong = parseInt(prompt("Nhập số nguyên dương: "));
console.log(`EpKieuSoDuong: ${epKieuSoDuong}`);
let epKieuSoThuc = parseFloat(prompt("Nhập số thực: "));
console.log(`EpKieuSoThuc: ${epKieuSoThuc}`);
let epKieuChung = Number(prompt("Nhập số n: "));
console.log(`EpKieuChung: ${epKieuChung}`);
