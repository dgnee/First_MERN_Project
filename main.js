if (typeof window !== 'undefined') {
    init()

    function init(){
        document.querySelector('form').addEventListener('submit', addToDo);
        document.getElementById('clear').addEventListener('click', clearTodoList);
        document.querySelector('ul').addEventListener('click', deleteOrCheck);
    }

    function deleteOrCheck(e) { 
        if (e.target.className == 'delete')
            deleteToDo(e)
        else {
            checkToDo(e)
        }
    }

    function deleteToDo(e) { // Delete the to do list when the X button is pressed
        let remove = e.target.parentNode;
        let parentNode = remove.parentNode;
        parentNode.removeChild(remove);
    }

    function checkToDo(e) { // After the to do list is checked, the font color became lighter
        const todo = e.target.nextSibling;
        if (e.target.checked) {
            todo.style.color = "#dddddd"
        } else {
            todo.style.color = "#000000"
        }
    }

    function clearTodoList(e) { // Delete the whole to do list
        let ul = document.querySelector('ul').innerHTML = '';
    }

    function addToDo(e) { // add a new to do
        e.preventDefault();
        let toDoValue = document.querySelector('input');
        if (toDoValue.value !== '')
            console.log(toDoValue.value)

            addTask(toDoValue.value);
            toDoValue.value = ''; // empty the blank
    }

    function addTask(value) {
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        // li.innerHTML = `<input type="checkbox"><label>${value}</label><span class="delete">x</span>`;
        li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${value}</label>`;
        // li.innerHTML = `<input type="checkbox"><label>${value}</label>`;
        ul.appendChild(li);
        document.querySelector('.todolist').style.display = 'block';
    }
}