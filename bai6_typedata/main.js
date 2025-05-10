//string: kiểu chuỗi
let myString = "hello world";
console.log(myString);

//number: kiểu số / số nguyên hoặc số thực
let myNumber = 12345;
console.log(myNumber);

//boolean: kiểu luận lý / trả về true hoặc false
let myBoolean = true;
console.log(myBoolean);

//Undefined: là biến chưa được gán giá trị sẽ có kiểu dữ liệu là Undefined
let myUndefined;
console.log(myUndefined);

//Null: là kiểu dữ liệu có giá trị là null, tức là không có giá trị nào cả giá trị mặc định
let myNull = null;
console.log(myNull);

//Các kiểm tra KIỂU DỮ LIỆU
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log("dùng chuỗi = dấu ,", "ok");
console.log("Số nguyên an toàn tối đa: ", Number.MAX_SAFE_INTEGER);
console.log("Số nguyên an toàn tối thiểu: ", Number.MIN_SAFE_INTEGER);

let myBigInt = 12123123333333333333333333333333332n;
console.log("Số nguyên lớn: ", myBigInt);
console.log(typeof myBigInt);

// các kiểu dữ liệu
// kiểu chuỗi, số, boolean, undefined ( chưa gán giá trị ), = null ( ko có giá trị )
// cách kiểm tra kiểu dữ liệu = cách : typeof tên biến
// Số nguyên an toàn tối đa Number.MAX_SAFE_INTEGER
// Số nguyên an toàn tối thiểu Number.MIN_SAFE_INTEGER
