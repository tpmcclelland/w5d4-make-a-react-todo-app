import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'
var todos = []

// Your code goes here
function renderView(todos) {
    ReactDOM.render(<Todos todos={todos} />, document.getElementById('todos'))
}

document.getElementById('todoAddBtn').addEventListener('click', addTodo)

document.getElementById('todoInput').addEventListener('keypress', addTodo)

document.getElementById('todoClearBtn').addEventListener('click', clearTodos)

function clearTodos() {
    localStorage.removeItem('todos')
    todos = []
    renderView(todos)
}

function addTodo(event) {
    var todo = document.getElementById('todoInput').value

    if (todo === undefined || todo === '') {
        return
    }

    if ((event.type === 'keypress' && event.key === 'Enter') || event.type === 'click') {
        todos.push(todo)
        // todos.push({item: todo})
        todos = _.orderBy(todos)
        localStorage.setItem('todos', todos)
        document.getElementById('todoInput').value = ''
        renderView(todos)
    }
}

function initRender() {
    // console.log(_.split(localStorage.getItem('todos'),','))
    if (localStorage.getItem('todos') !== null) {
        todos = _.split(localStorage.getItem('todos'),',')
        renderView(todos)
    }

}

initRender()
