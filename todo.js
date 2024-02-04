// let todoList = [
//   {
//     item:'Buy Milk', 
//     dueDate: '05/02/2024'
//   }, 
//   {
//     item: 'Complete Assignment', 
//     dueDate: '06/02/2024'
//   }
// ];

let todoList = getTodoListFromLocalStorage() || [];

displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let timeElement = document.querySelector('#todo-time');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  let todoTime = timeElement.value;
  // console.log(todoItem);
  todoList.push({item: todoItem, dueDate: todoDate, dueTime: todoTime});
  saveTodoListToLocalStorage(todoList);
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for(let i = 0; i < todoList.length; i++){
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item, dueDate, dueTime} = todoList[i];

    newHtml += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <span>${dueTime}</span>
    <button class="btn-delete" onclick="
    todoList.splice(${i},1);
    displayItems();
    ">Delete</button>
    
    `;
  }
  containerElement.innerHTML = newHtml;
}

function deleteTodoItem(index) {
  todoList.splice(index, 1);
  saveTodoListToLocalStorage(todoList);
  displayItems();
}

function saveTodoListToLocalStorage(list) {
  localStorage.setItem('todoList', JSON.stringify(list));
}

function getTodoListFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todoList'));
}