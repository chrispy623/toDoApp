//selectors
const submitBtn = document.querySelector(".submitBtn");
const inputValue = document.querySelector(".textInput");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event listeners
submitBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
function addTodo(event){
  //create div
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  //create li
  let newTodo = document.createElement("li");
  newTodo.innerText = inputValue.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //create check button
  let completedButton = document.createElement("button");
  completedButton.innerText = "√";
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  //create trash button
  let trashButton = document.createElement("button");
  trashButton.innerText = "x";
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear input
  inputValue.value = "";
}

function deleteCheck(e) {
  //delete todo
  const item = e.target;
  if (item.classList[0] === "trash-button"){
  const todo = item.parentElement;
  todo.classList.add("fall");
  todo.addEventListener("transitionend", function(){
    todo.remove();
  });
  }
  //check mark
  if (item.classList[0] === "complete-button"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
