export const createTodoItem = (text) => {
  // Create Todo Item
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  // Create and add Todo Text
  const todoText = document.createElement("span");
  todoText.innerText = text;
  todoText.classList.add("todo-text");
  todoItem.appendChild(todoText);

  // Create and add Remove button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-times"></i>';
  removeButton.classList.add("todo-remove-button");
  removeButton.addEventListener("click", removeTodoItem(todoItem));
  todoItem.appendChild(removeButton);

  return todoItem;
};

function removeTodoItem(todoItem) {
  return (e) => {
    e.preventDefault();
    let isShouldDeleteItem = confirm("Are you shure?");
    if (isShouldDeleteItem) {
      todoItem.classList.add("todo-item_fall");
      todoItem.remove();
    }
  };
}
