window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert('Please enter a task');
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add("task");

        const taskElementContent = document.createElement('div');
        taskElementContent.classList.add("content");

        taskElement.appendChild(taskElementContent);

        const taskElementInput = document.createElement('input');
        taskElementInput.classList.add('text');
        taskElementInput.type = "text";
        taskElementInput.value = task;
        taskElementInput.setAttribute('readonly', 'readonly');

        taskElementContent.appendChild(taskElementInput);

        const taskElementActions = document.createElement('div');
        taskElementActions.classList.add("actions");

        const taskElementActionsEdit = document.createElement('button');
        taskElementActionsEdit.classList.add("edit");
        taskElementActionsEdit.innerHTML = "Edit";

        const taskElementActionsDelete = document.createElement('button');
        taskElementActionsDelete.classList.add("delete");
        taskElementActionsDelete.innerHTML = "Delete";

        taskElementActions.appendChild(taskElementActionsEdit);
        taskElementActions.appendChild(taskElementActionsDelete);

        taskElement.appendChild(taskElementActions);

        listElement.appendChild(taskElement);

        input.value = "";

        taskElementActionsEdit.addEventListener('click', () => {
            if (taskElementActionsEdit.innerText.toLowerCase() == 'edit') {
                taskElementInput.removeAttribute('readonly');
                taskElementInput.focus();
                taskElementActionsEdit.innerText = "Save";}
            else {
                taskElementInput.setAttribute('readonly', 'readonly');
                taskElementActionsEdit.innerText = "Edit";
            }
        });

        taskElementActionsDelete.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        });
    })
})
