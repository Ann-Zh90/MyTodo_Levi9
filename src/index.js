import "../styles/index.css";
import "../index.html";

import { checkItem } from "./searchInput";
import { createTodoItem } from "./createTodoItem";

const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const searchInput = document.querySelector(".search");

todoBtn.addEventListener("click", addTodo);
searchInput.addEventListener("input", findTask);

function addTodo(event) {
  event.preventDefault();

  const todoItem = createTodoItem(todoInput.value);

  todoList.appendChild(todoItem);

  todoInput.value = "";
}

function findTask() {
  const todoItems = todoList.childNodes;
  todoItems.forEach((item) => {
    checkItem(searchInput, item)
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
}
