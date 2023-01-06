// B1 : Gọi lên server lấy dữ liệu
// B2 : Hiển thị dữ liệu (title)

const fetchDataAPI = (type) => {
    return axios.get(`https://jsonplaceholder.typicode.com/${type}`) // Kết quả trả về từ axios là 1 promise
}

const getData = async (type) => {
    try {
        let rs = await fetchDataAPI(type);
        console.log(rs);

        renderData(rs.data, type);
    } catch(err) {
        console.log(err);
    }
}

const ul = document.querySelector("ul");
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Lấy ra type tương ứng của button
        let type = btn.dataset.type;
        console.log(type);

        // Lấy dữ liệu + Hiển thị dữ liệu
        getData(type);
    });
})

const renderData = (arr, type) => {
    // Hiển thị dữ liệu
    ul.innerHTML = "";

    let html = "";
    arr.forEach(e => {
        html += `<li>${e.id} - ${e.title || e.name}</li>`
    });

    ul.innerHTML = html

    // Hiển thị type
    document.querySelector("span").innerText = type;
}

getData("posts");