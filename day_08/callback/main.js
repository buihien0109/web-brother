// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 4000);
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 5000);
}

function finish() {
    console.log("Kết thúc công việc");
}

// doTask1("Làm bài tập", finish)
// doTask2("Đá bóng", finish)
// doTask3("Nấu cơm", finish)

doTask1("Làm bài tập", () => {
    doTask2("Đá bóng",() => {
        doTask3("Nấu cơm", finish)
    })
})

// Callback hell : Khi có quá nhiều hàm callback được gọi nối tiếp nhau
// ds user => chi tiết user => ds post => chi tiết post => ds comment => chi tiết comment => ...