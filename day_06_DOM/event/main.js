// Sử dụng HTML-attribute
const sayHello = () => {
    alert("Xin chào các bạn 1");
}

const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");


// Sử dụng DOM property
const sayHello2 = () => {
    alert("Xin chào các bạn 2");
}

btn2.onclick = sayHello2

// btn2.onclick = () => {
//     alert("Xin chào các bạn 2");
// }

// Sử dụng addEventListener
const sayHello3 = () => {
    alert("Xin chào các bạn 3");
}

btn3.addEventListener("click", sayHello3)

// btn3.addEventListener("click", () => {
//     alert("Xin chào các bạn 3");
// })

document.addEventListener('click', (event) => {
    console.log(event)
    console.log('click');
})

document.addEventListener("keydown", (event) => {
    console.log(event)
    console.log("keydown");
});

// Ví dụ 1
const inputEl = document.querySelector("input");
const keywordEl = document.querySelector("#keyword");

inputEl.addEventListener("keydown", (event) => {
    console.log(event)
    if (event.key == "Enter") {
        keywordEl.innerHTML = inputEl.value.toUpperCase();
    }
})

// Ví dụ 2: Ẩn hiện password
const passwordEl = document.getElementById("password");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    if (passwordEl.type == "password") {
        passwordEl.type = "text";
        btn.innerText = "hide"
    } else {
        passwordEl.type = "password";
        btn.innerText = "show"
    }
})

// Ví dụ 3 : 
const btnTop = document.getElementById("btn-top");
const para1 = document.getElementById("para1");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        btnTop.classList.remove("hide");
    } else {
        btnTop.classList.add("hide");
    }
})

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: para1.offsetTop,
        behavior: "smooth"
    })
})