function addTodo() {
    const todoText = document.getElementById("new-todo").value;
    if (todoText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${todoText}</span>
        <button onclick="markDone(this)">Done</button>
        <button onclick="removeTodo(this)">Remove</button>
    `;
    ul.appendChild(li);

    document.getElementById("new-todo").value = "";
}

function markDone(button) {
    const span = button.parentElement.querySelector("span");
    span.classList.add("completed");
    button.disabled = true; // Disable the "Done" button once the task is completed
}

function removeTodo(button) {
    const li = button.parentElement;
    li.remove();
}

document.getElementById("new-todo").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
