document.getElementById('addTaskButton').addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        const taskList = document.getElementById('taskList');

        
        var li = document.createElement('li');

        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                taskText.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        });

        
        const taskText = document.createElement('span');
        taskText.textContent = task;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        
        
    
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        
        taskList.appendChild(li);

        
        taskInput.value = '';
    }
});

    