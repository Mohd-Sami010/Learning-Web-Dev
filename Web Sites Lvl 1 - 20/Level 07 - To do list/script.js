const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function createNodeTodo(todo, index) {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!todo.completed;

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    span.style.textDecoration = todo.completed? 'line-through': "";
    saveTodos();
  })

  const span = document.createElement("span");
  span.textContent = todo.text;
  span.style.margin = '0 8px';
  if (todo.completed) {
    span.style.textDecoration = 'line-through';
  }
  span.addEventListener("dblclick", () => {
    const newText = prompt("Edit todo", todo.text);
    if (newText !== null) {
      todo.text = newText.trim();
      span.textContent = todo.text;
      saveTodos();
    }
  })

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener('click', () => {
    todos.splice(index, 1);
    renderTodos();
    saveTodos();
  })

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  return li;
}
function renderTodos() {
  taskList.innerHTML = "";

  todos.forEach((todo, index) => {
    const node = createNodeTodo(todo, index);
    taskList.appendChild(node);
  })
}

function addTodo() {
  const text = taskInput.value.trim();
  if (text === ""){
    return;
  }
  todos.push({ text, completed: false });
  taskInput.value = "";
  renderTodos();
  saveTodos();

}
addBtn.addEventListener('click', addTodo);
renderTodos();