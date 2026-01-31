console.log("JS loaded successfully");

// core logic

const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

let todos = [];


// create the todo internally
addBtn.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    return alert("Enter a task to create");
  }

  todos.push({
    id: Date.now(),
    text,
    completed: false,
  });

  input.value = "";
  // call render function here
   renderTodos();
});


// display the todo on the app
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    if (todo.completed) {
      li.classList.add("done");
    }

    li.innerHTML = `
            <span> ${todo.text} </span>
            <div>
                <button onclick="toggleTodo(${todo.id})">✔</button>
                <button onclick="deleteTodo(${todo.id})">❌</button>
            </div>
        `;
    todoList.appendChild(li);
  });
}

// toggle the status of todo
function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );

  renderTodos();
}

// delete the todo
function deleteTodo(id){
    todos = todos.filter( todo => todo.id !== id);
    renderTodos();
}


// enter key will trigger the create event 
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addBtn.click();
});
