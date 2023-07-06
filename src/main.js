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

        const taslElementActionsDelete = document.createElement('button');
        taslElementActionsDelete.classList.add("delete");
        taslElementActionsDelete.innerHTML = "Delete";

        taskElementActions.appendChild(taskElementActionsEdit);
        taskElementActions.appendChild(taslElementActionsDelete);

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

        taslElementActionsDelete.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        });
    })
})
