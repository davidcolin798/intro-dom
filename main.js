const todos = JSON.parse(localStorage.getItem('todos')) || [];
const render = () => {
    const todoList = document.getElementById('todo-list');       
    const todosTemplate = todos.map(t =>'<li>'+ t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i)=>{
        console.log(elemento, i)
        elemento.addEventListener('click',()=>{
            elemento.parentNode.removeChild(elemento);
            todos.splice(i, 1);
            actualizarTodos()
            render()
        })
    })
}
const actualizarTodos=(todos)=>{
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos',todoStrings);
}
window.onload=()=>{
    render()
    const form = document.getElementById('todo-form');
    form.onsubmit = (e)=>{
        e.preventDefault();
        const todo =document.getElementById('todo');
        const todoTexto = todo.value;
        todo.value ='';
        todos.push(todoTexto);
        actualizarTodos()
        render()
        
        
       
    }
}