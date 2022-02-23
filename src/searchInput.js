export function checkItem(searchInput, todoItem) {
  const searchValue = searchInput.value.toLowerCase();
  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );
  const task = todoText.innerText.toLowerCase();
  if (task.includes(searchValue)) {
    return true;
  } else {
    return false;
  }
}
