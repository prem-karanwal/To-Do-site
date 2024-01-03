let todoList = [];
document.addEventListener('DOMContentLoaded', function () {
    todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    displayItems();
  });
  
  
  function addTodo() {
    let inputElement = document.querySelector('#todoinput');
    let dateElement = document.querySelector('#tododate');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    saveTodoList();
    displayItems();
  }

  function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
  
  function displayItems() {
    let containerElement = document.querySelector('.todocontainer');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="deleteTodo(${i})";
        displayItems();">Delete</button>
      `;
      localStorage.setItem('todoList', JSON.stringify(todoList))
    }
    containerElement.innerHTML = newHtml;
  }

  function deleteTodo(index) {
    todoList.splice(index, 1);
    saveTodoList();
    displayItems();
  }