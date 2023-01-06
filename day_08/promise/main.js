// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined
// const promise = new Promise((resolve, reject) => { });
// console.log(promise);

// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: success
// const promiseSuccess = new Promise((resolve, reject) => {
//     resolve("success");
// });
// console.log(promiseSuccess);

// [[PromiseState]]: "rejected"
// [[PromiseResult]]: fail
// const promiseFail = new Promise((resolve, reject) => {
//     reject("fail");
// });
// console.log(promiseFail);

let money = 31;

// Hứa
let buyIphone = () => {
    return new Promise(function (resolve, reject) {
        if (money > 30) {
            resolve("Mua iphone thôi") // Lời hứa được thực hiện thành công
        } else {
            reject("Kiếm thêm tiền đi") // Lời hứa được thực hiện thất bại
        }
    })
}

// Hứa tiếp
// Nếu mua iphone xong, còn thừa tiền, nếu đủ thì mua con airpod (4 củ)
let buyAirpod = () => {
    return new Promise(function (resolve, reject) {
        if (money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
        }
    })
}

buyIphone()
    .then(rs => {
        console.log(rs);
        return buyAirpod();
    })
    .then(rs => console.log(rs))
    .catch(err => console.log(err))
    .finally(() => { // Luôn được thực hiện kể cả thành công hay thất bại
        console.log("Đi về nhà");
    })