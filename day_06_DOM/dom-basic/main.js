const heading = document.getElementById("heading");
console.log(heading);

const headingSelector = document.querySelector("#heading");
console.log(headingSelector)

const paras = document.querySelectorAll("p");
console.log(paras)

const para1 = document.querySelector(".para-1");
console.log(para1);

const liList = document.querySelectorAll("li");
console.log(liList[2]);

const li3 = document.querySelector("ul li:nth-child(3)");
console.log(li3);

// Thay đổi nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

heading.innerHTML = "Xin chào <span>các bạn</span>";
para1.innerText = "Xin chào <span>các bạn</span>";

const ul = document.querySelector("ul");
console.log(ul.innerHTML);
console.log(ul.innerText);
console.log(ul.textContent);

// Thay đổi css
heading.style.color = "red";
heading.style.backgroundColor = "black";

for (let i = 0; i < liList.length; i++) {
    liList[i].style.color = "blue";
}

Array.from(liList).map(ele => ele.style.backgroundColor = "green");

// Tạo phần tử
// Tạo thẻ p nằm ở đầu body
const newPara = document.createElement("p");
newPara.innerHTML = "New Para";
// document.body.prepend(newPara);
// document.body.appendChild(newPara);
// document.body.insertBefore(newPara, para1);
// document.body.insertAdjacentElement("afterbegin", newPara)
// heading.insertAdjacentElement("beforebegin", newPara);
heading.insertAdjacentHTML("beforebegin", "<p>New Para</p>")

console.log(newPara)

// Xóa phần tử
// document.body.removeChild(para1);
para1.parentElement.removeChild(para1);

// Thay thế phần tử
// let newElement = document.createElement('h1');
// newElement.innerText = "Xin chào các bạn";

const para2 = document.querySelector(".para-2");

// document.body.replaceChild(newElement, para2);

// ClassList
console.log(para2.classList) // read-only

para2.classList.add("text-red", "text-big");
para2.classList.remove("text-red");
console.log(para2.classList.contains("text-red"));
console.log(para2.classList.contains("text-big"));

// setInterval(() => {
//     para2.classList.toggle("text-red");
// }, 1000) // 1000ms = 1s