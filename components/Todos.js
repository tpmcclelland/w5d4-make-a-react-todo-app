import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const TodoItems = props.todos.map((item, i) => {
        return <TodoItem item={item} key={i} />
    })

    return <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Todo List</h3>
              </div>
              <div className="panel-body">
                <div className="list-group">
                    {TodoItems}
                </div>
              </div>
          </div>
}

export default Todos
