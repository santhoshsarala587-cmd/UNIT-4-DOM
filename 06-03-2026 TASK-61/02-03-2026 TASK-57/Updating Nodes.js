const taskList = document.getElementById('taskList');
const output = document.getElementById('output');
let taskCounter = 3;

function log(msg) {
    output.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = msg;
    output.appendChild(p);
}

function attachRemoveEvent(button, taskItem) {
    button.onclick = () => {
        const name = taskItem.firstChild.textContent.trim();
        taskItem.remove();
        log(`Removed: ${name}`);
    };
}

// Attach remove events to the buttons already on the page
document.querySelectorAll('.remove-btn').forEach(btn => {
    attachRemoveEvent(btn, btn.parentElement);
});

document.getElementById('addTaskBtn').onclick = () => {
    const newTask = document.createElement('div');
    newTask.className = 'task-item';
    newTask.innerHTML = `Task ${taskCounter++}: New work <button class="remove-btn">Remove</button>`;

    const removeBtn = newTask.querySelector('.remove-btn');
    attachRemoveEvent(removeBtn, newTask);

    taskList.appendChild(newTask);
    log(`Added Task ${taskCounter - 1}`);
};

document.getElementById('updateFirstBtn').onclick = () => {
    const firstTask = taskList.querySelector('.task-item');
    if (firstTask) {
        const oldText = firstTask.firstChild.textContent.trim();
        firstTask.firstChild.textContent = oldText + ' (Done) ';
        log(`Updated: ${oldText} → ${firstTask.firstChild.textContent.trim()}`);
    } else {
        log('No task to update');
    }
};
