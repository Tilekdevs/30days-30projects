document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('todo-input');
  const btnSubmit = document.getElementById('add-task');
  const result = document.getElementById('todo-list-result');

  function addTask() {
    const textValue = inputField.value.trim();
    if (textValue === '') {
      alert('Введите текст');
      return;
    }

    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        textElement.style.textDecoration = 'line-through';
      } else {
        textElement.style.textDecoration = 'none';
      }
    });

    const textElement = document.createElement('span');
    textElement.textContent = textValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => li.remove());

    const editBtn = document.createElement('button')
    editBtn.textContent = 'edit';
    let editMode = false;
    editBtn.addEventListener('click', function () {
      if( editMode ) {
        this.textContent = 'edit'
        textElement.contentEditable = false
        textElement.style.border = 'none';
      } else {
        this.textContent = 'ok'
        textElement.contentEditable = true;
        textElement.style.border = '1px dashed gray';
        textElement.focus()
      }
      editMode = !editMode;
    })

    li.appendChild(checkbox);
    li.appendChild(textElement);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    result.appendChild(li);

    inputField.value = '';
  }

  btnSubmit.addEventListener('click', addTask);

  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
