console.log("hello world");
// alert("Xin chào");

// Khai báo biến
// let age = 10;

// let name = "Nguyễn Văn A";
// let email = "abc@gmail.com";
// let emptyStr = "";

// let name = "Bùi Hiên"
// let year = 1997

// console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2022 - year} tuổi`);

let name = null;
let age;

console.log(name);
console.log(age);

age = 20;
console.log(age);

// Function vs method
// Cách 1 : Regular function
function sum(a, b) {
    let rs = a + b;
    console.log(rs);
    return rs;
}

console.log(sum(10, 20));
// console.log(rs);
// console.log(rs); : Lỗi

// Cách 2 : Function expression
const sum1 = function (a, b) {
    let rs = a + b;
    return rs;
};

// Cách 3 : Arrow function (ES6)
const sum2 = (a, b) => {
    let rs = a + b;
    return rs;
};

const sum3 = (a = 10, b = 20) => a + b; // 4 + un => NaN

console.log(sum3(4)); // 24
console.log(sum3()); // 30

// Default Parameter (ES6);

let firstName = "Trần";

{
    let firstName = "Nguyễn";
    console.log(firstName);
}

console.log(firstName);

let money = 15000;

switch (money) {
    case 12000: {
        console.log("Cà phê sữa");
        break;
    }
    case 10000: {
        console.log("Cà phê đá");
        break;
    }
    case 8000: {
        console.log("String dâu");
        break;
    }
    case 2000: {
        console.log("Trà đá");
        break;
    }
    default: {
        console.log("Không có đồ uống phù hợp");
        break;
    }
}

for (let i = 0; i < 10; i = i + 1) {
    console.log(i + 1);
}

// Khai báo array rỗng
// let arr = [];

// // Khai báo array
// let number = [];

// // Gán giá trị cho các phần tử của array thông qua chỉ số
// number[0] = 1;
// number[1] = "Bùi Hiên";
// number[2] = true;

// // Khai báo và khởi tạo giá trị cho array
// let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A", [1,2,3,4], null, undefined];

const numbers = [1, 2, 3, 4, 5];
const numbersx2 = numbers.map(value => value * 2);

console.log(numbersx2);

const numbersGreater3 = numbers.filter(value => value > 3);
console.log(numbersGreater3);


console.log(numbers.find(ele => ele % 2 === 0));
console.log(numbers.findIndex(ele => ele % 2 === 0));

let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: ["abc@gmail.com", "abc1@gmail.com"],
    address : {
        city : "Haf Nooi",
        district : "Thanh xuan"
    },
    work() {
        console.log("Work ...");
    },
}

user.email.push("hien@tehcmasyert.vn")
console.log(user);
console.log(user.address.city);

let userCopy = {...user, age : 30};
console.log(userCopy);

console.log(user.name);
user.work()

user.name = "Trần Văn B";
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [...a1, ...a2]
let a4 = [...a3];
console.log(a3)
