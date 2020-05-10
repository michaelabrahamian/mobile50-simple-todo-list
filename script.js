const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let idCounter = 1

function newTodo() {
  //alert('New TODO button clicked!')
  
  // create new <li>
  let newTodoList = document.createElement('li')
  // set class
  newTodoList.className = classNames.TODO_ITEM
  // add id
  let id = idCounter++
  newTodoList.setAttribute('id', id)
  
  // get user's text
  let text = prompt('What do you want to do?')
  // create <span>
  let todoText = document.createElement('span')
  // set class
  todoText.className = classNames.TODO_TEXT
  // apply text to the span
  todoText.appendChild(
    document.createTextNode(text)
  )

  // create checkbox
  let todoCheckbox = document.createElement('input')
  todoCheckbox.setAttribute('type', 'checkbox')
  

  // set class
  todoCheckbox.className = classNames.TODO_CHECKBOX
  todoCheckbox.setAttribute('onclick', 'updateUncheckedCount()')

  // delete button
  let btnDel = document.createElement('button')
  // set btn text
  btnDel.appendChild(
    document.createTextNode('Delete')
  )
  // set btn class
  btnDel.className = classNames.TODO_DELETE
  // set action
  btnDel.setAttribute('onclick', `deleteItem(${id})`)
  
  // append elements to list container
  newTodoList.appendChild(todoCheckbox)
  newTodoList.appendChild(todoText)
  newTodoList.appendChild(btnDel)

  // add new list document
  list.appendChild(newTodoList)

  // increment itemCount
  addToItemCount(1)
  
  // update unchecked count 
  updateUncheckedCount()
}

// Updates the unchecked count by running document query
function updateUncheckedCount() {
  let uncheckedCount = document.querySelectorAll('input[type="checkbox"]').length
    - document.querySelectorAll('input[type="checkbox"]:checked').length
  uncheckedCountSpan.textContent = uncheckedCount
}

// Adds to the item count span by passed value
function addToItemCount(val) {
  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + val
}

// Deletes the todo item container by ID
function deleteItem(id) {
  // delete element 
  document.getElementById(id).remove()

  // update unchecked count
  updateUncheckedCount()

  // decrement itemCount
  addToItemCount(-1)
}