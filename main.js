const todos =[];
window.onload=()=>{
    const form = document.getElementById('todo-form');
    form.onsubmit = (e)=>{
        e.preventDefault();
        const todo =document.getElementById('todo');
        const todoTexto = todo.value;
        todo.value ='';
        todos.push(todoTexto);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML='';
        for (let i = 0; i < todos.length; i++){
            todoList.innerHTML+= '<li>'+ todos[i] +'</li>';
        }
    }
}