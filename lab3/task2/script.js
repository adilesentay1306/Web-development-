const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskText = input.value.trim();
    if (taskText) {
        addTodoItem(taskText);
        input.value = '';
    }
});

const addTodoItem = (text) => {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    
    listItem.innerHTML = `
        <div class="todo-left">
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${text}</span>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    const checkbox = listItem.querySelector('.todo-checkbox');
    const span = listItem.querySelector('.todo-text');
    const deleteBtn = listItem.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => span.classList.toggle('done'));

    deleteBtn.addEventListener('click', () => {
        listItem.style.opacity = '0';
        setTimeout(() => listItem.remove(), 300);
    });

    todoList.appendChild(listItem);
};