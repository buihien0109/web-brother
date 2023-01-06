let money = 2;
let isBuyIphone = false

// Hứa
let buyIphone = () => {
    return new Promise(function (resolve, reject) {
        if (money >= 30) {
            isBuyIphone = true;
            resolve("Mua iphone thôi") // Lời hứa được thực hiện thành công
        } else {
            // reject("Kiếm thêm tiền đi") // Lời hứa được thực hiện thất bại
            resolve("Không đủ tiền mua iPhone, suy nghĩ xem mua được airpod hay không");
        }
    })
}

// Hứa tiếp
// Nếu mua iphone xong, còn thừa tiền, nếu đủ thì mua con airpod (4 củ)
let buyAirpod = () => {
    return new Promise(function (resolve, reject) {
        if (isBuyIphone && money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else if (!isBuyIphone && money >= 4) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
        }
    })
}

async function buy() {
    try {
        let res = await buyIphone()
        console.log(res);

        let res1 = await buyAirpod()
        console.log(res1);

    } catch (error) {
        console.log(error);
    }

    return "Về nhà thôi"
}

// console.log(buy());
buy()
    .then(res => console.log(res))
    .catch(error => console.log(error));