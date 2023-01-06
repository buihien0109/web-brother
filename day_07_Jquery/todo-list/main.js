const todos = [
    { id: 1, title: "Lam bai tap", status: true },
    { id: 2, title: "Di choi", status: false },
    { id: 3, title: "Da bong", status: true },
]

const renderTodos = arr => {
    $("#list").html("");

    if(arr.length == 0) {
        $("#list").html("<li>Không có công việc nào trong danh sách</li>");
        return;
    }

    let html = "";
    arr.forEach(todo => {
        html += `
            <li>
                <span class="${todo.status ? "active" : ""}">${todo.title}</span>
                <button onclick="editTodo(${todo.id})">Edit</button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </li>
        `
    });

    $("#list").html(html);
}

$("#btn-add").click(() => {
    let title = $("#todo-input").val();
    if(title === "") {
        alert("Tiêu đề không được để trống");
        return;
    }

    let newTodo = {
        id : Math.floor(Math.random() * 1000),
        title,
        status : false
    }

    todos.push(newTodo);
    renderTodos(todos);
    $("#todo-input").val("")

    alert("Thêm công việc thành công");
})

const editTodo = id => {
    let currentTodo = todos.find(todo => todo.id === id);
    let title = window.prompt("Cập nhật tiêu đề", currentTodo.title);

    if(title === null) return;
    if(title === "") {
        alert("Tiêu đề không được để trống");
        return;
    }

    currentTodo.title = title;
    renderTodos(todos);

    alert("Cập nhật thành công");
}

const deleteTodo = id => {
    let isDelete = window.confirm("Bạn có muốn xóa không?");
    if(isDelete) {
        let index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        renderTodos(todos);

        alert("Xóa thành công");
    }
}



renderTodos(todos);